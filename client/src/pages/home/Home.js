import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </React.Fragment>
  );
}