import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => {
  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>News</h1>
    </div>
  );
};

export default News;