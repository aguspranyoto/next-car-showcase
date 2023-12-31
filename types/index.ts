import { manufacturers } from "./../constants/index";
import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

// export interface CustomFilterProps {
//   title: string;
// }

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
