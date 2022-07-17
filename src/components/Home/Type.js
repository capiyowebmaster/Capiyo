import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack ",
          "Java expert",
          "Django",
          "Spring boot",
          "Python Expert",
          "Javascript expert",
          "Angular",
          "fullStack",
          "Android"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
