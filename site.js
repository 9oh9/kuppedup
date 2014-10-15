module.exports = function(app){
  app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("kuppedup.com starts here...");
  });
}
