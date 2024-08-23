import express from "express";

import {
     getAllNotes,
     createNote,
     getNoteById,
     updateNote,
     deleteNote,
     deleteAllNote 

} from "../controller/notes.js";
 
const router = express.Router();

// routing for all route // HTTP Methods
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);
router.delete("/",  deleteAllNote);


export default router;