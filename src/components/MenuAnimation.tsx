import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { ItemMenuAminationType } from "@/app/page";

const LiStyled = styled("div")(
  ({
    index,
    total,
    size,
  }: {
    index: number;
    total: number;
    size: number | string;
  }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        position: absolute;
        right: 0;
        list-style: none;
        transform-origin: calc(${size} / 2);
        transition: 0.5s;
        transition-delay: 0s;
    }
    .active {
        right: calc(${size} / 2);
        transform: rotate(calc(360deg / ${total} * ${index}));
        transition-delay: 0.5s;
    }

    li .link {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0bf4f3;
        padding: 10px;
        border-radius: 50%;
        transform: rotate(calc(360deg / -${total} * ${index}));
    }
    .selected {
        background: red;
    }
`
);

const MenuStyled = styled("div")(
  ({ size }: { size: number | string }) => `
    .menu-toggle {
        position: relative;
        width: ${size};
        height:  ${size};
        display: flex;
        justify-content: right;
        align-items: center;
        transition: 0.5s;
        transition-delay: 0.5s;
    }

    .menu-toggle.active {
        transition: 0.5s;
        transform: translateX(-50%);
    }

    .toggle {
        position: absolute;
        width: calc(${size} / 3);
        height: calc(${size} / 3);
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        z-index:99;
        .icon {
            transition: 1.25s;
        }
    }

    .menu-toggle.active .icon {
        transform: rotate(315deg);
    }
`
);

type Props = {
  menus: ItemMenuAminationType[];
  size?: string | number;
  isSelected: number;
};
const MenuAnimation = (props: Props) => {
  const { menus = [], size = "200px", isSelected } = props;
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [stateIcon, setStateIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setStateIcon(isToggle);
    }, 700);
  }, [isToggle]);

  return (
    <MenuStyled size={size}>
      <div className={`menu-toggle ${isToggle ? "active" : ""}`}>
        <div
          className="toggle shadow-md shadow-black"
          onClick={() => {
            setIsToggle(!isToggle);
          }}
        >
          {stateIcon ? (
            <PlusIcon className="h-5 w-10 icon" />
          ) : (
            <Bars3Icon className="h-5 w-10 icon" />
          )}
        </div>

        {menus.map((m, i: number) => {
          return (
            <LiStyled index={i} key={i} total={menus.length} size={size}>
              <li className={`${isToggle ? "active" : ""}`}>
                <div
                  className={`link shadow-md shadow-black ${
                    isSelected === i ? "selected" : ""
                  }`}
                  onClick={() => {
                    m.onClick && m.onClick();
                  }}
                >
                  {m.icon}
                </div>
              </li>
            </LiStyled>
          );
        })}
      </div>
    </MenuStyled>
  );
};

export default MenuAnimation;
