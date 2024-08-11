import React from "react";

const Header = () => {
  return (
    <header className="mix-blend-difference fixed top-0 z-[99] text-white h-24 w-screen px-10">
      <div className="flex items-center h-full w-full">
        <div className="w-1/2">
          <div className="w-max">
            <a className="w-max" href="/">
              <img
                className="h-10"
                src="./images/logo/whiteLogo_trans.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end pr-10">
          <button className="flex flex-col gap-1 border-main border-2 rounded-full w-16 h-16 items-center justify-center">
            <div className="w-8 h-1 bg-main rounded-3xl"></div>
            <div className="w-8 h-1 bg-main rounded-3xl"></div>
            <div className="w-8 h-1 bg-main rounded-3xl"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
