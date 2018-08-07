var friends = require("../data/friends.js");

module.exports = function(app){

app.get("/api/friends", function(req, res){
    return res.json(friends);
});

app.post("/api/friends", function(req, res){
    var total_diff = [];
    var minDiffIndex = 0;
    for(var i = 0; i < friends.length; ++i){
        var diff = 0;
        for(var j = 0; j < friends[i].scores.length; ++j){
            diff += Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j]));
        }
        total_diff.push(diff);
        if(diff < total_diff[minDiffIndex]){
            minDiffIndex = total_diff.length - 1;
        }
    }
    friends.push(req.body);
    res.send(friends[minDiffIndex]);
});

}