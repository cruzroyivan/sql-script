// var async = require("async");
// 
// async.auto({
//   readLine: function(callback) {
//     readLine();
//   },
//     writeLine: ['readLine', function(res, callback) {
//       writeLine(content);
//   }],
//   function(err, results) {
//     console.log(results);
//   }
// });
//
// function readPerLine(){
//   var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('readme.txt')
//   });
//
//   lineReader.on('line', function (line) {
//     console.log(line);
//   });
// }
