import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/Jebisan/webshop"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:jena@hesehus.dk" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://facebook.com/Jebisan" target="_blank">
          Find me on Facebook</a>
        <span> / </span>
        <a href="https://google.dk" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2020 <strong>Babysam</strong> - IRD Demo
      </p>
    </footer>
  );
};

export default Footer;
