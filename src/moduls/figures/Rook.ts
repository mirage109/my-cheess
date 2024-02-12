import { Figure, FigureName } from './Figures';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';

export class Rook extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = FigureName.Rook;
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    }
}