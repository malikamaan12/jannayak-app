// client/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import Post from './components/Post';
import Gallery from './components/Gallery';
import Blog from './components/Blog';

function App() {
    return (
        <div>
            <Profile />
            <Post />
            <Gallery />
            <Blog />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
