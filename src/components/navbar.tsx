"use client";

export default function Navbar() {
  return (
    <div className="py-4">
      <div id="navbar">
        <div className="navlist flex items-center justify-between">
          <div className="logo">
            <h2 className="text-2xl font-bold">Logo</h2>
          </div>
          <ul className="flex items-center gap-5 text-lg">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
