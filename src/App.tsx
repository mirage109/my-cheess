import "./App.css";
import { BoardComponent } from "./component/BoardComponent";
import { Board } from "./moduls/Board";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState(new Board());
  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
