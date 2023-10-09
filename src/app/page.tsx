

import React from 'react'
import {Note} from './note'
import {WriteNote} from './NewNote'



export default function Page(): React.JSX.Element {
    return (
        <>
         <div><h2>Write your notes below</h2></div>
         <Note note={'hello'} />
        <ul>{notes}</ul>
         <WriteNote />
        </>


    )
}
 


