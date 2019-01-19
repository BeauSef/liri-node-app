require("dotenv").config();
// var fs = require();
var request = require("request");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios");
// var moment = require();
// var env = require();
var arg = process.argv;
var arg1 = process.argv[2];
var arg2 = process.argv[3];

// // Switch Functions
switch (arg1) {
    case "concert-this":
        concert(arg2);
        break;

    case "spotify-this":
        spotify(arg2);
        break;

    case "movie-this":
        movie(arg2)
        break;

    case "do-what-it-says":
        listen(arg2)
        break;
};

//Making functions

// Concert Function
// function concert(arg) {
//     var queryUrl = ("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp");


//     axios.get(queryUrl).then(
//         function (response) {

//             console.log("Venue name " + result);
//             console.log("Venue location " + result);
//             console.log("Date of Event " + moment(result).format("MM/DD/YYYY"));
//         });

// }

// Spotify Function
function spotify(arg) {

    var spotify = new Spotify(keys.spotify);


    spotify.search({ type: 'track', query: arg }, function (err, data) {
        if (err) {
            console.log(err);
        }
        var info = data.tracks.items;
        console.log("Artist(s): " + info[0].artists[0].name);
        console.log("Song Name: " + info[0].name);
        console.log("Preview Song: " + info[0].preview_url);
        console.log("Album: " + info[0].album.name);
    })
}

// Movie Function
function movie(arg) {


    var queryUrl = "http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[0].Value);
            console.log("Country produced: " + response.data.Country);
            console.log("Language of movie: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        });

    if (arg === "Mr.Nobody") {
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
};

// Listen Function
// function listen() {

// };


