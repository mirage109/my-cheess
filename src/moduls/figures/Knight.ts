import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figures";
import blackLogo from "../../assets/black-knight.png";
import whiteLogo from "../../assets/white-knight.png";

export class Knight extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = FigureName.Knight;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}