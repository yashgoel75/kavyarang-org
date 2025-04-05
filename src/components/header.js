import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Title Typing Effect
    const typedTitle = new Typed(titleRef.current, {
      strings: [
        "KavyaRang - The Literary Society of VIPS-TC",
        "काव्यरंग - VIPS-TC की साहित्यिक संस्था",
        "کاویارنگ - VIPS-TC کی ادبی سوسائٹی"
      ],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });


    return () => {
      typedTitle.destroy();
    };
  }, []);

  return (
    <header className="header-container">
      <h2 ref={titleRef} className="header-title"></h2>
    </header>
  );
};

export default Header;
