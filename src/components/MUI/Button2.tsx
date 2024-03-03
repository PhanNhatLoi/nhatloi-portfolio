import React from "react";
import { styled } from "@mui/material";
const TagStyled = styled("div")(
  ({ color }: { color?: string }) => `
button {
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
}

button:hover {
    color: ${color};
}

.btn-selected {
    color: ${color};
}

.btn-selected span {
    position: absolute;
    display: block;
}

.btn-selected span:nth-of-type(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${color});
    animation: animate1 1s linear infinite;
}

@keyframes animate1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.btn-selected span:nth-of-type(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${color});
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

@keyframes animate2 {
    0% {
        top: -100%;
    }

    50%,
    100% {
        top: 100%;
    }
}

.btn-selected span:nth-of-type(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, ${color});
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}

@keyframes animate3 {
    0% {
        right: -100%;
    }

    50%,
    100% {
        right: 100%;
    }
}


.btn-selected span:nth-of-type(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, ${color});
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }

    50%,
    100% {
        bottom: 100%;
    }
}
`
);

const ButtonAnimated = ({
  onClick,
  children,
  isSelected,
  color = "#03e9f4",
}: {
  onClick: () => void;
  isSelected: boolean;
  color?: string;
  children: React.ReactNode;
}) => {
  return (
    <TagStyled color={color} onClick={onClick}>
      <button className={`${isSelected ? "btn-selected" : ""}`}>
        {[1, 2, 3, 4].map((_, index) => {
          return <span key={index}></span>;
        })}
        {children}
      </button>
    </TagStyled>
  );
};

export default ButtonAnimated;
