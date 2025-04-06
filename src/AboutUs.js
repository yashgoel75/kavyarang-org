import React from "react";
import "./AboutUs.css";
import founder1 from "./member1.jpg";
import founder2 from "./member2.jpg";
import founder3 from "./member3.jpg";
import logo from "./kavyarang-logo.png";
import alternate from "./Kavyarang favicon.png";
import founder4 from "./member1.jpg";

function AboutUs() {
  return (
    <section className="about-us-section fade-in">
      <h1>About KavyaRang</h1>
      <p className="intro-text">
        A sanctuary of words, where poetry blossoms into a literary legacy.
      </p>

      {/* The Society */}
      <div className="society-story">
        <h2>The Society</h2>
        <p>
          KavyaRang is more than a society—it’s a living tapestry of creativity,
          woven by dreamers, poets, and storytellers at Vivekananda Institute of
          Professional Studies - Technical Campus. What began as a humble poetry
          society has unfurled into a vibrant literary community, celebrating
          the boundless power of words.
        </p>
      </div>

      {/* Our Journey */}
      <div className="journey">
        <h2>Our Journey</h2>
        <p>
          In the quiet corners of VIPS-TC, four visionaries—Drishti Nagpal,
          Hadis Khan, Vaibhav Wadhwa, and Yatharth—ignited a spark in 2023. With
          a shared love for poetry, they founded KavyaRang, a space to nurture
          verses and voices. Their passion laid the cornerstone of what would
          become a thriving society.
        </p>
        <div className="founders-container">
          <div className="founder-card">
            <img src={founder1} alt="Drishti Nagpal" className="founder-img" />
            <h3>Drishti Nagpal</h3>
          </div>
          <div className="founder-card">
            <img src={founder2} alt="Vaibhav Wadhwa" className="founder-img" />
            <h3>Vaibhav Wadhwa</h3>
          </div>
          <div className="founder-card">
            <img src={alternate} alt="Hadis Khan" className="founder-img" />
            <h3>Hadis Khan</h3>
          </div>
          <div className="founder-card">
            <img src={alternate} alt="Yatharth" className="founder-img" />
            <h3>Yatharth</h3>
          </div>
        </div>
        <p>
          From this quartet, the society grew to embrace its first wave of
          members: Urvashi Sharma, Devansh Bansal, Arnav Rawat, Bhavesh Gupta,
          and Nandani Daga. Together, these nine souls (including the founders)
          formed the early heartbeat of KavyaRang, turning whispers of poetry
          into a chorus of creativity.
        </p>
        <p>
          Word by word, event by event, KavyaRang blossomed. What started as a
          tight-knit group of 9 gradually became a family of 74, each member
          adding their unique thread to the fabric of our story. This growth
          spurred a beautiful transition—from a poetry society to a full-fledged
          literary society, embracing prose, debates, and digital artistry
          alongside verse.
        </p>
      </div>

      {/* Aims & Goals */}
      <div className="aims-goals">
        <h2>Our Aims & Future Goals</h2>
        <p>
          At its core, KavyaRang seeks to foster a love for literature, spark
          intellectual curiosity, and provide a platform for self-expression.
          Our aim is to cultivate a community where every voice is heard, every
          story is cherished, and every idea finds wings.
        </p>
        <ul>
          <li>
            Expand our reach with inter-college literary festivals and
            collaborations.
          </li>
          <li>Publish an annual anthology of our members’ works.</li>
          <li>
            Create digital platforms—podcasts, blogs, and more—to amplify our
            literary voice.
          </li>
          <li>
            Inspire a new generation of writers, poets, and thinkers at VIPS-TC
            and beyond.
          </li>
        </ul>
        <p>
          From poetry to a literary universe, our journey has just begun. With
          every new member, every new idea, KavyaRang aspires to weave a legacy
          that echoes far beyond our campus walls.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
