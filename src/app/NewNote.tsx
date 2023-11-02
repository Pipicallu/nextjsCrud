'use client'


import React, {useState} from 'react'

const { MongoClient, ServerApiVersion } = require('mongodb');

const insertNote = async (data:{ note: string}) =>{
    const uri = process.env.SECRET_URI;
    const client = new MongoClient(uri);
    const database = client.db('basicNotesApp');
    const notes = database.collection('Notes');
    return await notes.insertOne(data);
}


export const WriteNote: React.FC = async () => {
   const [state, setState] = useState('');
     

    return (<form>
        <label htmlFor="note">Note:</label>
        <input type="text" id='note' name='note' onChange={e => setState(e.target.value)} />
        <button type='submit' onSubmit={await insertNote({note: state})}>Submit</button>
    </form>)
};