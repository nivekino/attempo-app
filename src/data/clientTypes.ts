import { ClientTypeCard } from "../interfaces/ClientTypeCard";
import BgBuissne from "../assets/img/bg-buissne.png";
import BgNaturePerson from "../assets/img/bg-np.png";

export const clientTypes: Array<ClientTypeCard & { id: number }> = [
  {
    id: 1,
    type: "Persona natural",
    imageUrl: BgNaturePerson,
    label: "Persona natural",
  },
  {
    id: 2,
    type: "Empresa o institución",
    imageUrl: BgBuissne,
    label: "Empresa o institución",
  },
];
