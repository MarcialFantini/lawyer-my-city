"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./style.module.css";
import Link from "next/link";

import logo from "../../../public/assets/nav/logoNavbar.png";
import contact from "../../../public/assets/nav/R.png";

function Navbar() {
  const [active, setActive] = useState(false);

  const handlerToggle = () => setActive(!active);

  return (
    <nav className={style.navbarContainer}>
      <picture className={style.containerLogo}>
        <Image src={logo} alt="Logo of web"></Image>
      </picture>

      <ul style={{ top: `-${active ? 0 : 100}%` }} className={style.listLinks}>
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

      <picture onClick={handlerToggle} className={style.picture}>
        <Image className={style.img} src={contact} alt="contact img"></Image>
      </picture>
    </nav>
  );
}

export default Navbar;
