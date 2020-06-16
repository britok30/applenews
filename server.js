const express = require("express");
var request = require("request");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path_join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

// Top Art
app.get("/getTopArticles", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=us&pageSize=36&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Tech Crunch Art
app.get("/getTechCrunch", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
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
        "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Bleacher Reports
app.get("/getBRReport", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=bleacher-report&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

//BBC
app.get("/getBBCArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Canada Arts

app.get("/getCanadaArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=ca&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// Australia Arts

app.get("/getAustraliaArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=au&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// UK Arts

app.get("/getUKArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?country=gb&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

// WSJ

app.get("/getWSJArts", (req, res) => {
    request(
        "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&pageSize=25&apiKey=91dafe5fb4024272b417e0315d0a998c",
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
        }
    );
});

//https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_KEY}
//91dafe5fb4024272b417e0315d0a998c

app.listen(port, () => console.log(`Appnews app listening on port ${port}!`));
