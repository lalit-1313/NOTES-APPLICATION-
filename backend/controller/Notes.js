import Note from "../models/noteModel.js"; 

// Get All Note 
export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

// get note by id
export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(note[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createNote = async (req, res) => {
    try {
        await Note.create(req.body);
        res.json({
            "message": "New Note Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateNote = async (req, res) => {
    try {
        await Note.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Note Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
//delete not by id
export const deleteNote = async (req, res) => {
    try {
        await Note.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Note Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

// for Delete All note
export const deleteAllNote = async (req, res) => {
    try {
          await Note.destroy({ where: {}, truncate: false});
        res.json({
            "message": " All Note Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
    
}