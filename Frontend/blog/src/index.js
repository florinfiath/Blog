import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
//import Alert from 'react-pop-alert';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-quill/dist/quill.snow.css";


import Header from './components/header';
import AddPost from './components/addPost';
import PostDetails from './components/postDetails';
import ShowPosts from './components/showPosts';
import EditPost from './components/editPost';

const axios = require('axios').default;

const App = () => {

    const [post,setPost] = useState([]);
    console.log(post)
    useEffect(()=>{
        sendGetRequest()
    }, []);
    const sendGetRequest = async () => {
        try { 
           axios
            .get("http://localhost:3001/post")
            .then((response) => setPost(response.data))
        } catch (err) {
            console.error(err);
        }
    };

    // const [alert, setAlert] = React.useState({
    //   type: "error",
    //   text: "This is a alert message",
    //   show: false,
    // });

    // function onCloseAlert() {
    //   setAlert({
    //     type: "",
    //     text: "",
    //     show: false,
    //   });
    // }

    // function onShowAlert(type) {
    //   setAlert({
    //     type: type,
    //     text: "Demo alert",
    //     show: true,
    //   });
    // }

return (
  <Router>
    <h2>Thanks for visiting, goodbye {localStorage.getItem("user")}</h2>
    {/* <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <button onClick={() => onCloseAlert()}>Hide alert</button>
        <button onClick={() => onShowAlert("success")}>
          Show success alert
        </button>
        <button onClick={() => onShowAlert("error")}>Show error alert</button>
        <button onClick={() => onShowAlert("warning")}>
          Show warning alert
        </button>
      </div>
      <Alert
        header={"Header"}
        btnText={"Close"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div> */}
    <Header />
    <Switch>
      <Route exact path="/">
        <ShowPosts show={post} />
      </Route>
      <Route path="/addPost">
        <AddPost sendGetRequest={sendGetRequest} />
      </Route>
      <Route
        path="/postDetails/:id"
        render={(props) => {
          let onepost = post.find((post) => post._id === props.match.params.id);
          if (onepost) {
            return (
              <PostDetails
                showPostDetails={onepost}
                sendGetRequest={sendGetRequest}
              />
            );
          } else {
            return <Redirect to="/" />;
          }
        }}
      ></Route>
      <Route path="/editPost/:id">
        {post && <EditPost edit={post} sendGetRequest={sendGetRequest} />}
      </Route>
    </Switch>
  </Router>
);
};

ReactDOM.render(<App/>, document.getElementById("root"))
