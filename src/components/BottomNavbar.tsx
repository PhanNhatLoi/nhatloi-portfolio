import { HomeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { styled } from "@mui/material";
import { ItemMenuAminationType } from "@/app/page";

const BottomNavbarStyled = styled("div")(
  ({ isSelected }: { isSelected: number }) => `
    @media(min-width: 600px) {
        display: none;
    }
    @media(max-width: 600px) {
        display: block;
    }
    position: absolute;
    width: 100%;
    z-index: 999;
    bottom: 0;
    .navigation {
        position: relative;
        background: white;
        padding-left: 20px;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .navigation ul {
        position: relative;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .navigation ul li {
        position: relative;
        list-style: none;
        width: 70px;
        height: 70px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navigation ul li a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
    }
    .navigation ul li a .icon {
        position: relative;
        display: block;
        line-height: 75px;
        font-size: 1.5em;
        text-align: center;
        transition: 0.5s;
        color: purple;
    }
    .navigation ul li.active a .icon {
        transform: translateY(-35px);
    }
    .navigation ul li a .text {
        position: absolute;
        font-weight: 400;
        font-size: 0.75em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        opacity: 0;
        transform: translateY(20px);
        color: purple;
    }
    .navigation ul li.active a .text {
        opacity: 1;
        transform: translateY(10px);

    }

    .indicator {
        position: absolute;
        top: -50%;
        left: 0;
        width: 70px;
        height: 70px;
        background: white;
        border-radius: 50%;
        border: 4px solid black;
        transition: 0.5s;
    }
    .navigation ul li:nth-of-type(${isSelected + 1}).active ~ .indicator {
        transform: translateX(calc(100% * ${isSelected}));
    }
`
);

type Props = {
  items: ItemMenuAminationType[];
  isSelected: number;
};
const BottomNavbar = (props: Props) => {
  const { items, isSelected } = props;
  return (
    <BottomNavbarStyled isSelected={isSelected}>
      <div className="navigation">
        <ul>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={`${isSelected === index ? "active" : ""}`}
              >
                <a
                  href="#"
                  onClick={() => {
                    item.onClick && item.onClick();
                  }}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.title}</span>
                </a>
              </li>
            );
          })}
          <div className="indicator"></div>
        </ul>
      </div>
    </BottomNavbarStyled>
  );
};

export default BottomNavbar;
