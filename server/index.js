const express = require('express');
const path = require('path');
const addCow = require('../database/index.js').addCow;
const getCowList = require('../database/index.js').getCowList;
const deleteCow = require('../database/index.js').deleteCow;


const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());


app.post('/saveCow', (req, res) => {
  addCow(req.body.cowName, req.body.cowDesc, (err, result) => {
    if(err) throw err;
    res.send('save successful')
  })
})
  // res.redirect('back');

app.get('/getCowList', (req, res) => {
  getCowList((err, result) => {
    if(err) throw err;
    res.send(result);
  })
})


app.post('/deleteCow', (req,res) => {
  console.log(req.body);
  deleteCow(req.body.id, (err, result) => {
    if (err) throw err;
    res.send('deletion successful');
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
