const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const expressLayouts = require('express-ejs-layouts');
const { mongoConnect } = require('./db/mongoose');
const multer = require('multer');
// Rouetes
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('view engine', 'ejs');

const registerRoutes = require('./routes/registerRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origites/registerRoutesn', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   next();
// });

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    const type = file.mimetype.split('/')[1];
    cb(null, `${file.fieldname}-${req.body.rollNo}.${type}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const newLocal = multer({
  storage: fileStorage,
  fileFilter: fileFilter
}).single('icard');

app.use(newLocal);

app.use(registerRoutes);

app.listen(PORT, () => {
  mongoConnect(() => {});
  console.log(`server started at port ${PORT}`);
});
