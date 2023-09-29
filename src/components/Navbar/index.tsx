import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";

import logo from "../../../public/assets/nav/logoNavbar.png";
import contact from "../../../public/assets/nav/person.svg";

function Navbar() {
  return (
    <nav className={style.navbarContainer}>
      <picture className={style.containerLogo}>
        <Image src={logo} alt="Logo of web"></Image>
      </picture>

      <ul className={style.listLinks}>
        <li className={style.containerLink}>
          <Link className={style.link} href="">
            Home
          </Link>
        </li>
        <li className={style.containerLink}>
          <Link className={style.link} href={""}>
            About
          </Link>
        </li>
        <li className={style.containerLink}>
          <Link className={style.link} href={""}>
            Promotion
          </Link>
        </li>
        <li className={style.containerLink}>
          <Link className={style.link} href={""}>
            Add Listing
          </Link>
        </li>
        <li className={style.containerLink}>
          <Link className={style.link} href={""}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={style.button}>
        <picture>
          <Image src={contact} alt="contact img"></Image>
        </picture>
        Log In
      </button>
    </nav>
  );
}

export default Navbar;
