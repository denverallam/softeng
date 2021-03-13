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
    category: {
        type: String,
        required: true
    },
    image: String,
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Content = mongoose.model('Content', contentSchema);

export default Content;