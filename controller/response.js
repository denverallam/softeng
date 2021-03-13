import mongoose from 'mongoose';
import Response from '../model/ResponseSchema.js';

export const getAllResponses = async (req, res) => {
    const {content_id} = req.params;
    try{
        const response = await Response.find({content_id});
        res.status(200).json(response);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const getResponse = async (req, res) => {
    const {id} = req.params;

    try{
        const response = await Response.findById(id);
        res.status(200).json(response);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createResponse = async (req, res) => {
    const {content_id} = req.params;
    const response = req.body;

    const newResponse = new Response({...response, content_id: content_id});

    try{
        await newResponse.save();
        res.status(201).json(newResponse);
    } catch(error) {
        res.status(409).json({message: error});
    }
}

export const updateResponse = async (req, res) => {
    const {id} = req.params;
    const response = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Response not found');

    const updateResponse = await Response.findByIdAndUpdate(id, {...response, id}, {new: true});

    res.json(updateResponse);
}

export const deleteResponse = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Content not found');
    
    await Response.findByIdAndDelete(id);
    res.json({message: 'Content Deleted'});
}



