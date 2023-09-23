import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [displayMenuBurger, setDisplayBurgerMenu] = useState(false);
  const toggleBurger = () => {
    setDisplayBurgerMenu(!displayMenuBurger);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 728) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between p-10 border">
      <div className="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
      <Link to="/">
        <img src="" alt="logo" />
      </Link>

      {isMobile || displayMenuBurger ? (
        <div
          className={`space-y-2 cursor-pointer z-30 `}
          onClick={toggleBurger}
        >
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      ) : (
        <div className="flex gap-10">
          <div className="flex gap-5">
            <Link to="/?cat=photo">PHOTO</Link>
            <Link to="/?cat=piano">PIANO</Link>
            <Link to="/?cat=mao">MAO</Link>
            <Link to="/?cat=crochet">CROCHET</Link>
            <Link to="/?cat=dev">DEV</Link>
          </div>
          <div className="flex gap-5">
            <span>Adam</span>
            <span>Logout</span>
            <Link to="/write">ECRIRE</Link>
          </div>
        </div>
      )}
      <div
        className={`w-full h-full fixed top-0 right-0 flex flex-col justify-center items-center z-20 gap-10 text-5xl font-bold pb-40  bg-white shadow-lg transform transition-transform duration-300 ease-in-out  ${
          displayMenuBurger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/?cat=photo">PHOTO</Link>
        <Link to="/?cat=piano">PIANO</Link>
        <Link to="/?cat=mao">MAO</Link>
        <Link to="/?cat=crochet">CROCHET</Link>
        <Link to="/?cat=dev">DEV</Link>
        <div className="flex flex-col mt-20 gap-10 justify-center items-center">
          <Link to="/">SE DECONNECTER</Link>
          <Link to="/">PROFIL</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
