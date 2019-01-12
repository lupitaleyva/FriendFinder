// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    console.log("something");
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    //This is where you run your loops that sum the scores and compare

    
    res.end()  
  });



};


//Determine the user's most compatible friend using the following as a guide:


// 1 Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
// * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//   * Example:
//     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//     * Total Difference: **2 + 1 + 2 =** **_5_**
// * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
// * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// * The modal should display both the name and picture of the closest match.
