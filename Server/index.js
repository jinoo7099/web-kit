const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config/dev.js');
const apiUserRouter = require('./routes/api.users');
const apiPlanRouter = require('./routes/api.plan');
const apiDetailRouter = require('./routes/api.detail');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongoDb connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('hello world!'));

app.use('/api/users', apiUserRouter);
app.use('/api/plan', apiPlanRouter);
app.use('/api/detail', apiDetailRouter);
app.listen(port, () => console.log('connect server'));
