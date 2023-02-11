const UserModal = require("../model/UserSchema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

function LoginUser(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (!email) {
        return res.json({ error: "Enter email address" })
    }
    else {
        UserModal.findOne({ email }, (err, data) => {
            if (err) {
                return res.json({
                    message: "not a registered email address"
                });
            } else {
                bcrypt.compare(password, data.password, function (err, result) {
                    if (result) {
                        let accesstoken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "120m" })
                        return res.json({
                            message: "Logged in successfully",
                            login: true,
                            token: accesstoken
                        })
                    }
                    else {
                        return res.json({
                            message: "Incorrect Password"
                        })
                    }
                });
            }
        })
    }
}

module.exports = LoginUser;