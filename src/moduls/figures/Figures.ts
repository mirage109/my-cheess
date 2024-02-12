import { Colors } from "../Colors";
import logo from "../../assets/black-bishop.png";
import { Cell } from "../Cell";

export enum FigureName {
  Figure = "Figure",
  King = "King",
  Queen = "Queen",
  Rook = "Rook",
  Bishop = "Bishop",
  Knight = "Knight",
  Pawn = "Pawn",
}

export class Figure {
  name: FigureName;
  id: number;
  logo: typeof logo | null;

  constructor(public color: Colors, public cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.Figure;
    this.id = Math.random();
  }

  canMove(cell: Cell): boolean {
    return true;
  }
  moveFigure(cell: Cell): void {}
}
