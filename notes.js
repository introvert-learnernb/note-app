import fs from 'fs';
import chalk from 'chalk';

console.log('notes js is running..');

const addNote = (title,body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note)=>{
        return note.title === title;
    });

    if(!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
    
       saveNotes(notes);
       console.log(chalk.green.inverse.bold('New note added'));
    }else{
        console.log(chalk.red.inverse.bold('Note title taken!!!'));
    }

   
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const newNotes = notes.filter(item => item.title !== title)

    if(notes.length > newNotes.length){
        saveNotes(newNotes);
        console.log(chalk.green.inverse.bold(`${title} is removed...`));
    }else{
        console.log(chalk.red.inverse.bold(`No notes found`));
    }
    
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const listNotes = () =>{
    console.log(chalk.green.inverse(`Your notes..`));
    const notes = loadNotes();
    return notes.forEach((note)=>{
        console.log(note.title);
    });
}

const readNote = (title) =>{
    console.log(chalk.green.inverse(title));
    const notes = loadNotes();
    const result = notes.find((note)=>{return note.title === title});

    if(result){
        console.log(result.body);
    }else{
        console.log(chalk.red.inverse(`No note found :(`));
    }
}

export {addNote, removeNote, listNotes, readNote}