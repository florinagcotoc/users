
'use strict';
import express, { Express, Request, Response } from 'express';
import users from "./users.json"
import cors from 'cors';
import { parseJSON } from './parserCombinators';

const fs = require('fs');


const app: Express = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you want to allow
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
};

app.use(cors(corsOptions));
// const jsonString = "ana"
// const myStr = parseJSON(jsonString);

app.get('/users', (req: Request, res: Response) => {

fs.readFile('./users.json', (err: Error, data: any) => {
    if (err) throw err;
    let users = JSON.parse(data);
    res.json(users);
    
});
});



app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8080`);
});