import express from "express";
const router = express.Router();
import NotesController from "../Controllers/NotesController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = "./files";
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// Routes
router.post("/upload", upload.single("file"), NotesController.uploadNote);
router.get("/getFiles", NotesController.getNote);
router.get("/getFiles/:id", NotesController.getNoteByID);

export default router;