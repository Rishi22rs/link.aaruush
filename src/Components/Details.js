import React from "react";
import "../Detail.css";

const Details = () => {
  return (
    <div className="container my-container">
      <div className="heading">
        <h1 className="row justify-content-center">Mageffiece</h1>
      </div>
      <p>
        Ex reprehenderit adipisicing sit ad labore enim proident aute aliqua
        proident cillum eiusmod non tempor. Pariatur incididunt commodo dolore
        deserunt reprehenderit id esse reprehenderit. Excepteur qui culpa non
        consectetur est incididunt pariatur et. Amet irure proident exercitation
        minim veniam est do cupidatat labore et ullamco eiusmod. Mollit proident
        pariatur commodo irure consectetur eiusmod sint qui ex voluptate. Minim
        dolore ut aute Lorem amet adipisicing laborum quis sit occaecat.
        <br />
        <br />
        <b>1.</b> The contest happens at approximately 6:10am weekdays on the
        Morning Show.
        <br />
        <b>2.</b> Three news headlines are given.
        <br />
        <b>3.</b> You must call in, be the correct caller and correctly answer
        which two are real and which one is fake.
        <br />
        <b>4.</b> Winner gets a Kelly Bacon Burger from Red’s Diner.
        <br />
        <b>5.</b> Winner may not have won anything from the station in the past
        30 days.
        <br />
        <b>6.</b> All STATION contests are open to any/all STATION listeners,
        unless otherwise specified by STATION or its affiliates.
        <br />
        <b>7.</b> Only one winner or qualifier per family or household will be
        allowed.
        <br />
        <b>8.</b> Winners must sign a release prior to receiving their prize.
        <br />
        <b>9.</b> All prizes, unless otherwise specified, must be picked up
        within 30 days of winning.
        <br />
        STATION will not notify winners of the time remaining on their prize. It
        is the responsibility of the winner to claim the prize within the thirty
        days provided.
      </p>
      <div class="embed-container">
        <iframe
          src="https://www.youtube.com/embed/l4CfJyALNLE"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <h3>Have any doubt?</h3>
      <a className="btni" href="https://meet.google.com/">
        Contact here
      </a>
    </div>
  );
};

export default Details;
