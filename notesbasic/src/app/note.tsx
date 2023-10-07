import React from 'react'

export const Note: React.FC<{note:string}> = ({note}) => {
  return (
    <div><p>{note}</p></div>
  )
}
