const BlogDB = require('../../models/Blog');

const handleAllPosts = async (req, res) => {
    let posts;
    try {
        posts = await BlogDB.find().populate('user')
    } catch (err) {
        console.log(err);
    }
    if (!posts) {
        return res.status(404).json({ message: "No Posts Found" });
    }
    return res.status(200).json({
        posts,
        message: "Posts Get Successfully"
    });
}

module.exports = handleAllPosts;