var express = require('express');
var router = express.Router();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'vinit'
});
 
connection.connect(function(err){
  if(!err){
    console.log('connected to the database')
  }else{
    console.log('not connected')
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});
router.post('/processing', function(req, res, next) {
  console.log(req.body);
  var a =req.body.txt1;
  var b =req.body.txt2;
  var c ="Record Added"
  // console.log(a+b)
  connection.query("insert into tbl_student(st_name,st_gender) value (?,?)", [a,b],
  function(err,result,field){
    res.render('ans',{mya:a,myb:b,myc:c});
  });
});

module.exports = router;
