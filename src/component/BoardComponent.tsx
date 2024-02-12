import { FC } from "react";
import { Board } from "../moduls/Board";
import React from "react";
import { CellComponent } from "./CellComponent";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}
export const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
}) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
