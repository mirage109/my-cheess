import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figures";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";
import { Cell } from "../Cell";

export class Pawn extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = FigureName.Pawn;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}