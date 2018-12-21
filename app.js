var fs = require('fs');
var filePath = 'biller.txt';

function readFile(filePath){
  var fileContent = fs.readFileSync(filePath, 'UTF8');
  return fileContent;
}

function writeFile(content){
  fs.writeFileSync('writeme.txt', content);
}

var content = readFile(filePath);
content = content.replace(/\n/g, ';');
var data = [];
data = content.split(';');

delete data[0];
delete data[1];
delete data[2];
delete data[data.length - 1];

data = data.filter(function(rem){
  return rem !== '';
});

data[3] = data[3].split('|').join(';');
var result = data[3].split(';');

result = result.filter(function(rem){
  return rem !== '\r' && rem !== '';
});

result[3] = result[3].trim();

console.log(result[3]);

writeFile(result);
//result = result.toString().trim();
//content = content.replace(/|/g, ',');
//content = content.split(';').map(e => e.split(','));
