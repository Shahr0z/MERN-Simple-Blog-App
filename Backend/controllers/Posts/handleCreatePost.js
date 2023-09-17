const mongoose = require('mongoose');
const BlogDB = require('../../models/Blog');
const UserDB = require('../../models/User');

const handleCreatePost = async (req, res) => {
    const { title, description, image, user } = req.body;
    let existingUser
    try {
        existingUser = await UserDB.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "User Does Not Exist" });
    }
    const newPost = new BlogDB({
        title, description, image, user
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newPost.save({ session });
        existingUser.blogs.push(newPost);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Could not create post" });
    }
    return res.status(200).json({
        newPost,
        message: "Post Created"
    });
}

module.exports = handleCreatePost;