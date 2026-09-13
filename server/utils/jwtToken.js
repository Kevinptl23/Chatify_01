import jwt from 'jsonwebtoken';

export const generateToken = (user, message, statusCode, res) => {
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    })

    const isProduction = process.env.NODE_ENV === "production";

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        sameSite: isProduction ? "none" : "lax",
        secure: isProduction
    }).json({
        success: true,
        message,
        user,
        token
    });
}