 /**
  *  Recibe los requests de webservices 
  * 
  */

 const express = require('express');
 router = express.Router();
 const RP = require('request-promise');

/* Hace el render del home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Invocación proxy hacia Google Node.js */
router.post('/googlenode', function(req, res, next) {
  console.log(req.body)
  if (!req.body || req.body.length === 0) {
    return res.status(400).send('Error recibieron datos incorrectos o nulos');
  } else {
    console.log("Se ha recibido el request para el /googlenode%j",req.body)
    //call Google Function
    var options = {
      method: 'POST',
      uri: process.env.GOOGLE_NODE_URI,
      body: req.body,
      json: true // Automatically stringifies the body to JSON
  };
  RP(options)
      .then(function (parsedBody) {
          console.log("Request exitoso. Respuesta fue %j",parsedBody )
          res.json({data:parsedBody})
      })
      .catch(function (err) {
        return res.status(400).send('Error al invocar la Function en Google' + err);
      });
  }
});

/* Invocación proxy hacia Google GoLang */
router.post('/googlegolang', function(req, res, next) {
  console.log(req.body)
  if (!req.body || req.body.length === 0) {
    return res.status(400).send('Error recibieron datos incorrectos o nulos');
  } else {
    console.log("Se ha recibido el request para /googlegolang %j",req.body)
    //call Google Function
    var options = {
      method: 'POST',
      uri: process.env.GOOGLE_GOLANG_URI,
      body: req.body,
      json: true // Automatically stringifies the body to JSON
    };
    RP(options)
        .then(function (parsedBody) {
            console.log("Request exitoso. Respuesta fue %j",parsedBody )
            res.json({data:parsedBody})
        })
        .catch(function (err) {
          return res.status(400).send('Error al invocar la Function en Google' + err);
        });
  }
});

/* Invocación proxy hacia Azure Java */
router.post('/azurejava', function(req, res, next) {
  console.log(req.body)
  if (!req.body || req.body.length === 0) {
    return res.status(400).send('Error recibieron datos incorrectos o nulos');
  } else {
    console.log("Se ha recibido el request para /azurejava %j",req.body)
    //call Google Function
    var options = {
      method: 'POST',
      uri: process.env.AZURE_JAVA_URI,
      body: req.body,
      qs: req.body,
      json: true // Automatically stringifies the body to JSON
    };
    RP(options)
        .then(function (parsedBody) {
            console.log("Request exitoso. Respuesta fue %j",parsedBody )
            res.json({data:parsedBody})
        })
        .catch(function (err) {
          return res.status(400).send('Error al invocar la Function en Azure ' + err);
        });
  }
});

/* Invocación proxy hacia Azure Node */
router.post('/azurenode', function(req, res, next) {
  console.log(req.body)
  if (!req.body || req.body.length === 0) {
    return res.status(400).send('Error recibieron datos incorrectos o nulos');
  } else {
    console.log("Se ha recibido el request para /azurenode %j",req.body)
    //call Google Function
    var options = {
      method: 'POST',
      uri: process.env.AZURE_NODE_URI,
      body: req.body,
      json: true // Automatically stringifies the body to JSON
    };
    RP(options)
        .then(function (parsedBody) {
            console.log("Request exitoso. Respuesta fue %j",parsedBody )
            res.json({data:parsedBody})
        })
        .catch(function (err) {
          return res.status(400).send('Error al invocar la Function en Azure ' + err);
        });
  }
});

module.exports = router;






