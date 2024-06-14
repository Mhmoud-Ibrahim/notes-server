import express from 'express'
import { addNote, deleteNote, getAllnotes, getNote, updateNote } from './notes.controller.js';

const noteRouter = express.Router()
   
noteRouter.post('/notes',addNote)
noteRouter.get('/notes',getAllnotes)
noteRouter.get('/notes/:id',getNote)
noteRouter.delete('/notes/:id',deleteNote)
noteRouter.put('/notes/:id',updateNote)


export default noteRouter;
