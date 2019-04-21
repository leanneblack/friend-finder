var path = require("path");

module.exports = function(app) {
  app.get("./apiRoutes.js", function(req, res) {
    res.sendFile(path.join(__dirname, "./apiRoutes.js"));
  });
  app.get("./htmlRoutes.js", function(req, res) {
    res.sendFile(path.join(__dirname, "./htmlRoutes.js"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
