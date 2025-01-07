import Link from "next/link";
import { useState } from "react";
export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li className="active ">
          <Link href="#">Home</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">IGCSE Tutors</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/contact">Mathematics</Link>
            </li>
            <li>
              <Link href="/contact">Physics</Link>
            </li>
            <li>
              <Link href="/contact">Chemistry</Link>
            </li>
            <li>
              <Link href="/contact">Computer Science</Link>
            </li>
            <li>
              <Link href="/contact">Accounting</Link>
            </li>
            <li>
              <Link href="/contact">Others...</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">A Level Tutors</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/contact">Mathematics</Link>
            </li>
            <li>
              <Link href="/contact">Physics</Link>
            </li>
            <li>
              <Link href="/contact">Chemistry</Link>
            </li>
            <li>
              <Link href="/contact">Computer Science</Link>
            </li>
            <li>
              <Link href="/contact">Accounting</Link>
            </li>
            <li>
              <Link href="/contact">Others...</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>
      </ul>
    </>
  );
}
