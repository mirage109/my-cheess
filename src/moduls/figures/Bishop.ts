import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figures";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { Cell } from "../Cell";

export class Bishop extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = FigureName.Bishop;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}