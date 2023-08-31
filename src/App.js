import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Dashboard } from "./Component/Dashboard/Dashboard";
import { Charts } from "./Component/Charts";
import { Buttons } from "./Component/com/Buttons";
import { Incards } from "./Component/com/Incards";

import { BlankPage } from "./Component/Pages/BlankPage";
import { ErrorPage } from "./Component/Pages/ErrorPage";
import { ForgetPassword } from "./Component/Pages/ForgetPassword";
import { LoginPage } from "./Component/Pages/LoginPage";
import { Register } from "./Component/Pages/Register";

import { Layout } from "./Layout";
import { Border } from "./Component/Utilities/Border";
import { Animation } from "./Component/Utilities/Animation";
import { Others } from "./Component/Utilities/Others";
import { Colors } from "./Component/Utilities/Colors";
import { Tables } from "./Component/Tables";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="charts" element={<Charts />} />
          <Route path="tables" element={<Tables />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="incards" element={<Incards />} />
          <Route path="border" element={<Border className="head-forget" />}>
            {" "}
          </Route>
          <Route
            path="animation"
            element={<Animation className="head-forget" />}
          >
            {" "}
          </Route>
          <Route path="others" element={<Others className="head-forget" />}>
            {" "}
          </Route>
          <Route path="colors" element={<Colors className="head-forget" />}>
            {" "}
          </Route>
          <Route path="blankpages" element={<BlankPage />} />
          <Route path="errorpages" element={<ErrorPage />} />
        </Route>

        <Route
          path="/forgetpassword"
          element={<ForgetPassword className="head-forget" />}
        ></Route>
        <Route path="/login" element={<LoginPage className="head-forget" />}>
          {" "}
        </Route>
        <Route path="/register" element={<Register className="head-forget" />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;


// ....
