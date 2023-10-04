import Image from "next/image";
import style from "./style.module.css";
import srcPicture from "../../../public/assets/nav/logoNavbar.png";

import srcImg1 from "../../../public/assets/footer/facebook (1) 1.png";
import srcImg2 from "../../../public/assets/footer/instagram (1) 1.png";
import srcImg3 from "../../../public/assets/footer/linkedin (1) 1.png";
import srcImg4 from "../../../public/assets/footer/twitter (2) 1.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.containerAll}>
        <div className={style.columnFirst}>
          <picture className={style.logoLawyer}>
            <Image src={srcPicture} alt="logo lawyer"></Image>
          </picture>
          <p className={style.text}>
            You can now order your prescription via the website. For the last
            few weeks the website has been under test …
          </p>
          <div className={style.socialNet}>
            <picture>
              <Image src={srcImg1} alt="logo social"></Image>
            </picture>
            <picture>
              <Image src={srcImg2} alt="logo social"></Image>
            </picture>
            <picture>
              <Image src={srcImg3} alt="logo social"></Image>
            </picture>
            <picture>
              <Image src={srcImg4} alt="logo social"></Image>
            </picture>
          </div>
        </div>

        <ul className={style.list}>
          <li>Help Desk</li>
          <li>Customer Care</li>
          <li>Legal Help</li>
          <li>Service</li>
          <li>Donation</li>
          <li>Child Care</li>
        </ul>
        <ul className={style.list}>
          <li>Help Desk</li>
          <li>Customer Care</li>
          <li>Legal Help</li>
          <li>Service</li>
          <li>Donation</li>
          <li>Child Care</li>
        </ul>
        <ul className={style.list}>
          <li>Help Desk</li>
          <li>Customer Care</li>
          <li>Legal Help</li>
          <li>Service</li>
          <li>Donation</li>
          <li>Child Care</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
