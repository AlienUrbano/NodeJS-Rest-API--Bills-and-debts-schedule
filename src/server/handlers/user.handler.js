const { User } = require('../../database/models/index')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

exports.signUp = async (req,res) => {

    try {

        let {firstName, lastName, email, password } = req.body

        if(!firstName || !lastName || !email || !password){

            return res.json({msg: 'all the fields are required to create a user: firstName:string , lastName:string , email:string, password:string'})
        }

        password = bcrypt.hashSync(password, salt)

        const data = {
            firstName,
            lastName,
            email,
            password
        }
        
        const newUser = await User.create(data)

        if(!newUser) {
            return res.json({msg: 'error at creating a new user, try again'})
        }

        return res.json(newUser)


    } catch(error) {

        return res.status(500).send({
            error: 'error', 
            message: error.message})
    }
}

exports.signIn = async (req,res) => {

    try {

        const {email, password} = req.body

        const account = await User.findOne({where: {email}})

        if(!account){
            return res.status(400).json({msg: 'User not found'})
        }

        const passwordMatches = bcrypt.compareSync(password, account.password)

        if(!passwordMatches){
            return res.status(400).json({msg: 'Wrong password'})
        }

        return res.json({msg: 'login sucess'})


    } catch(error) {

        return res.status(500).send({
            error: 'error', 
            message: error.message})
    }
}