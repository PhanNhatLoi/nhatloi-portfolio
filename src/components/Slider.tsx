import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { ItemMenuAminationType } from "@/app/page";
import BottomNavbar from "./BottomNavbar";
import { useParams } from "next/navigation";
const SliderStyled = styled("div")(
  () => `
    width: 100%;
    // height: 70%;
    overflow: hidden;
    position: relative;
    #next , #prev {
        width: 50px;
        box-shadow: 1px 1px 0px 0px black;
        background: gray;
        z-index: 9;
        position: absolute;
        top: 80%;
        color: white;
        font-size:xxx-large;
        right: 13%;
    }
    #next {
        top: 70%;
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
  const params = useParams();

  useEffect(() => {
    if (params.tag) {
      switch (params.tag) {
        case "overview":
          setItemSelect(0);
          break;
        case "about":
          setItemSelect(1);
          break;
        case "ex":
          setItemSelect(2);
          break;
        case "projects":
          setItemSelect(3);
          break;
        default:
          break;
      }
    }
  }, [params]);
  const { items } = props;
  return (
    <SliderStyled className="h-full sm:h-3/4">
      <button
        className="hidden sm:block"
        id="prev"
        onClick={() => {
          itemSelect > 0 && setItemSelect(itemSelect - 1);
        }}
      >
        {`<`}
      </button>
      <button
        className="hidden sm:block"
        id="next"
        onClick={() => {
          itemSelect < items.length - 1 && setItemSelect(itemSelect + 1);
        }}
      >
        {`>`}
      </button>
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
              <div className=" absolute w-40 h-14 left-0 bg-amber-500 font-bold text-2xl text-black pl-5  flex items-center shadow-amber-500 shadow-md rounded-r-md">
                {item.title}
              </div>
              {item.content}
            </div>
          </ItemStyled>
        );
      })}

      {/* navbar using mobile divice */}
      <BottomNavbar items={items} isSelected={itemSelect} />
      {/*  */}
    </SliderStyled>
  );
};

export default Slider;
