import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
        left: 0;
        list-style: none;
        transform-origin: calc(${size} / 2);
        transition: 0.5s;
        transition-delay: calc(0.1s * ${index});
        transform: rotate(0) translateX(calc(${size} / 2 - 10px));
    }
    .active {
        transform: rotate(calc(360deg / ${total} * ${index}));
    }

    li .link {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        padding: 10px;
        border-radius: 50%;
        transform: rotate(calc(360deg / -${total} * ${index}));
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
        justify-content: center;
        align-items: center;
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
  menus: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
  size?: string | number;
};
const MenuAnimation = (props: Props) => {
  const { menus = [], size = "200px" } = props;
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
          {/* <PlusIcon className="h-5 w-10 icon" /> */}
        </div>

        {menus.map((m, i) => {
          return (
            <LiStyled index={i} key={m.title} total={menus.length} size={size}>
              <li className={`${isToggle ? "active" : ""}`}>
                <Link className="link" href={m.href}>
                  {m.icon}
                </Link>
              </li>
            </LiStyled>
          );
        })}
      </div>
    </MenuStyled>
  );
};

export default MenuAnimation;
