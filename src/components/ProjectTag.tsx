import React from "react";
import { styled } from "@mui/material";
const TagStyled = styled("div")(
  ({ color }: { color?: string }) => `
button {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: ${color};
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
}

button:hover {
    background: ${color};
    color: #050801;
    box-shadow: 0 0 5px ${color},
        0 0 25px ${color},
        0 0 50px ${color},
        0 0 200px ${color};
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.btn-selected {
  background: ${color};
  color: #050801;
  box-shadow: 0 0 5px ${color},
      0 0 25px ${color},
      0 0 50px ${color},
      0 0 200px ${color};
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

button span {
    position: absolute;
    display: block;
}

button span:nth-of-type(1) {
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

button span:nth-of-type(2) {
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

button span:nth-of-type(3) {
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


button span:nth-of-type(4) {
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

const ProjectTag = ({
  name,
  onClick,
  isSelected,
  color = "#03e9f4",
}: {
  name: string;
  onClick: (e: string) => void;
  isSelected: boolean;
  color?: string;
}) => {
  return (
    <TagStyled color={color} onClick={() => onClick(name)}>
      <button className={`${isSelected ? "btn-selected" : ""}`}>
        {[1, 2, 3, 4].map((_, index) => {
          return <span key={index}></span>;
        })}

        {name}
      </button>
    </TagStyled>
  );
};

export default ProjectTag;
