// import React, { Component } from 'react';
var contentNode = document.getElementById('contents');
class App extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Dhvanesh Hetalkumar Shah"
            ),
            React.createElement("img", { src: "./myself.jpg" }),
            React.createElement(
                "p",
                null,
                "Hello, I am Dhvanesh Shah. Currently, I am pursuing my Master degree in Computer Science from San Diego State University. I like to learn new things about technologies and implement them. Besides what I do, I love to listen songs and playing games in my leisure time.  "
            ),
            React.createElement(
                "button",
                null,
                React.createElement(
                    "a",
                    { href: "https://github.com/dhvanesh97?tab=repositories" },
                    "VIEW MY GITHUB REPO"
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(App, null), contentNode);