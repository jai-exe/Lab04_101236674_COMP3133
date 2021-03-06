const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes')

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://gbc:s3cr3t@cluster0.dhvqi.mongodb.net/UserDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection', err)
});

app.use(userRouter);

app.listen(8081, () => { console.log('Server is running...') });
