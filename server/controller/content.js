import mongoose from 'mongoose';
import Content from '../model/ContentSchema.js';
import Response from '../model/ResponseSchema.js';

export const getAllContent = async (req, res) => {

    try{
        const content = await Content.find()

        res.status(200).json(content);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getContentByCategory = async (req, res) => {
    const {category} = req.params

    try{
        const content = await Content.find( {category});

        res.status(200).json(content);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


export const getContent = async (req, res) => {
    const {id} = req.params;

    try{
        const content = await Content.findById(id);

        res.status(200).json(content);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createContent = async (req, res) => {
    const content = req.body;
    const newContent = new Content(content);

    try{
        await newContent.save();
        res.status(201).json(newContent);
    } catch(error) {
        res.status(409).json({message: error});
    }
}

export const updateContent = async (req, res) => {
    const {id} = req.params;
    const content = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Content not found');

    const updateContent = await Content.findByIdAndUpdate(id, {...content, id}, {new: true});

    res.json(updateContent);
}

export const deleteContent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Content not found');
    
    await Content.findByIdAndDelete(id);
    await Response.deleteMany({content_id:id})
    
    res.json({message: 'Content Deleted'});

}

