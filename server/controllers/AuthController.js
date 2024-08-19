
const User = require('../models/User');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register= async (req,res)=>{
    const {name,lastname,email,password}=req.body;
    console.log("istek geldi")
    try{
       
        let user = await User.findOne({ email });
        if (user) {
            return res.json({ message: 'Böyle bir kullanıcı zaten kayıtlı' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name,lastname, email, password:hashedPassword });
        await user.save();
        
        res.status(200).json({
            message:"Başarıyla kayıt oldunuz giriş ekranına yönlendiriliyorsunuz.."
        })
    }
    catch(e){
        res.status(400).json({message:"server error"})
    }

}

const login= async (req,res)=>{
    console.log("login istek geldi")
    const {email,password}=req.body;
    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({success:false, message: 'Böyle bir kullanıcı bulunamadı'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.json({ success:false,message: 'Şifreniz yanlış' });
        }
        const token = jwt.sign({ userId: user._id }, 'sddfddfgfgd', {
            expiresIn: '1h',
            });
        res.status(200).json({
            success:true,
            name:user.name,
            message:"Başarıyla giriş yaptınız",
            token:token,
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message
        })
    }

}

module.exports={register,login}