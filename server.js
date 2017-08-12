var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
     'arone' : {
      title: 'Article-one',
      heading:'welcome to article one',
       content: 'this is a article one'
         
     },
     'artwo' :{title: 'Article-two',
      heading:'welcome to article two',
       content: 'this is a article two'
         
     },
     'arthree': {title: 'Article-three',
      heading:'welcome to article three',
       content: 'this is a article three'
         
     }

    
};
function createtemp(data)
{
 var title = data.title;
var heading = data.heading;
var content= data.content;

var htmlTemp = 
    ` <html>
         <head>
          <title>
          ${title}
          </title>
          <link href="/ui/style.css" rel="stylesheet" />
         </head>
        <body><div class="ar">
         <div>
            <a href ="/">home</a>
         </div>
          <hr>
            <div>
            <h4>${heading}</h4>
            ${content}
            </div>
        </div>
        </body>
    </html>
`;
return htmlTemp;
}
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
  res.send(createtemp(articles[articleName]));
                         });


app.get('/ui/style.css', function (req, res) {
    var articleName = req.params.articleName;
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
