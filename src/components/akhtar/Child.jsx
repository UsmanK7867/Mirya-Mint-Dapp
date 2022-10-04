import React from "react";

export default function Child({ handleAddExercise }) {
  const exercises = [
    {
      id: 1,
      name: "Camando",
    },
    {
      id: 2,
      name: "Jojo",
    },
    {
      id: 3,
      name: "Ladoo",
    },
    {
      id: 4,
      name: "Chin-Up",
    },
    {
      id: 5,
      name: "UPS",
    },
  ];
  return (
    <div>
      ---------------------------- Exercise ------------------------------------
      {exercises.map((exercise) => (
        <div className="flex">
          <h2>{exercise?.name}</h2>
          <button
            className="ml-12 border border-red-400"
            onClick={() => handleAddExercise(exercise?.id)}
          >
            Add Me
          </button>
        </div>
      ))}
    </div>
  );
}
