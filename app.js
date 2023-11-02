import {addNote, removeNote, listNotes, readNote} from "./notes.js";
import yargs from "yargs";


//Customize yargs version
yargs.version('1.1.0');


//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note...',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type :'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type :'string'
        }
    },
    handler(argv){
        addNote(argv.title, argv.body);
    }
})

//Create a remove command
yargs.command({
    command:'remove',
    describe: 'removing a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type :'string'
        }
    },
    handler(argv){
        removeNote(argv.title);
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe: 'listing all the notes.',
    handler(){
        listNotes();
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe: 'reading a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type :'string'
        }
    },
    handler(argv){
        readNote(argv.title);
    }
})

//configuring yargs to parse the command line arguments...
yargs.parse();





// console.log(process.argv);
// console.log(yargs.argv);









// const command = process.argv[2];
// if(command === 'add'){
//     console.log('Adding note...');
// }else if (command === 'remove'){
//     console.log('Removing note...');
// }




// import validator from 'validator';
// import chalk  from 'chalk';



// const boolean = validator.isEmail('intgmail.com');

// console.log(chalk.green.bgWhite.bold(boolean));

// console.log(chalk.inverse('Success'));















// const notes = require('./notes');
// console.log(notes());












// const addition = require('./utils.js')

// const sum = addition(3,5);

// console.log(sum);
