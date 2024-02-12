import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figures";

export class Cell {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly color: Colors,
    public figure: Figure | null,
    public board: Board,
    public available = false,
    public id: number = Math.random()
  ) {}
}
