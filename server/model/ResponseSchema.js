import mongoose from 'mongoose';

const responseSchema = mongoose.Schema({
    content_id: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
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
        default: Date.now()
    }
});

const Response = mongoose.model('Response', responseSchema);
export default Response;