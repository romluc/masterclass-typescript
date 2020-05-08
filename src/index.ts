import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello Man!',
  });
});

app.listen(3333, () => {
  console.log(`Server up and running on port 3333 🚀`);
});
