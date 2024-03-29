import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figures";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.name = FigureName.Queen;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}