import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import UserModal from "../model/userSchema.js";
dotenv.config();

const secret = process.env.SECRET

export const fetchAllUser = async (req, res) => {

  try{
      const user = await UserModal.find()

      res.status(200).json(user);

  } catch(error) {
      res.status(404).json(error);
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exisitingUser = await UserModal.findOne({ email });

    if (!exisitingUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: exisitingUser.email, id: exisitingUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: exisitingUser, token });
    
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const register = async (req, res) => {
  const { email, password, username} = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, username: `${username}`, isAdmin: true });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
export const changePassword = async (req, res) => {
    const {email, password, newpassword, confirmpassword} = req.body;
    try {
        const user = await UserModal.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Password incorrect" });

        if(newpassword === confirmpassword){
          const hashedPassword = await bcrypt.hash(newpassword, 12);
          const result = await UserModal.findOneAndUpdate({email},{password: hashedPassword})
          res.status(201).json({ result });
        }
        else{
          res.status(400).json({ message: "Password do not match" });
        }


    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    } 
};
export const resetPassword = async (req, res) => {
  const {email,newpassword, confirmpassword} = req.body;
  try {
      if(newpassword === confirmpassword){
        const hashedPassword = await bcrypt.hash(newpassword, 12);
        const result = await UserModal.findOneAndUpdate({email},{password: hashedPassword})
        res.status(201).json({ result });
      }else {
        res.status(409).json({ message: "Password do not match"})
      }
     
  } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
  } 
};