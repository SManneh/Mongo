const db = require('../models');


module.exports = function (app) {

app.get('/api/kudos', function (req, res) {
    db.kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/user', function (req, res) {
    db.user.find({})
      .then(function (data) {
      
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/kudos', function (req, res) {
    console.log('reached kudos');
    db.kudos.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  




}