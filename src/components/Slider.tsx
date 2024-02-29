import React, { useState } from "react";
import { styled } from "@mui/material";
import MenuNavbar from "./MenuNavbar";
import { ItemMenuAminationType } from "@/app/page";
const SliderStyled = styled("div")(
  () => `
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    #next , #prev {
        position: absolute;
        top: 40%;
        color: white;
        background: transparent;
        border: none;
        font-size:xxx-large;
        left: 50px;
    }
    #next {
        left: unset;
        right: 50px;
    }
    `
);

const ItemStyled = styled("div")(
  ({ index }: { index: number }) => `
    .item {
        // padding: 10px;
        position: absolute;
        height: 100%;
        text-align: justify;
        color: black;
        border-radius: 20px;
        transition: 0.5s;
        width: 70%;
        left: calc(15%);
        @media(max-width:600px){
            width: 100%;
            left:0;
        }
        
    }

    .right-item {
        transform: translateX(${150 * index}px) scale(${
    1 - 0.2 * index
  }) perspective(20px) rotateY(1deg);
        z-index: -${index};
        filter: blur(5px);
    }
    .left-item {
        transform: translateX(${-150 * index}px) scale(${
    1 - 0.2 * index
  }) perspective(20px) rotateY(-1deg);
        z-index: -${index};
        filter: blur(5px);
    }

    .active {
        transform: none;
        z-index: 1;
        filter: none;
        opacity: 1;
    }

    
`
);

type Props = {
  items: ItemMenuAminationType[];
};
const Slider = (props: Props) => {
  const [itemSelect, setItemSelect] = useState<number>(0);
  const { items } = props;
  return (
    <SliderStyled>
      {items.map((item: ItemMenuAminationType, index) => {
        item.onClick = () => setItemSelect(index);
        return (
          <ItemStyled key={index} index={Math.abs(itemSelect - index)}>
            <div
              className={`item ${index < itemSelect ? "left-item" : ""} ${
                index === itemSelect ? "active" : ""
              } ${index > itemSelect ? "right-item" : ""}
              p-10 bg-smoker-background m-auto shadow-black shadow-lg box-border rounded overflow-auto`}
            >
              {item.content}
            </div>
          </ItemStyled>
        );
      })}

      <button
        id="prev"
        onClick={() => {
          itemSelect > 0 && setItemSelect(itemSelect - 1);
        }}
      >
        {`<`}
      </button>
      <button
        id="next"
        onClick={() => {
          itemSelect < items.length - 1 && setItemSelect(itemSelect + 1);
        }}
      >
        {`>`}
      </button>
      <MenuNavbar items={items} />
    </SliderStyled>
  );
};

export default Slider;
