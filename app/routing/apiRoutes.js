var friends = require("../data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res){
    return res.json(friends);
});

app.post("/api/friends", function(req, res){
    var scores = [];
    var minScoreIndex = 0;
    for(var i = 0; i < friends.length; ++i){
        var score = 0;
        for(var j = 0; j < friends[i].scores.length; ++j){
            score += friends[i].scores[j];
        }
        scores.push(score);
        if(score < scores[minScoreIndex]){
            minScoreIndex = scores.length - 1;
        }
    }
    friends.push(req.body);
});

}