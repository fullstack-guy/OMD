import React from "react";

export default function Navbar() {
  let navItems = ["Search", "Saved", "My reviews"];
  let navLinks = ["/search", "/saved", "reviews"];

  let links = navItems.map((item, index) => {
    return (
      <li key={item}>
        <a href={navLinks[index]}>{item}</a>
      </li>
    );
  });

  return (
    <>
      <nav>
        <ul>
          <li>
            <a></a>
          </li>
        </ul>
      </nav>
    </>
  );
}
