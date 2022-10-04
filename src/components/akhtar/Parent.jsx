import React from "react";
import Child from "./Child";

export default function Parent() {
  const [exercises, setExercises] = React.useState([]);

  const handleAddExercise = (name) => {
    console.log("I am called!", name);
    let myEx = exercises;
    myEx.push(name);
    setExercises(myEx);
      console.log("Exercises:", exercises);
  };

  // console.log("Exercises:", exercises);
  return (
    <div>
      -------------------- ADDED --------------------------
      <div className="flex">
        {exercises.map((exercise) => (
          <h2>{exercise}</h2>
        ))}
      </div>
      -----------------------------------------------------
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Child handleAddExercise={handleAddExercise} />
    </div>
  );
}
