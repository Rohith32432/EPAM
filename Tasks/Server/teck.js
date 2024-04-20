const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.json());
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', function(req, res, next) { 
  req.session.count?req.session.count++:req.session.count=1
  req.session.name='rohith'
    res.send(req.session);
});
app.get('/test', function(req, res, next) {
  req.session.name='rohith v s'
    res.send(req.session);
});

app.listen(3001, () => {
    console.log('server is in 3000');
});
