import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Header from './components/Header';
import AddPost from './components/AddPost';
import PostDetails from './components/PostDetails';
import ShowPosts from './components/ShowPosts';



const App = () => {

return (
    <Router>
    <Header/>
        <Switch>
        <Route exact path="/">
        <ShowPosts/>
        </Route>
        <Route path="/AddPost"><AddPost/>
        </Route>
        <Route path="/PostDetails"><PostDetails/>
        </Route>
        </Switch>
    </Router>
)

}

ReactDOM.render(<App/>,document.getElementById('root'))
