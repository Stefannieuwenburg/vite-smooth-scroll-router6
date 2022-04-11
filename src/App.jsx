import * as React from "react";

import "./App.css"
import { links } from './data'

export default function App() {
    return (
      <main id="home">
        <Navbar/>
            <section className="home" >
                <h1>home</h1>
            </section>
            <section className="about" id="about">
                <h1>about</h1>
            </section>
            <section className="projects" id="projects">
                <h1>projects</h1>
            </section>
            <section className="contact" id="contact">
                <h1>contact</h1>
            </section>
            <section className="rest" id="rest">
                <h1>rest</h1>
            </section>
        </main>
    );
}

function Navbar() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
    return (
        <nav className="sticky">
            <div className="logo">
                <h4>the nav</h4>
            </div>
            <div>
                {/* { links} */}
                <div className="nav_links">
                    {links.map((link) => {
                        return (
                            <a
                                href={link.url}
                                key={link.id}
                                onClick={handleClick}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}







