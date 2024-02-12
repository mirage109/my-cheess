import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        const color = (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE;
        row.push(new Cell(j, i, color, null, this));
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }
  
  private addFiguresToRow(color: Colors, row: number, backRow: number) {
    const figures = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
    for (let i = 0; i < 8; i++) {
      new figures[i](color, this.getCell(i, row));
      new Pawn(color, this.getCell(i, backRow));
    }
  }

  public addFigures() {
    this.addFiguresToRow(Colors.WHITE, 0, 1);
    this.addFiguresToRow(Colors.BLACK, 7, 6);
  }
}
