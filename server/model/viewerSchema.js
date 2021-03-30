import mongoose from "mongoose";

const viewerSchema = mongoose.Schema({
  username: { type: String, required:true, default: 'Anonymous' },
  email: { type: String, required: true },
  isAdmin: {type: Boolean, default: false}
});

export default mongoose.model("Viewer", viewerSchema);