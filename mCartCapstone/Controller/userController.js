const cart = require('../Model/cart');
const users = require('../Model/users');
const orders = require('../Model/orders');
const products = require('../Model/products');

const validators = require('../Utilities/validator');
const generator = require('../Model/IDGenerator');

exports.signupUser = async (req, res) => {
    try {
        let emailCheck = await users.find({ email: req.body.email });
        //console.log(emailCheck);
        if (emailCheck.length > 0) {
            console.log(emailCheck);
            let err = new Error("Email already exists");
            err.status = 400;
            throw err;
        }
        else if (validators.ValidateName(req.body.username) && validators.ValidatePassword(req.body.password) && validators.ValidateMobile(req.body.phoneNumber)
            && validators.ValidateEmail(req.body.email)) {
            //const Id = generator.generateUserId();
            await users.create(req.body);
            res.status(201).json({
                message: `User Registered Successfully with Name: ${req.body.username}`
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
    users.findOne({ username: req.body.username })
        .then((user) => {
            if (!user) {
                invalidUser = true;
                return res.send({
                    message: "User not registered!",
                });
            }
            fetchedUser = user;
            return req.body.password === user.password;
        })
        .then((result) => {
            if (!result) {
                invalidUser = true;
                return res.send({
                    message: "Incorrect Password",
                });
            } else if (!invalidUser) {
                res.status(200).json(true);
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