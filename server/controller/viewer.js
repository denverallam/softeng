import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Viewer from "../model/viewerSchema.js";
dotenv.config();

const secret = process.env.SECRET

export const viewerLogin = async (req, res) => {

    const { email, username } = req.body;

    try {
        const exisitingViewer = await Viewer.findOne({ email });

        if (!exisitingViewer) {
            const result = await Viewer.create({ email, username, isAdmin: false });
            const token = jwt.sign({ email: result.email, id: result._id }, secret);
            res.status(201).json({ result, token });
        } else {
            const token = jwt.sign({ email: exisitingViewer.email, id: exisitingViewer._id }, secret);
            res.status(200).json({ result: exisitingViewer, token });
        }

    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
