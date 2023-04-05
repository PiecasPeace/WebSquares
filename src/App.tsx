import { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(["a", "b", "c"]);
  const combineSquareText = squares.join("");

  const handleInputChange = (newSquareValue: string, updatedIndex: number) => {
    setSquares((prevSquare) =>
      prevSquare.map((square, index) =>
        index === updatedIndex ? newSquareValue : square
      )
    );
  };

  const handleAddSquare = (index: number) => {
    setSquares((prevSquares) => [
      ...prevSquares.slice(0, index + 1),
      "_",
      ...prevSquares.slice(index + 1),
    ]);
  };

  return (
    <div className="App">
      <div className="squares">
        {squares.map((square, index) => (
          <div key={index} className="square">
            <input
              onChange={(e) => handleInputChange(e.currentTarget.value, index)}
              value={square}
            ></input>
            {index < squares.length - 1 && (
              <span className="add" onClick={() => handleAddSquare(index)}>
                &nbsp;
              </span>
            )}
          </div>
        ))}
      </div>
      <div>= {combineSquareText}</div>
    </div>
  );
}

export default App;
