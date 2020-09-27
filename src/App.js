import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Front from "./Components/Front";
import { BrowserRouter as Router } from "react-router-dom";
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
import West from "./Graphics/Posters/West.jpeg";
import Fandom from "./Graphics/Posters/Fandom.jpeg";
import Online from "./Graphics/Posters/Online.png";
import digital from "./Graphics/Posters/digital.png";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar title="Domain Events" />
      <Front show={false} />
      <div>
        <div id="cards" className="row justify-content-around">
          <Card
            title="Reinvent To Evolve"
            description="Will send you by todayyy"
            image={Reinvent}
            domain="Electrizite"
          />
          <Card
            title="Aerovision"
            description="Aerovision gives a chance for you to use legos and design an aircraft of your own, virtually!"
            image={Aeravision}
            domain="Vinamaz"
          />
          <Card
            title="Sketchy Plot"
            description="Sketchy Plot gives you the opportunity to test your observation and designing skills at the same time, along with time optimization."
            image={Sketchy}
            domain="Architecture"
          />
          <Card
            title="West World"
            description="Designed in a way to focus on the mechanical understanding, which will enhance the skill of designing and thus giving a hands on approach virtually, to instigate interest in the field of robotics."
            image={West}
            domain="Robogyan"
          />

          <Card
            title="Grand Theft Automation"
            description="Designed to provide a proximate experience of technical insight to the machines and to apprehend the architecture of a machine."
            image={Grand}
            domain="Machination"
          />
          <Card
            title="Dr. Mario"
            description="Super Mario is back as Dr. Mario, set out on yet another Bio-adventure filled with crossword, DNAs, and case files for Dr. Mario to explore and diagnose the princess."
            image={Dr}
            domain="Bluebook"
          />
          <Card
            title="D-IT"
            description="Design can be art. Design can be simple. That’s why it’s so complicated. Enhance and Enable the chance to design your specs and ideas for the given case files."
            image={digital}
            domain="Digital Design"
          />
          <Card
            title="Survival Test"
            description="Survival is not a big deal in this modern world with such great medical and technological advancement of human civilization. Does any know how to survive without this? So this will take you to post-apocalyptic earth where in very a few resources are there. Do you have it in you to survive."
            image={Survival}
            domain="Fundaz"
          />

          <Card
            title="Online Battles"
            description="The event focuses on engaging the participants in various fun activities and hence giving them a chance to relax and experience something different from their mundane college routine."
            image={Reinvent}
            domain="Xzone"
          />
          <Card
            title="Fandom"
            description="Our event will focus mainly on the presentation, observation and writing skills of our participants thereby enhancing their artistic side."
            image={Fandom}
            domain="Vinamaz"
          />
          <Card
            title="Reinvent To Evolve"
            description="To analyse the leadership quality and fighting capacity of a person by giving him political crises."
            image={Reinvent}
            domain="Vinamaz"
          />
          <Card
            title="Political Quest"
            description="To analyse the leadership quality and fighting capacity of a person by giving him political crises."
            image={mag}
            domain="Magefficie"
          />
          <Card
            title="Crypto-O-Sutra"
            description="Will send you by todayyy"
            image={Online}
            domain="Online"
          />
          <Card
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
