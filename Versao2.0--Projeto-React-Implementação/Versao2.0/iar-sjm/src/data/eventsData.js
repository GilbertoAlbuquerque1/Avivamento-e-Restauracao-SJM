import reencontroImg from "../assets/reencontro1.png";
import encontroImg from "../assets/encontro.png";
import casaisImg from "../assets/cultodecasais.png";
import celulasImg from "../assets/celulas.png";
import ceiaImg from "../assets/cultodeceia.png";

export const eventsData = [
  {
    id: 1,
    title: "Reencontro com Deus 2026",
    category: "Encontro",
    categoryKey: "Encontro",
    date: "27 28 29",
    month: "NOV",
    time: "19:30",
    location: "LISBOA",
    desc: "Três dias marcantes de adoração intensa, palavra profunda e renovo espiritual para toda a família.",
    image: reencontroImg,
    featured: true
  },
  {
    id: 2,
    title: "Encontro com Deus",
    category: "Encontro",
    categoryKey: "encontro",
    date: "06 07 08",
    month: "JUN",
    year: "2027",
    time: "19:00",
    location: "Casa de Retiros",
    desc: "Um fim de semana reservado para desligar do mundo e alinhar o coração com o propósito do Pai.",
    image: encontroImg, 
    featured: false
  },
  {
    id: 3,
    title: "Culto Casais",
    category: "Cultos",
    categoryKey: "cultos",
    date: "17",
    month: "OUT",
    time: "20:00",
    location: "Templo Principal",
    desc: "O nosso encontro de casais será um marco em sua família e um momento de grande acrescimo para seu relacionamento.",
    image: casaisImg, 
    featured: false
  },
  {
    id: 4,
    title: "Manhãs e Noites de Células",
    category: "Células",
    categoryKey: "celulas",
    date: "Terça",
    month: "SEM",
    time: "09:30 e 20:00",
    location: "Casas / Setores",
    desc: "Comunhão nos lares, partilha da palavra e crescimento mútuo em pequenos grupos espalhados pela cidade.",
    image: celulasImg, 
    featured: false
  },
  {
    id: 5,
    title: "Culto de Ceia",
    category: "Cultos",
    categoryKey: "cultos",
    date: "2º domingo de cada mês",
    month: "SEM",
    time: "09:30 e 20:00",
    location: "Templo Principal",
    desc: "Culto em memória do sacrifício de Jesus Cristo na cruz do calvário.",
    image: ceiaImg, 
    featured: false
  }
];
