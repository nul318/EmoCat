Object.assign = require('object-assign');   //노드 하위버전에서 assign 메서드 지원용 모듈
var express = require('express');
var router = express.Router();
var session = require('express-session');
var models = require('../models');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var multer = require('multer');
var async = require('async');
var config = require('../config/config.json')[process.env.NODE_ENV || "development"];

router.use(session({
  key: 'scgsessionkey',
  secret: '5c9SeCrEtKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

function auth(req, res, next){
  if (req.session.user){
    auth = req.session.user.auth;
    if (auth >= 10) next();
    else    res.redirect('/');
  }else res.redirect('/login');
}

router.post('/emoInfo', function (req, res, next){
  models.emoticon.create({
    happiness: req.query.happiness,
    face_id : req.query.face_id,
  }).then(function(){
    res.send({result: true});
    console.log(req.query.device_id + "의 감정 상태가 추가되었습니다.");
  }).catch(function(){
    res.send({result: false});
  });
})

router.get('/info/user/:uid/:id', function(req, res){
  var recentData = {};

  models.emoticon.findAll({
    include: { model: models.device, include: [models.user]},
  }).then(function(data){
    res.send(data);
  })
});

router.get('/info/device/:device_id/id', function(req, res){

});


module.exports = router;

// router.get('/info/user/:uid/:id', function(req, res){
//   var recentData = {};
//
//   models.emoticon.findAll({
//     include: { model: models.device, include: {model: models.user, where: { uid: uid }}},
//     where: {
//       id: {gt: id}
//     }
//   }).then(function(data){
//     res.send(data);
//   })
// });
