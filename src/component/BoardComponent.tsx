import { FC, useEffect, useState } from "react";
import { Board } from "../moduls/Board";
import React from "react";
import { CellComponent } from "./CellComponent";
import { Cell } from "../moduls/Cell";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}
export const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function handleClick(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    hightlightAvailableCells();
  }, [selectedCell]);

  function hightlightAvailableCells() {
    board.hightligthCells(selectedCell)
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              onClick={handleClick}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
