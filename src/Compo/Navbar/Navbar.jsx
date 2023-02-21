import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
const Navbar = () => {
  /*
  const [toggle, setToggle] = useState(false);
  const varients = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVarients = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  return (
    
    <div className="top">
      <div className="left">
        <a href="/">R</a>
      </div>
      <div className="right">
        <ul>
          {NavLinks.map((nav, index) => {
            return (
              <li key={index}>
                <a href={`${nav.href}`}>{nav.name}</a>
              </li>
            );

            //     <a href={nav.href}>{nav.name}</a>
          })}
        </ul>
      </div>
      <div className="menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
      </div>
      <motion.div
          className="closeMenu"
          variants={varients}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
                <motion.div
          className="menuX"
          variants={navLinkVarients}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {NavLinks.map((nav, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`${nav.href}`}>{nav.name}</a>
              </li>
            );
          })}
        </motion.div>
    </div>
  ); */
  const [toggle, setToggle] = useState(false);

  const varients = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVarients = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };
  return (
    <div className="header">
      <div className="nav_container">
        <div className="logo">
          <h3>R</h3>
        </div>
        <ul className="nav_links">
          {NavLinks.map((nav, index) => {
            return (
              <li key={index}>
                <a href={`${nav.href}`}>{nav.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={varients}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          className="menuX"
          variants={navLinkVarients}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {NavLinks.map((nav, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`${nav.href}`}>{nav.name}</a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
/*

   {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`${navLink}`}>{navLink}</a>
              </li>
            );
          })}


          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLinks, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${navLinks}`}>{navLinks}</a>
              </li>
            );
          })}
*/
