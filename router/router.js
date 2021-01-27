const express = require('express');
const router = express.Router();
const Client = require('../models/client.js');

let data = { cnt: 1 };
router.get('/', (req, res) => {
  Client.find(function (err, clients) {
    if (err) return res.status(500).send({ error: 'read fail' });
    console.log(clients);
    res.render('index.html', { clients: clients });
  });
});

router.post('/create', (req, res) => {
  let client = new Client(req.body);

  client.save(function (err) {
    if (err) {
      console.log('error save');
      return;
    }
    console.log('success save');
    res.redirect("/");

  });
});

router.get('/delete/:id', (req, res) => {
  Client.remove({_id:req.params.id}, function(err) {
    if(err){
      console.log(err);
    }
    else{
      console.log("Client deleted");

      res.redirect("/");
    }
  })
});

module.exports = router;
