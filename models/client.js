const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: 'string',
  phone: 'string',
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
