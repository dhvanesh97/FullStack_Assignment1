// import React, { Component } from 'react';
var contentNode = document.getElementById('contents');
class App extends React.Component{
    render(){
        return(
            <div className="myinfo">
                <h2>Dhvanesh Shah</h2>
                <img src="./myself.jpg"  alt="Head Shot"></img>
                <p>Hello, I am Dhvanesh Shah. Currently, I am pursuing my Master degree in Computer Science from San Diego State University. I like to learn new things about technologies and implement them. Besides my academics, I love to listen songs and playing games in my leisure time.  </p>
                <button><a href="https://github.com/dhvanesh97?tab=repositories">VIEW MY GITHUB REPO</a></button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, contentNode);
