import { ImageSourcePropType } from "react-native";

import tosseImg from "../assets/sintomas/tosse.png";
import espirroImg from "../assets/sintomas/espirro.png";
import calafrioImg from "../assets/sintomas/calafrio.png";
import corizaImg from "../assets/sintomas/coriza.png";
import diarreiaImg from "../assets/sintomas/diarreia.png";
import dorbarrigaImg from "../assets/sintomas/dorbarriga.png";
import dorcabecaImg from "../assets/sintomas/dorcabeca.png";
import dorgargantaImg from "../assets/sintomas/dorgarganta.png";
import dorjuntasImg from "../assets/sintomas/dorjuntas.png";
import dorpeitoImg from "../assets/sintomas/dorpeito.png";
import febreImg from "../assets/sintomas/febre.png";
import sudoreseImg from "../assets/sintomas/sudorese.png";
import tonturaImg from "../assets/sintomas/tontura.png";
import vomitoImg from "../assets/sintomas/vomito.png";

import bg1 from "../assets/sintomas_bg/1.png";
import bg2 from "../assets/sintomas_bg/2.png";
import bg3 from "../assets/sintomas_bg/3.png";
import bg4 from "../assets/sintomas_bg/4.png";
import bg5 from "../assets/sintomas_bg/5.png";

interface SintomasProps {
  id: number;
  sintoma: string;
  bgImg: ImageSourcePropType;
  img: ImageSourcePropType;
}

const SintomasData: SintomasProps[] = [
  {
    id: 1,
    sintoma: "Tosse",
    bgImg: bg3,
    img: tosseImg,
  },
  {
    id: 2,
    sintoma: "Espirro",
    bgImg: bg5,
    img: espirroImg,
  },
  {
    id: 3,
    sintoma: "Calafrio",
    bgImg: bg2,
    img: calafrioImg,
  },
  {
    id: 4,
    sintoma: "Coriza",
    bgImg: bg4,
    img: corizaImg,
  },
  {
    id: 5,
    sintoma: "Diarreia",
    bgImg: bg3,
    img: diarreiaImg,
  },
  {
    id: 6,
    sintoma: "Dor Abdominal",
    bgImg: bg3,
    img: dorbarrigaImg,
  },
  {
    id: 7,
    sintoma: "Dor de Cabeça",
    bgImg: bg2,
    img: dorcabecaImg,
  },
  {
    id: 8,
    sintoma: "Dor de Garganta",
    bgImg: bg4,
    img: dorgargantaImg,
  },
  {
    id: 9,
    sintoma: "Dores nas Juntas",
    bgImg: bg3,
    img: dorjuntasImg,
  },
  {
    id: 10,
    sintoma: "Vomitos",
    bgImg: bg3,
    img: vomitoImg,
  },
  {
    id: 11,
    sintoma: "Febre",
    bgImg: bg4,
    img: febreImg,
  },
  {
    id: 12,
    sintoma: "Sudorese",
    bgImg: bg3,
    img: sudoreseImg,
  },
  {
    id: 13,
    sintoma: "Tonturas",
    bgImg: bg4,
    img: tonturaImg,
  },
  {
    id: 14,
    sintoma: "Dor no Peito",
    bgImg: bg3,
    img: dorpeitoImg,
  },
];

export { SintomasData, SintomasProps };
