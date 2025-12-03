const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/paintings', (req, resp)=>{
    fs.readFile('./data/paintings-nested.json', (err, data) =>{
        if (err){
            return resp.status(500).json({error: "Failed to read the file"});
        }
        resp.json(JSON.parse(data));
    });
});

app.listen(8080);