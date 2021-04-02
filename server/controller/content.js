import mongoose from 'mongoose';
import Content from '../model/ContentSchema.js';
import Response from '../model/ResponseSchema.js';

export const getAllContent = async (req, res) => {

    try{
        const content = await Content.find()

        res.status(200).json({contentList:content});
    } catch(error) {
        res.status(404).json(error);
    }
}

export const getContentByCategory = async (req, res) => {
    const {category} = req.params

    try{
        const content = await Content.find({category});

        res.status(200).json({contentList:content});
    } catch(error) {
        res.status(404).json(error);
    }
}


export const getContent = async (req, res) => {
    const {id} = req.params;

    try{
        const content = await Content.findById(id);

        res.status(200).json({content});
    } catch(error) {
        res.status(404).json(error);
    }
}

export const createContent = async (req, res) => {
    const newcontent = req.body;
    const {title, author, content, category} = req.body
    try{
        if(!title || !author || !content || !category){
            return res.status(409).json({message:"Please fill in the form"});
        }
        
        const newContent = new Content(newcontent);
        await newContent.save();
        res.status(201).json({content:newContent, success:true});

    } catch(error) {
        res.status(500).json({message:"Something went wrong"});
    }
}

export const updateContent = async (req, res) => {
    const {id} = req.params;
    const content = req.body;

    try{
        const updateContent = await Content.findByIdAndUpdate(id, {...content, id}, {new: true});
        res.status(201).json({content:updateContent, id});
    } catch(error) {
        res.status(409).json(error);
    }
}

export const deleteContent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Content not found');
    
    await Content.findByIdAndDelete(id);
    await Response.deleteMany({content_id:id})
    
    res.status(201).json({id:id, message: 'Content Deleted'});
}

