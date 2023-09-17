const BlogDB = require('../../models/Blog');
const UserDB = require('../../models/User');

const handleGetUserPost = async (req, res) => {
    const { id } = req.params;
    let userPosts;
    try {
        userPosts = await UserDB.findById(id).populate('blogs');
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
    if (!userPosts) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
        userPosts,
        message: "User Posts"
    });

}

module.exports = handleGetUserPost;
