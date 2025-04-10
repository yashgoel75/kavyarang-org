import React from "react";
import "./Events.css";
import poetryDayImg1 from "./IMG_3380.png";

function Events() {
  return (
    <section className="events-section fade-in">
      <h1>Our Events</h1>
      <p className="intro-text">
        At Kavyarang, we breathe life into literature through events that spark
        creativity, forge connections, and celebrate the magic of words.
      </p>

      {/* Upcoming Event: Open Mic - Left */}
      <div className="centered-heading">
        <h2>Upcoming Event: SRIJAN x Kavyarang Open Mic</h2>
        </div>
      <div className="event-container left">
        <div className="event-text">

          <p className="event-date">11th April 2025 | Block C, VIPS-TC | 12:00 PM</p>
          <p>
            Where words meet passion! SRIJAN – The SDG Society of VSET, in
            collaboration with Kavyarang – The Literary Society of VSET, brings
            you an unforgettable Open Mic experience! Whether it’s poetry,
            storytelling, or spoken word—step up and let your voice be heard!
          </p>
          <p>
            <strong>Register now:</strong>{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzGkgCGIomivJlRkkzYZH3y9ObMFFAFd2oUFxF_pkDmUKo6w/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{" "}
          </p>
          <p>#OpenMicVSET #SrijanXKavyarang #VIPS #PoetryAndPassion #SpeakYourHeart #VSETVoices</p>
        </div>
      </div>

      {/* Past Events Section */}
      
      <div className="centered-heading">
        <h2>Past Events</h2>
        </div>


      {/* World Poetry Day - Left */}
      <div className="event-container left">
        <div className="event-text">
          <h2>World Poetry Day</h2>
          <p className="event-date">21st March 2025</p>
          <p>
            On World Poetry Day, Kavyarang transformed Room No. 313 into a haven
            of verse and spontaneity. The day kicked off at 12:20 PM with a
            thrilling Just A Minute (JAM) Competition, where participants wove
            quick tales in 60 seconds, followed by a Poetry Round that unveiled
            original masterpieces. The air buzzed with creativity as voices rose
            and words danced.
          </p>
          <p>
            Beyond the competition, our Thoughts/Poetry Board stood as an
            all-day canvas of expression. Students pinned their poems and
            musings, crafting a vibrant mosaic of emotions that lingered
            throughout the day—a testament to the power of poetry to unite and
            inspire.
          </p>
        </div>
        <div className="event-images">
          <img
            src={poetryDayImg1}
            alt="JAM Competition"
            className="event-img"
          />
        </div>
      </div>

      {/* Book Exchange Event - Right */}
      <div className="event-container right">
        <div className="event-text">
          <h2>Book Exchange Event</h2>
          <p className="event-date">Date TBD</p>
          <p>
            Our Book Exchange Event turned pages into bridges, connecting
            members through the joy of shared stories. Each participant brought
            a beloved book, swapping it with another’s treasure. For a week,
            they immersed themselves in new worlds, letting the narratives
            unfold.
          </p>
          <p>
            The following week, we gathered again, voices alight with
            excitement, to share experiences—laughter over quirky characters,
            gasps at unexpected twists, and reflections on newfound
            perspectives. It was a celebration of literature’s ability to bind
            us, one exchanged book at a time.
          </p>
        </div>
      </div>

      {/* Closing Note */}
      <p className="closing-text">
        From poetry to prose, Kavyarang’s events are a symphony of creativity,
        ever-evolving with the seasons. Stay tuned for more literary adventures!
      </p>
    </section>
  );
}

export default Events;
