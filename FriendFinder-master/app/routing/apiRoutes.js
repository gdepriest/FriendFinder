var friendsData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        // friendsData.push(req.body)
        var newFriend = req.body; // the friend that is looking for a match 
        var match;

        var lowestDiff =  1000; // 8 //5

        // loop through all the friends
        for(var i = 0; i < friendsData.length;i++){
            var currentFriend = friendsData[i]; // 8  // 5
            var currentDiff = 0; // 8 // 5
            // for each friend compare each answer value 
            // against the new friends answer value
            for(var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendAnswer = parseInt(currentFriend.scores[j]);
                var newfriendAnswer = parseInt(newFriend.scores[j]);
                currentDiff = currentDiff + Math.abs(currentFriendAnswer - newfriendAnswer)
            }

            // comparing the current score diff to the lowest diff
            if(currentDiff < lowestDiff) {
                lowestDiff = currentDiff;
                match = currentFriend
            }

        }

        // add new friend to friend list
        friendsData.push(newFriend);
        // sned the match to the front end to be displayed
        res.json(match);
    })
}