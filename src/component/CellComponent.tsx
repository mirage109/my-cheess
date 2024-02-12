import { FC } from "react";
import { Cell } from "../moduls/Cell";

interface CellComponentProps {
  cell: Cell;
}

export const CellComponent:FC<CellComponentProps> = ({cell}) => {
  return <div className={[`cell`, cell.color].join(' ')}>
    {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
  </div>;
};
