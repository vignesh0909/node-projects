const bookings = require('../Model/bookings');
const users = require('../Model/users');
const hotels = require('../Model/hotels');

const validators = require('../Utilities/validator');
const generator = require('../Model/IDGenerator');

exports.registerUser = async (req, res) => {
    try {
        let emailCheck = await users.find({ email: req.body.email });
        //console.log(emailCheck);
        if (emailCheck.length > 0) {
            console.log(emailCheck);
            let err = new Error("User exists with this email id");
            err.status = 400;
            throw err;
        }
        else if (validators.ValidateName(req.body.name) && validators.ValidatePassword(req.body.password) && validators.ValidateMobile(req.body.phoneNo)
            && validators.ValidateEmail(req.body.email)) {
            const Id = generator.generateUserId();
            await users.create({
                userId: Id,
                name: req.body.name,
                address: req.body.address,
                phoneNo: req.body.phoneNo,
                email: req.body.email,
                password: req.body.password
            });
            res.status(201).json({
                status: "success",
                data: {
                    message: `Successfully registered with user id ${Id}`
                }
            });
        } else {
            res.status(400).json({ message: "Failed" })
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    let fetchedUser;
    let invalidUser = false;
    users.findOne({ userId: req.body.userId })
        .then((user) => {
            console.log(user)
            if (!user) {
                invalidUser = true;
                //console.log("hi")
                return res.send({
                    "status": "error",
                    "data": {
                        "message": "Incorrect user id or password"
                    }
                });
            }
            fetchedUser = user;
            return req.body.password === user.password;
        })
        .then((result) => {
            if (!result) {
                invalidUser = true;
                return res.send({
                    "status": "error",
                    "data": {
                        "message": "Incorrect user id or password"
                    }
                });
            } else if (!invalidUser) {
                const username = req.body.userId;
                res.cookie('username', username);
                res.status(201).json(true);
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({
                message: "Auth Failed",
            });
        });
};

exports.getUser = async (req, res) => {
    try {
        if (usersModel.findOne({ userId: req.params.userId }, { _id: 0, __v: 0 })) {
            console.log(req.params.userId);
            const user = await usersModel.find({ userId: req.params.userId }, { _id: 0, __v: 0 });
            console.log(user);
            res.status(200).json({
                status: 'success',
                data: {
                    user,
                },
            });
        } else {
            res.status(400).json({
                message: 'User Id does not exist',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};