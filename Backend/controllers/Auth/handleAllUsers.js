const UserDB = require('../../models/User');

const handleAllUsers = async (req, res) => {
    let users;
    try {
        users = await UserDB.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
};

module.exports = handleAllUsers;