import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SpotifyAPP from "./components/SpotifyApp";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
<<<<<<< HEAD
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
=======
import Postthumnails from "./components/Postthumnails";
import { initialitems } from "./components/dummy/dummyitems";
>>>>>>> 3a2fba64a851a38e65fbf363397dc12c8d0ed0cb

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const [userinfo, setUserinfo] = useState(null);
  // const history = useHistory();

  // axios.get("https://localhost:4000/auth").then((res) => {
  //   console.log(res.data.data.userInfo);
  //   setUserinfo(res.data.data.userInfo);
  //   setIsLogin(!isLogin);
  //   history.push("/mypage");
  // });
  const [items, setItems] = useState(initialitems);

  return (
    // <Detail></Detail>
    // <Mypage></Mypage>

    <Main items={items}></Main>
    // <Switch>
    //   <Route exact path="/">
    //     <SpotifyAPP />
    //     <Landing />
    //   </Route>
    //   <Route path="/login">
    //     <Login />
    //   </Route>
    //   <Route path="/signup">
    //     <Signup />
    //   </Route>
    // </Switch>
  );
}

export default App;
