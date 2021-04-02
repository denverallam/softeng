import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import crypto from 'crypto'
import User from "../model/userSchema.js";
import sendEmail from '../utils/sendEmail.js'
dotenv.config();

const secret = process.env.SECRET

export const fetchAllUser = async (req, res) => {

  try{
      const user = await User.find()

      res.status(200).json(user);

  } catch(error) {
      res.status(404).json(error);
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exisitingUser = await User.findOne({ email });

    if (!exisitingUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong password!" });

    const token = jwt.sign({ email: exisitingUser.email, id: exisitingUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: exisitingUser, token });
    
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const register = async (req, res) => {
  const { email, password, username} = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "Account already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, username: `${username}`, isAdmin: true });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

  }
};
export const changePassword = async (req, res) => {
    const {email, password, newpassword, confirmpassword} = req.body;
    try {
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Password incorrect" });

        if(newpassword === confirmpassword){
          const hashedPassword = await bcrypt.hash(newpassword, 12);
          const result = await User.findOneAndUpdate({email},{password: hashedPassword})
          res.status(201).json({ result, success: true });
        }
        else{
          res.status(400).json({ message: "Passwords do not match" });
        }


    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    } 
};

export const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
  const { password} = req.body;

  try {
      const user = await User.findOne({
          resetPasswordToken
      })

      if(!user) {
          res.status(400).json({ message: "The link has expired. Please try again." })
      }

      if(user){
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.findOneAndUpdate({resetPasswordToken},{password: hashedPassword, resetPassword:undefined, resetPasswordExpire: undefined})
        res.status(201).json({ result, success:true, data:"Password successfully changed!" });
      }

  } catch (error) {
      next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  const {email} = req.body;

  try {
      const user = await User.findOne({email});

      if(!user) {
          return res.status(404).json({ message: "User doesn't exist" });
      }

      const resetToken = user.getResetPasswordToken();

      await user.save();

      console.log(req)
      // const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
      const resetUrl = `${req.get('origin')}/reset-password/${resetToken}`;
      const message = `
          <h1>You have requested a password reset</h1>
          <p>Please go to this link to reset your password</p>
          <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
      `

      try {
          await sendEmail({
              to: user.email,
              subject: "Password Reset Request",
              text: message
          });

          res.status(200).json({success: true,  data: `Email sent to ${email}`});

      } catch (error) {
          user.resetPasswordToken = undefined;
          user.resetPasswordExpire = undefined;

          await user.save();

         return next(res.status(500).json({ message: "Email could not be sent" }));
      }
  } catch (error) {
      next(error);
  }
};

