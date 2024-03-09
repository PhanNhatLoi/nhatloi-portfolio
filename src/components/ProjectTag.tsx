import React from "react";
import { styled } from "@mui/material";
import { projectIcon } from "@/data/profileData";
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
        <div className="flex justify-center items-center">
          <div className="hidden sm:block">{name}</div>
          <div>{projectIcon[name as keyof typeof projectIcon]}</div>
        </div>
      </button>
    </TagStyled>
  );
};

export default ProjectTag;
