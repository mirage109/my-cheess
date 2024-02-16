import { FC } from "react";
import { Cell } from "../moduls/Cell";

interface CellComponentProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}

export const CellComponent: FC<CellComponentProps> = ({
  cell,
  selected,
  onClick,
}) => {
  return (
    <div
      className={[`cell`, cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => onClick(cell)}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className={"available"} />}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};
