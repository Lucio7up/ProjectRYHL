const { User } = require("../db/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.register = promise(async (req, res) => {
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) throw new Exceptions.EmailExist

    const hash = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({
        ...req.body,
        password: hash
    })

    const saveUser = await newUser.save()
    res.status(200).json({
        message: "Successfully register a new user",
        user: newUser
    })
})

exports.login = promise(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Exceptions.CredentialsNotMatched

    const matchedPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!matchedPassword) throw new Exceptions.CredentialsNotMatched

    const token = await jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.ACCESS_TOKEN_SECRET)

    res.status(200).json({
        token: token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    })
})

exports.profile = promise(async (req, res) => {
    const user = await User.findOne({ email: req.user.email })
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        deliveryAddress: user.deliveryAddress,
        masterCardNumber: user.masterCardNumber
    })
})

exports.updateProfile = promise(async (req, res) => {
    const body = req.body
    if (body.password) {
        const hash = bcrypt.hashSync(body.password, 10)
        const updateUser = await User.updateOne(
            { _id: req.user._id },
            {
                $set: {
                    ...body,
                    password: hash
                }
            }
        )
    }
    else {
        const updateUser = await User.updateOne(
            { _id: req.user._id },
            {
                $set: {
                    ...body
                }
            }
        )
    }

    const user = await User.findById(req.user._id)
    if (!user) throw new Exceptions.NotFound("User not found")

    res.status(200).json({ message: "Successfully updated user", user })
})