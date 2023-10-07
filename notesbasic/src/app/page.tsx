import React from 'react'
import {Note} from './note'
import {WriteNote} from './NewNote'

export default function Page(): React.JSX.Element {

    const apiKey = process.env.API_KEY;
    console.log(apiKey, 'apiKey');
    return (
        <>
         <div><h2>Write your notes below</h2></div>
         <Note note={'hello'} />
         <WriteNote />
        </>


    )
}
 