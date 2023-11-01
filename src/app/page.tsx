

import React from 'react'
import {Note} from './note'
import {WriteNote} from './NewNote'

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.SECRET_URI;


async function getNotes() {
      const client = new MongoClient(uri);
      const database = client.db('basicNotesApp');
      const notes = database.collection('Notes');
      const allNotes = await notes.find().toArray();
      return allNotes 
  }


async function getData() {
    const res = await fetch('https://swapi.dev/api/people/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   console.log("******", res);
    if (!res.ok) {
      // This will activate the closest error.js Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


 const MyNotes = ({data}) => {
    return (
        <>
         <div><h2>Write your notes below</h2></div>
         <ul>
            {data.map(n => <li><Note note={n.note} /></li>)}
         </ul>
        </>

    )
}

export default async function Page() {
    const data = await getNotes()
    console.log(data)
    return <MyNotes data={data} />
  }
 


