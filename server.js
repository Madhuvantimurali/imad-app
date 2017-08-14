var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'article-one':{
        title: 'Article One',
        heading: 'Article One',
        date:'Sep 15,2017',
        content:'<h1> tHis is artcile one</h1>'
    },
    'article-two':{
        title: 'Article two',
        heading: 'Article two',
        date:'Sep 5,2017',
        content:
        `<div class="container">
     <p>I am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first articleI am typing my first article</p>
     </div>
            
        `},
    'article-three':{
        title: 'Article three',
        heading: 'Article three',
        date:'Sep 5,2019',
        content:'You are reading article three'
   }
};

function createTemplate(data){
    var title= data.title; 
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmlTemplate=`<html>
                   <head>
                     <title> ${title}</title>
                     <meta name="viewport" content="width=device-width,initial-scale=1"/>
                     <link href="/ui/style.css" rel="stylesheet"/>
                   </head>

                   <body>
                    <h3>${heading}</h3>
                    <hr>
                    <div class="container">
                    <p>${content}</p>
                    </div>
                  </body>
                 </html>
               `;
    return htmlTemplate;
}
app.get('/:articleName',function(req,res){
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));   
    });

app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
