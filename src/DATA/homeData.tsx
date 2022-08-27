import {
  home1Img,
  home2Img,
  home3Img,
} from "../Components/ImageExporter/ImageExporter";
import { I_Home } from "../Models/Models";

const homeData: I_Home[] = [
  {
    id: "1",
    name: "Detached house 1",
    price: 1250000,
    address: "46 Ocean Avenue",
    yearOld: "5",
    image: home1Img,
    whenUploaded: "5",
    options: ["Pool", "CentralAir"],
  },
  {
    id: "2",
    name: "Detached house 2",
    price: 1400000,
    address: "527 Douglas Street",
    yearOld: "3",
    image: home2Img,
    whenUploaded: "3",
    options: ["Balcony", "CentralAir"],
  },
  {
    id: "3",
    name: "Detached house 3",
    price: 1350000,
    address: "518 Alan Street",
    yearOld: "2",
    image: home3Img,
    whenUploaded: "14",
    options: ["Balcony", "DoubleDriveway"],
  },
];

export const allProductsData: I_Home[] = [...homeData];
export default homeData;
