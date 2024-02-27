import React from "react";
import { styled } from "@mui/material";

const LoadingStyled = styled("div")(
  (props: Props) => `
    .loading{
        width : ${props.size}px;
        height: ${props.size}px;
    }
    .bars-common {
        width : ${(props.size || 100) / 10}px;
        height: ${(props.size || 100) - (props.size || 100) / 2}px;
    }

    .bar-one {
        right: ${(props.size || 100) / 1.75}px;
    }
    .bar-three {
        left: ${(props.size || 100) / 1.75}px;
    }
    .squares-common {
        width : ${(props.size || 100) - 10}px;
        height: ${(props.size || 100) - 10}px;
    }

    @keyframes barOne {
        0%,
        100% {
          box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
        }
        50% {
          height: 2px;
          box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
        }
    }

    @keyframes barTwo {
        0%,
        100% {
          box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
        }
        50% {
          height: 2px;
          box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
        }
    }

    @keyframes barThree {
    0%,
    100% {
        box-shadow: 0 0 0 .1vw cyan, 0 0 1vw 0 cyan, inset 0 0 .5vw 0 cyan;
    }
    50% {
        height: 2px;
        box-shadow: 0 0 0 .1vw magenta, 0 0 1vw 0 magenta, inset 0 0 .5vw 0 magenta;
    }
    }
`
);
type Props = {
  size?: number;
};
const LoadingContent = (props: Props) => {
  const { size = 100 } = props;
  return (
    <LoadingStyled size={size}>
      <div className="loading">
        <div className="bars-common bar-one"></div>
        <div className="bars-common bar-two"></div>
        <div className="bars-common bar-three"></div>

        <div className="squares-common square-one"></div>
        <div className="squares-common square-two"></div>
      </div>
    </LoadingStyled>
  );
};

export default LoadingContent;
