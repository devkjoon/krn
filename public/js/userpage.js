const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

const upload = multer({ storage: storage }).single('profilePhoto');

app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('File uploaded successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});