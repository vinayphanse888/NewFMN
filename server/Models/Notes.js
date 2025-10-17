import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileDescription: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    files: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Notes", NoteSchema);