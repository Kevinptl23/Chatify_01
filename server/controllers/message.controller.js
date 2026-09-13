import fs from 'fs';
import { catchAsyncError } from "../middleware/catchAsyncError.middleware.js";
import User from "../models/user.model.js";
import Message from '../models/message.model.js';
import {v2 as cloudinary} from 'cloudinary';
import { getReceiverSocketId } from "../utils/socket.js";
import { io } from "../utils/socket.js";


export const getAllUsers = catchAsyncError(async (req, res, next) => {
    const user = req.user;
    const filteredUsers = await User.find({_id: {$ne: user}}).select("-password");

    res.status(200).json({
        success: true,
        users: filteredUsers
    })
});

export const getMessages = catchAsyncError(async (req, res, next) => {
    const receiverId = req.params.id;
    const myId = req.user._id;
    const receiver = await User.findById(receiverId);

    if(!receiver){
        return res.status(400).json({
            success: false,
            message: "Receiver id Invalid!"
        })
    }

    const message = await Message.find({
        $or: [
            {senderId: myId, receiverId: receiverId},
            {senderId: receiverId, receiverId: myId}
        ]
    }).sort({createdAt: 1})

    res.status(200).json({
        success: true,
        message
    })
})

export const sendMessage = catchAsyncError(async (req, res, next) => {
    const {text} = req.body;
    const media = req?.files?.media;
    const {id: receiverId} = req.params;
    const senderId = req.user._id;

    const receiver = await User.findById(receiverId);
    if(!receiver){
        return res.status(400).json({
            success: false,
            message: "Receiver id Invalid!"
        })
    }

    const senitizedText = text?.trim() || "";

    if(!senitizedText && !media){
        return res.status(400).json({
            success: false,
            message: "Can not send empty message."
        })
    }

    let mediaUrl = "";
    if(media){
        try {
            const uploadResponse = await cloudinary.uploader.upload(media.tempFilePath, {
                folder: "chatApp_Media",
                resource_type: "auto",
                transformation: [
                    {width: 1200, crop: "limit"},
                    {quality: "auto"},
                    {fetch_format: "auto"}
                ]
            });

            mediaUrl = uploadResponse?.secure_url;
        } catch (error) {
            console.error("Cloudinary media upload error: ", error);
            return res.status(500).json({
                success: false,
                message: "Failed to upload media. Please try again later."
            });
        } finally {
            if(media?.tempFilePath && fs.existsSync(media.tempFilePath)){
                fs.unlinkSync(media.tempFilePath);
            }
        }
    }

    const newMessage = await Message.create({
        senderId,
        receiverId,
        text: senitizedText,
        media: mediaUrl
    });

    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    res.status(201).json({
        newMessage
    });
});

