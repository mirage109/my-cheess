import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figures";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
    constructor(color:Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureName.King;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}