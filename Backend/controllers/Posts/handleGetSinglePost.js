const BlogDB = require('../../models/Blog');

const handleGetSinglePost = async (req, res) => {
    const { id } = req.params;
    let post;
    try {
        post = await BlogDB.findById(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
        post,
        message: "Post Found"
    });
}

module.exports = handleGetSinglePost;