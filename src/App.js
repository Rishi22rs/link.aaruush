import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Front from "./Components/Front";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import "./App.css";
import Footer from "./Components/Footer";

import Aeravision from "./Graphics/Posters/Aeravision.jpeg";
import Dr from "./Graphics/Posters/Dr.jpeg";
import Grand from "./Graphics/Posters/Grand.jpeg";
import mag from "./Graphics/Posters/Mag.jpeg";
import master from "./Graphics/Posters/master.jpeg";
import Reinvent from "./Graphics/Posters/Reinvent.jpeg";
import Sketchy from "./Graphics/Posters/Sketchy.jpeg";
import Survival from "./Graphics/Posters/Survival.jpeg";
import yuddhame from "./Graphics/Posters/yuddhame.jpg";
import West from "./Graphics/Posters/West.jpeg";
import Fandom from "./Graphics/Posters/Fandom.jpeg";
import Online from "./Graphics/Posters/Online.png";
import digital from "./Graphics/Posters/digital.png";
import x from "./Graphics/Posters/x.png";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-179702912-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar title="Domain Events" />
      <Front show={false} />
      <div>
        <div id="cards" className="row justify-content-around">
          <Card
            uid={0}
            title="Political Quest"
            description="An opportunity for participants to showcase their leadership qualities and debating skills under political crisis situations."
            image={mag}
            domain="Magefficie"
          />
          <Card
            uid={1}
            title="Aerovision"
            description="Aerovision gives a chance for you to use legos and design an aircraft of your own, virtually!"
            image={Aeravision}
            domain="Vimanaz"
          />
          <Card
            uid={2}
            title="Sketchy Plot"
            description="Sketchy Plot gives you the opportunity to test your observation and designing skills at the same time, along with time optimization."
            image={Sketchy}
            domain="Architecture"
          />
          <Card
            uid={3}
            title="West World"
            description="Designed in a way to focus on the mechanical understanding, which will enhance the skill of designing and thus giving a hands on approach virtually, to instigate interest in the field of robotics."
            image={West}
            domain="Robogyan"
          />

          <Card
            uid={4}
            title="Grand Theft Automation"
            description="Designed to provide a proximate experience of technical insight to the machines and to apprehend the architecture of a machine."
            image={Grand}
            domain="Machination"
          />
          <Card
            uid={5}
            title="Dr. Mario"
            description="Super Mario is back as Dr. Mario, set out on yet another Bio-adventure filled with crossword, DNAs, and case files for Dr. Mario to explore and diagnose the princess."
            image={Dr}
            domain="Bluebook"
          />
          <Card
            uid={6}
            title="D-IT"
            description="Design can be art. Design can be simple. That’s why it’s so complicated. Enhance and Enable the chance to design your specs and ideas for the given case files."
            image={digital}
            domain="Digital Design"
          />
          <Card
            uid={7}
            title="Survival Test"
            description="Survival is not a big deal in this modern world with such great medical and technological advancement of human civilization. Does any know how to survive without this? So this will take you to post-apocalyptic earth where in very a few resources are there. Do you have it in you to survive."
            image={Survival}
            domain="Fundaz"
          />

          <Card
            uid={8}
            title="Gambit's Guild"
            description="The event focuses on engaging the participants in various fun activities and hence giving them a chance to relax and experience something different from their mundane college routine."
            image={x}
            domain="Xzone"
          />
          <Card
            uid={9}
            title="Fandom"
            description="Our event will focus mainly on the presentation, observation and writing skills of our participants thereby enhancing their artistic side."
            image={Fandom}
            domain="Praesentatio"
          />
          <Card
            uid={10}
            title="Delimiter-Dungeon"
            description="To debunk the myth that programming is a skill reserved for the intellectual and boring, Delimiter Dungeon is a 4 round rodeo that tests the 4 main pillars of programming; knowledge, modularity, adaptability and complexity. Participant that manages to excel equally in all 4 aspects will be declared winner."
            image={yuddhame}
            domain="Yuddhame"
          />
          <Card
            uid={11}
            title="Reinvent To Evolve"
            description="Reinvent To Evolve will give the participants an opportunity to tinker and explore the world of electronic components. The presence of mind and nimble witted skills will be tested. Participate to get electrified!"
            image={Reinvent}
            domain="Electrizite"
          />
          <Card
            uid={12}
            title="Crypto-O-Sutra"
            description="Crypt-o-sutra is an online scavenger hunt in which participants will have to tackle 4 bewildering questions from a plethora of themes testing their wit and presence of mind at every step. Fastest person to get through all the questions will be declared the champion."
            image={Online}
            domain="Online"
          />
          <Card
            uid={13}
            title="Master Builder"
            description="Today’s real estate industry requires construction plans of every minute detail.
            Budget planning, innovation, adaptable structural designs are other important     
            Aspects. Konstruktion brings you the ultimate planning event where in you get the 
            opportunity to test aspiring civil engineers in their own forte."
            image={master}
            domain="Konstruktion"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
