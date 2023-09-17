const BlogDB = require('../../models/Blog');

const handleUpdatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, image } = req.body;
    let updatedPost;
    try {
        updatedPost = await BlogDB.findByIdAndUpdate(id, { title, description, image }, { new: true });
    } catch (err) {
        return console.log(err);
    }
    if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({
        updatedPost,
        message: "Post Updated"
    });
}

module.exports = handleUpdatePost;