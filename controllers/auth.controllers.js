const userModel = require('../models/user.model')

// npm i jsonwebtoken et require 
const jwt = require('jsonwebtoken')

// 1
// Le jwt est valable QUE 3 jours apres on va lui demander de se reconneter
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: maxAge
    })
};

// 2 s'inscrire // Quand tu es sur la page S'INSCRIRE tu m'affiche firstname lastname...
module.exports.signUp = async (req, res) => {
    console.log(req.body)
    const { firstName, lastName, surname, email, password } = req.body
    try {
        const user = await userModel.create([{ firstName, lastName, surname, email, password }])
        res.status(202).json({user})
        console.log(req.body, "req.body")
        console.log({user})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}

// 3 se connecter // 
module.exports.signIn = async (req, res) => {
    // affichage des email et password 
    const { email, password } = req.body
    console.log(`req.body`, req.body)
        try {
            const user = await userModel.login(email, password);
            
            console.log("user" , user)

            const token = createToken(user._id);

            console.log(`token`, token)

            res.cookie('jwt', token, { httpOnly: true, maxAge })
            res.status(201).json({ user: user._id })
        } catch (err) {
            res.status(500).json({ err });
        }
}
// 4 Se deconnecters
module.exports.logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}



module.exports.getUserPage = (req, res) => {
    user.findOne({
            _id: req.params.id
        })
        .then()
        .catch()

}