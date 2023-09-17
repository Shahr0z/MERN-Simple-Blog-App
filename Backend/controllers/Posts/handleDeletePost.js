const BlogDB = require('../../models/Blog');

const handleDeletePost = async (req, res) => {
    const { id } = req.params;
    let deletedPost;
    try {
        deletedPost = await BlogDB.findByIdAndRemove(id).populate('user');
        await deletedPost.user.blogs.pull(deletedPost);
        await deletedPost.user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
    if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
        deletedPost,
        message: "Post Deleted"
    });

}

module.exports = handleDeletePost;