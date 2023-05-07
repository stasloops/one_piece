import React from "react";
import { useUser } from "../../hooks/useUser";
import "../../styles/components/top/gem.css";

const gem = (
  <svg
    // width="800px"
    // height="800px"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    // class="iconify iconify--noto"
    preserveAspectRatio="xMidYMid meet"
  >
    <path fill="#e1f5fe" d="M4.01 47.94l17.48-26.51L35.03 36.9z"></path>
    <path fill="#81d4fa" d="M44.11 68.26L4.01 47.94L35.03 36.9z"></path>
    <path fill="#64b5f6" d="M63.94 43.06L35.03 36.9l9.08 31.36z"></path>
    <path fill="#0288d1" d="M123.87 47.94l-17.48-26.51L92.85 36.9z"></path>
    <path fill="#81d4fa" d="M83.77 68.26l40.1-20.32L92.85 36.9z"></path>
    <path fill="#e1f5fe" d="M63.94 43.06l28.91-6.16l-9.08 31.36z"></path>
    <path fill="#b2ebf2" d="M83.77 68.26l-19.83-25.2l-19.83 25.2z"></path>
    <path
      fill="#b3e5fc"
      d="M43 10.06h41.88l21.51 11.37L92.85 36.9l-28.91 6.16l-28.91-6.16l-13.54-15.47z"
    ></path>
    <path fill="#1e88e5" d="M63.94 117.27L4.01 47.94l40.1 20.32z"></path>
    <path fill="#b3e5fc" d="M63.94 117.27l59.93-69.33l-40.1 20.32z"></path>
    <path fill="#e1f5fe" d="M83.77 68.26l-19.83 49.01l-19.83-49.01z"></path>
  </svg>
);
const Gem = () => {
  const userData: any = useUser();
  return (
    <div className="gem">
      <div className="gem__box">
        <span className="gem__icon">{gem}</span>
        <span className="gem__value">{userData?.user?.balance}</span>
      </div>
    </div>
  );
};

export default Gem;
