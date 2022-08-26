import {
  home1Img,
  home2Img,
  home3Img,
} from "../Components/ImageExporter/ImageExporter";
import { I_Home } from "../Models/Models";

const homeData: I_Home[] = [
  {
    id: "1",
    name: "Detached house",
    price: 1250000,
    address: "46 Ocean Avenue",
    yearOld: "5",
    image: home1Img,
    whenUploaded: "5",
    options: ["Balcony", "CentralAir"],
  },
  {
    id: "2",
    name: "Detached house",
    price: 1400000,
    address: "527 Douglas Street",
    yearOld: "3",
    image: home2Img,
    whenUploaded: "3",
    options: ["Balcony", "CentralAir"],
  },
  {
    id: "3",
    name: "Detached house",
    price: 1350000,
    address: "518 Alan Street",
    yearOld: "2",
    image: home3Img,
    whenUploaded: "14",
    options: ["Balcony", "CentralAir"],
  },
];

export default homeData;
