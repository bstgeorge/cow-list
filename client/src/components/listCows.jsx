import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import axios from 'axios';
import EditCow from './editCow.jsx';

export default function ListCows ({cowList, id, setId}) {

  let handleDeleteClick = (evt) => {
    console.log(evt.target.value);
    axios.post('/deleteCow', {id: evt.target.value})
      .then(() => location.reload())
      .then((response) => {
        console.log(response)
    });
  }

  let handleEditClick = (evt) => {
    console.log(evt.target.value);
    setId(evt.target.value);
    // setName(evt.target.value.name);
    // setDesc(evt.target.value.desc);
    // ReactDOM.render(<EditCow id={id} name={name} desc={desc} setId={setId} setName={setName} setDesc={setDesc}/>, document.getElementById("1234"));
  }

  return(
    <div>
      {cowList.map((oneCow) => {
        return(
          <div key={oneCow.id}>
            <dl>
              <dt>Cow Name:</dt>
              <dd key={oneCow.cowName}>{oneCow.cowName}</dd>
              <dt>Cow Description:</dt>
              <dd key={oneCow.cowDesc}>{oneCow.cowDesc}</dd>
              <button type="button" value={oneCow.id} onClick={handleDeleteClick}>Delete Cow</button>
              <button type="button" value={oneCow.id} onClick={handleEditClick}>Edit Cow</button>
              <div id="1234"></div>
            </dl>
          </div>)
      })}
    </div>)
}