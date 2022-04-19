import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App/App";
import Blog from "./blogs/Blog";
import BlogEntry from "./blogs/BlogEntry";
import blogsData from "./blogs/blogs.json";
import "./index.scss";

function renderBlogs() {
  return (
    blogsData.entries.map((entry, index) => (
      <Route
        key={index}
        exact 
        path={`/blog/${entry.date}`}
        element={<BlogEntry {...entry} />}
      />
      )
    )
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/blog" element={<Blog />} />
      {renderBlogs()}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
