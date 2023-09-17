const UserDB = require('../../models/User');
const bcrypt = require('bcryptjs');

const handleResgister = async (req, res,) => {
    const { name, email, password } = req.body;
    let checkUser
    try {
        checkUser = await UserDB.findOne({ email });
    } catch (err) {
        console.log(err);
    }
    if (checkUser) {
        return res.status(400).json({ message: "User Already Exists" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const newUser = new UserDB({
        name,
        email,
        password: hashedPassword,
        blogs: []
    });

    try {
        await newUser.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(200).json({
        newUser,
        message: "User Created Successfully"
    });
}

module.exports = handleResgister;