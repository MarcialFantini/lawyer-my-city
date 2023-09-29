import { StaticImageData } from "next/image";
import item1 from "../../../public/assets/lawyers cards/item1.png";
import item2 from "../../../public/assets/lawyers cards/item2.png";
import item3 from "../../../public/assets/lawyers cards/item3.png";
import item4 from "../../../public/assets/lawyers cards/item4.png";
import item5 from "../../../public/assets/lawyers cards/item5.png";
import item6 from "../../../public/assets/lawyers cards/item6.png";

export const cards: { name: string; src: string | StaticImageData }[] = [
  { name: "Shuvo Roy", src: item1 },
  { name: "Jamil Ahmed", src: item2 },
  { name: "Jesika Deo", src: item3 },
  { name: "Jackson", src: item4 },
  { name: "Jon Deo", src: item5 },
  { name: "Sayontika", src: item6 },
];
