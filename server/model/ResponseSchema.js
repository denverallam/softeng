import mongoose from 'mongoose';

const responseSchema = mongoose.Schema({
    content_id: {
        type: String,
        required: true
    },
    author: String,
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Response = mongoose.model('Response', responseSchema);

export default Response;