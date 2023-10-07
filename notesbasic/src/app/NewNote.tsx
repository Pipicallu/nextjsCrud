import React from 'react'

export const WriteNote: React.FC = () => {

  
    return (<form>
        <label htmlFor="note">Note:</label>
        <input type="text" id='note' name='note' />
        <button type='submit'>Submit</button>
    </form>)
};