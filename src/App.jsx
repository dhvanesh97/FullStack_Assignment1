// import React, { Component } from 'react';
var contentNode = document.getElementById('contents');
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Dhvanesh Hetalkumar Shah</h1>
                <img src="./myself.jpg"></img>
                <p>Hello, I am Dhvanesh Shah. Currently, I am pursuing my Master degree in Computer Science from San Diego State University. I like to learn new things about technologies and implement them. Besides what I do, I love to listen songs and playing games in my leisure time.  </p>
                <button><a href="https://github.com/dhvanesh97?tab=repositories">VIEW MY GITHUB REPO</a></button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, contentNode);
