import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Header from './components/Header';
import AddPost from './components/AddPost';
import PostDetails from './components/PostDetails';
import ShowPosts from './components/ShowPosts';
import EditPost from './components/EditPost';

const axios = require('axios').default;

const App = () => {

    const [post,setPost] = useState([]);

    useEffect(()=>{
        sendGetRequest()
    }, []);
    
    const sendGetRequest = async () => {
        try {
            await axios
            .get("http://localhost:3001/posts/")
            .then((response) => setPost(response.data))
        } catch (err) {
            console.error(err);
        }
    };

return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <ShowPosts />
      </Route>
      <Route path="/AddPost">
        <AddPost sendGetRequest={sendGetRequest} />
      </Route>
      <Route path="/ShowPosts">
        <ShowPosts show={post} />
      </Route>
      <Route path="/PostDetails/:id">
        <PostDetails showPostDetails={post} sendGetRequest={sendGetRequest} />
      </Route>
      <Route path="/EditPost/:id">
        {post && <EditPost edit={post} sendGetRequest={sendGetRequest} />}
      </Route>
    </Switch>
  </Router>
);
};

ReactDOM.render(<App/>,document.getElementById("root"));
