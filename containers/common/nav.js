import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row } from "reactstrap";
const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  const menu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/blog/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/team"}>Team</Link>
      </li>
      <li>
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li>
        <Link href={"/about-us"}>About us</Link>
      </li>
    </>
  );

  return (
    <div className={`navbar`} id="togglebtn">
      <div className="responsive-btn">
        <a className="btn-back" onClick={closeSidebar}>
          <h5>back</h5>
        </a>
      </div>
      <ul className="main-menu">{menu}</ul>
    </div>
  );
};

export default Nav;
