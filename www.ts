import express from 'express';
import Server from './server';

const server = new Server();
const app:express.Application = server.getInstance();

app.listen(8000, () => {
  console.log('server start!');
});
