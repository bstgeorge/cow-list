import React from 'react';
import { useState } from 'react';

let handleNameChange = () => {

}

let handleDescChange = () => {

}

let handleSaveClick = () => {

}

export default function EditCow ({id, name, desc}) {
  return(
    <div>
    <form action="/saveCow" id="editCowForm" method="post">
      <ul>
        <li>
          <label >Cow Name:</label>
          <input type="text" name="cowName" value={name} onChange={handleNameChange}/>
        </li>
        <li>
          <label >Cow Description:</label>
          <input type="text" name="cowDesc" value={desc} onChange={handleDescChange}/>
        </li>
        <li>
          <button type="button" form="editCowForm" onClick={handleSaveClick}>Save</button>
        </li>
      </ul>
    </form>
  </div>
  )
}