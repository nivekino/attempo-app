import { ImageButtonProps } from "../interfaces/ImageButton";
import BgMusic from "../assets/img/musico.svg";
import BgStudent from "../assets/img/estudiante.svg";
import BgHunter from "../assets/img/casador.svg";

export const passionTypes: Array<ImageButtonProps & { id: number }> = [
  {
    id: 1,
    imageUrl: BgMusic,
    text: "Ser Músico",
    redirectTo: "/",
  },
  {
    id: 2,
    imageUrl: BgStudent,
    text: "Ser Estudiante",
    redirectTo: "/",
  },
  {
    id: 3,
    imageUrl: BgHunter,
    text: "Ser Talent Hunter",
    redirectTo: "/",
  },
];

