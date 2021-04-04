import mongoose from 'mongoose';

const contentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    selectedFile: String,
    views: {
        type: Number,
        default: 0
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
});

const Content = mongoose.model('Content', contentSchema);

export default Content;