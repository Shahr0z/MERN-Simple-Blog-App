const UserDB = require('../../models/User');
const bcrypt = require('bcryptjs');

const handleLogin = async (req, res,) => {
    const { email, password } = req.body;
    let checkUser
    try {
        checkUser = await UserDB.findOne({ email });
    } catch (err) {
        console.log(err);
    }
    if (!checkUser) {
        return res.status(400).json({ message: "Could not find the user" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, checkUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "InCorrect Password" });
    }

    return res.status(200).json({
        checkUser,
        message: "Login Successful",
    });

}

module.exports = handleLogin;