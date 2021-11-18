const express= require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/index',(req, res) => {
    res.render('index', {
    });
  });
  
router.get('/blog',authController.isLoggedIn,(req, res, next) => {
  if(req.user == undefined) {
    res.render('login');
  }
      else{    
      }
});

router.get('/del_blog/:id',authController.delet,(req,res) => {
})

router.get('/edit_blog/:id',authController.editt,(req,res) => {
})

router.get('/edits_blog',(req,res) => {
    res.render('edits_blog');
})

router.get('/blog', authController.form, (req, res) => {
  res.render('blog')
});

  router.get('/login', authController.isLoggedIn, (req, res) => {
    console.log(req.user);
    if(req.user == undefined) {
      res.render('login');
    } else {
    } 
  });

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/blog', (req,res) => {
  res.render('blog');
});

router.get('/index', (req,res) => {
    res.render('index');
});

router.get('/form', (req,res) => {
  res.render('form');
});


module.exports = router;