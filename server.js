const express = require("express");
var request = require("request");
const path = require("path");
const app = express();

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;


// Top Art
app.get("/getTopArticles", (req, res) => {
    request(
        "https://gnews.io/api/v3/top-news?&token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});


//Tech Art
app.get("/getTechArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/technology?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Sport Art

app.get("/getSportArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/sports?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Science

app.get("/getScienceArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/science?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Health

app.get("/getHealthArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/health?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Entertainment

app.get("/getEntertainmentArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/entertainment?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Business

app.get("/getBusinessArts", (req, res) => {
    request(
        "https://gnews.io/api/v3/topics/business?token=693dfadc0ec318b62ae2455f3db67390",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});


// // Canada Arts

// app.get("/getCanadaArts", (req, res) => {
//     request(
//         "https://gnews.io/api/v3/top-news?&token=693dfadc0ec318b62ae2455f3db67390&country=ca",
//         function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 res.send(body);
//             }
//         }
//     );
// });

// // Australia Arts

// app.get("/getAustraliaArts", (req, res) => {
//     request(
//         "https://newsapi.org/v2/top-headlines?country=au&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
//         function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 res.send(body);
//             }
//         }
//     );
// });

// // UK Arts

// app.get("/getUKArts", (req, res) => {
//     request(
//         "https://newsapi.org/v2/top-headlines?country=gb&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
//         function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 res.send(body);
//             }
//         }
//     );
// });

// // WSJ


//https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}
//91dafe5fb4024272b417e0315d0a998c

app.listen(port, () => console.log(`Appnews app listening on port ${port}!`));
