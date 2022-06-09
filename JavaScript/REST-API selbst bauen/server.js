const express = require('express');
const bodyParser = require('body-parser');
const mongo = require("mongodb").MongoClient;
const url = "mongodb://10.115.2.21:8017";

let db;
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("Bling:" + err);
      return;
    } else {
      console.log("found");
    }
    db = client.db("students");
    console.log("running");
  }
);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = [{"id":1,"name":"moritz"},{"id":2,"name":"eric"},{"id":3,"name":"fynn"}]

app.get('/students', (req, res) => {

    db.collection("students")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      
      res.send(result);
    });


});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    res.send(students[id]);

});

app.post('/students', (req, res) => {
    const content = req.body;
    students.push(content);
    res.send(content);

});

app.listen(3000, () => console.log(`Student App listening on port ${3000}!`))