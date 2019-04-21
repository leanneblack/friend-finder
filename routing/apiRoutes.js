var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let userDetails = req.body;
    for (var i = 0; i < userDetails.scores.length; i) {
      userDetails.scores[i] = parseInt(userDetails.scores[i]);
    }

    // if human then only match with dog and not other humans
    // ! have survey question for selecting user is human to match only with dogs not other humans

    let currentFriend = 0;
    let newFriend = 0;

    for (var i = 0; i < friends.length; i++) {
      let total = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        let difference = Math.abs(userDetails.scores[j] - friends[i].scores[j]);
        total + -difference;
      }
      if (total < min) {
        currentFriend = i;
        newFriend = total;
      }
    }
    friends.push(userDetails);
    res.json(friends[currentFriend]);
  });
};
