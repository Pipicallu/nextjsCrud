
import React from 'react'
import {Note} from './note'
import { WriteNote } from './NewNote';

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.SECRET_URI;


async function getNotes() {
      const client = new MongoClient(uri);
      const database = client.db('basicNotesApp');
      const notes = database.collection('Notes');
      const allNotes = await notes.find().toArray();
      return allNotes 
  }



 const MyNotes = ({data}) => {
    return (
        <>
         <div><h2>Write your notes below</h2></div>
         <ul>
            {data.map(n => <li><Note note={n.note} /></li>)}
         </ul>
         <WriteNote />
        </>

    )
}

export default async function Page() {
    const data = await getNotes()
    console.log(data)
    return <MyNotes data={data} />
  }
 



