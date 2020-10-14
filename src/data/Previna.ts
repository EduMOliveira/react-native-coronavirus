import { ImageSourcePropType } from "react-native";

import MascaraImg from "../assets/previna/mascara.png";
import LavaMaoImg from "../assets/previna/lavarmaos.png";
import LuvaImg from "../assets/previna/luva.png";
import OlhoImg from "../assets/previna/tocar2.png";
import NarizImg from "../assets/previna/tocar4.png";
import BocaImg from "../assets/previna/tocar3.png";
import AlcoolImg from "../assets/previna/alcool.png";
import CasaImg from "../assets/previna/casa.png";
import AlomeraImg from "../assets/previna/aglomeracao.png";

interface PrevinaProps {
  id: number;
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const PrevinaData: PrevinaProps[] = [
  {
    id: 1,
    title: "Use Máscara",
    desc:
      "Sempre que necessitar sair de casa, utilize máscara de proteção para evitar o contágio e proliferação do vírus.",
    img: MascaraImg,
  },
  {
    id: 2,
    title: "Evite tocar nos Olhos ",
    desc:
      "Sempre evite encostar a mão em seus olhos, pois, a mesma pode estar infectada com o vírus.",
    img: OlhoImg,
  },
  {
    id: 3,
    title: "Lave as Mãos",
    desc:
      "Lave as mãos com frequência até a altura dos punhos, com água e sabão, sempre que tocar em algum objeto.",
    img: LavaMaoImg,
  },
  {
    id: 4,
    title: "Evite Aglomerações",
    desc: "Evite circulações em locais com muitas pessoas.",
    img: AlomeraImg,
  },
  {
    id: 5,
    title: "Use Luvas",
    desc: "Sempre que possível utilize luvas para sua proteção.",
    img: LuvaImg,
  },
  {
    id: 6,
    title: "Evite tocar na Boca",
    desc: "Sempre evite encostar a mão em sua boca.",
    img: BocaImg,
  },
  {
    id: 7,
    title: "Álcool em Gel",
    desc: "Higienize suas mãos sempre com álcool em gel 70%.",
    img: AlcoolImg,
  },
  {
    id: 8,
    title: "Evite tocar no Nariz",
    desc:
      "Sempre evite encostar no nariz com suas mãos, pois, a mesma pode conter o vírus.",
    img: NarizImg,
  },
  {
    id: 9,
    title: "Fique em Casa",
    desc: "Sempre que possível fique em casa! Evite saídas desnecessárias.",
    img: CasaImg,
  },
];

export { PrevinaData, PrevinaProps };
