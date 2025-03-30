import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import LoadingContent from "../Loading";
const ButtonStyled = styled("div")(
  () => `
  cursor: pointer;

  .custom-btn {
    color: #fff;
    padding: 10px 25px;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  
  /* 1 */
  .btn-1 {
    border: none;
    background-color:rgb(178, 91, 178);
    box-shadow: 0 0 1px #ef97e8;
  }
  .btn-1:hover {
     box-shadow: 0 0 10px #ef97e8, 0 0 10px #ef97e8, 0 0 10px #fff inset;
  }
  
  /* 2 */
  .btn-2 {
    color: #0bf4f3;
    border: 1px solid #0bf4f3;
    box-shadow:  0 0 5px #0bf4f3,  0 0 5px #0bf4f3 inset;
  }
  .btn-2:before {
    height: 0%;
    width: 2px;
  }
  .btn-2:hover {
    color: #fff;
    box-shadow: inset 0 0 10px #0bf4f3, 0 0 20px #0bf4f3 inset, 0 0 20px #0bf4f3 inset;
  }
  
  /* 3 */
  .btn-3 {
    background: #00aced;
     box-shadow:  0 0 5px #00aced,  0 0 8px #00aced;
    line-height: 42px;
    padding: 0;
    border: none;
    z-index: 2;
    -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
  }
  .btn-3:hover{
    background-color: transparent;
    color: #00aced;
    box-shadow: 0 5px 3px -3px #00aced, 0 -5px 3px -3px #00aced,
      0 5px 3px -3px #00aced, 0 -5px 3px -3px #00aced;
  }
  .btn-3:before,
  .btn-3:after {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    height: 50%;
    right: 0;
    z-index: -1;
    background: #00aced;
    box-shadow: 0 0 5px #00aced;
    transition: all 0.3s ease;
  }
  .btn-3:before {
    top: 0;
  }
  .btn-3:after {
    bottom: 0;
  }
  .btn-3:hover:before,
  .btn-3:hover:after {
    height: 0;
    background-color: #00aced;
  }
  
  /* 4 */
  .btn-4 {
    position: relative;
    color: #00aced;
    border: none;
    z-index: 2;
  }
  .btn-4:before,
  .btn-4:after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    border: 1px solid;
    
    z-index: -1;
    transition: all 0.3s ease;
  }
  .btn-4:before{
     top: 0;
     left: 0;
     border-bottom-color: transparent;
     border-right-color: transparent;
     border-top-color: #00aced;
     border-left-color: #00aced;
  }
  .btn-4:after{
     bottom: 0;
     right: 0;
     border-top-color: transparent;
     border-left-color: transparent;
     border-bottom-color: #00aced;
     border-right-color: #00aced;
  }
  .btn-4:hover:before,
  .btn-4:hover:after {
    border-color: #00aced;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 5px #00aced, 0 0 5px #00aced inset;
  }
  /* 5 */
  .btn-5 {
    color: #0bf4f3;
    box-shadow: 0 0 5px #0bf4f3, 0 0 5px #0bf4f3 inset;
    border: 1px solid #0bf4f3;
    z-index: 1;
  }
  .btn-5:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: 0 0 5px #0bf4f3, 0 0 5px #0bf4f3 inset;
    transition: all 0.3s ease;
  }
  .btn-5:hover {
    
  }
  .btn-5:hover:after {
    top: 0;
    height: 100%;
  }
  .btn-5:active {
    top: 2px;
  }
  
`
);

type Props = {
  children?: React.ReactNode;
  loading?: boolean;
  neonType?: 1 | 2 | 3 | 4 | 5;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
};
const MUIButton = (props: Props) => {
  const {
    onClick = () => {},
    children = <></>,
    loading = false,
    variant = "outlined",
    disabled = false,
  } = props;
  return (
    <ButtonStyled>
      <Button
        disabled={disabled}
        variant={variant}
        onClick={onClick}
        fullWidth
        loading={loading}
        className={`${props.neonType && "custom-btn btn-" + props.neonType}`}
      >
        {children}
      </Button>
    </ButtonStyled>
  );
};

export default MUIButton;
