import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListCows from './listCows.jsx';
import EditCow from './editCow.jsx';


export default function App () {

  const[cowList, setCowList] = useState([]);
  const[id, setId] = useState('');
  const[name, setName] = useState('');
  const[desc, setDesc] = useState('');

  let getCowList = () => {
    axios.get('/getCowList')
    .then((cows) => {
      setCowList(cows.data);
    })
  }

  let handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  let handleDescChange = (evt) => {
    setDesc(evt.target.value);
  }

  let handleSaveClick = () => {
    axios.post('/saveCow', {cowName: name, cowDesc: desc})
    .then(() => location.reload())
    .then((response) => {
      console.log(response)
    });
  }

  useEffect(getCowList, [])


  return(
    <div>
      <form action="/saveCow" id="saveCowForm" method="post">
        <ul>
          <li>
            <label >Cow Name:</label>
            <input type="text" name="cowName" onChange={handleNameChange}/>
          </li>
          <li>
            <label >Cow Description:</label>
            <input type="text" name="cowDesc" onChange={handleDescChange}/>
          </li>
          <li>
            <button type="button" form="saveCowForm" onClick={handleSaveClick}>Save Cow</button>
          </li>
        </ul>
      </form>
      <div>
        <ListCows cowList={cowList} id={id} name={name} desc={desc} setId={setId} setName={setName} setDesc={setDesc}/>
      </div>
    </div>
  )
}
