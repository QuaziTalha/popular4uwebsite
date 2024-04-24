import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Productdetails from "./Pages/Productdetails";
import Blogs from "./Pages/Blogs";
import Blog1 from "./Pages/Blog1";
import Blogitem from "./Pages/Blogitem";
import Contactus from "./Pages/Contactus";
import Services from "./Pages/Services";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    this.loadScript("./template/js/jquery.min.js", () => {
      this.loadScript("./template/js/bundle.js");
    });
  }
  
  loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  }
  
  

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/enhancing-safety-and-efficiency-explore-our-electrical-and-security-services" element={<Blog1 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
