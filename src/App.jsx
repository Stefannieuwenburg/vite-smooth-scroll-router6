import * as React from "react";

import { links } from './data'
import "./App.css";

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
            <section className="footer" id="footer">
                <h1>footer</h1>
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
                <a href="#footer">
                <h4>Logo</h4>
                </a>
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







