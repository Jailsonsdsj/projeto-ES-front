import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Dropdown, Button, Menu, Space } from "antd";
import { PlusOutlined, CameraOutlined, CheckCircleOutlined, InfoCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {  } from "@ant-design/icons";

/* ######### THEME #########*/

export const theme = {
  colors: {
    black: {
      primary: "#000000",
      secondary: "#636366",
      terciary: "#C7C7CC",
      quartenary: "#E5E5EA",
      senary: "#F2F2F7",
      septenary: "#FFFFFF",
    },
    blue: {
      primary: "#ACC2ED",
      secondary: "#86A1D7",
      terciary: "#5985DB",
      quartenary: "#3066D2",
    },
    green: {
      primary: "#AFE3CE",
      secondary: "#87D4B6",
      terciary: "#60C69D",
      quartenary: "#38B885",
    },
    red: {
      primary: "#F7BCBC",
      secondary: "#F49B9B",
      terciary: "#F07979",
      quartenary: "#EC5858",
    },
    white: "#FFFF",
  },
  fonts: {
    primary: "roboto",
  },
  fontSize: {
    largeTitle: "34px",
    title1: "28px",
    title2: "22px",
    headline: "17px",
    body: "17px",
    caption1: "12px",
    caption2: "11px",
  },
  placeHolder:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

/* ######### TEXTS #########*/

export const LargeTitle = styled.h1`
  font-size: ${theme.fontSize.largeTitle};
  color: ${theme.colors.green.quartenary};
`;

export const Title1 = styled.h1`
  font-size: ${theme.fontSize.title1};
  color: ${theme.colors.black.primary};
`;

export const Title2 = styled.h2`
  font-size: ${theme.fontSize.title2};
  color: ${theme.colors.black.primary};
  font-weight: bold;
`;

export const Headline = styled.h2`
  font-size: ${theme.fontSize.headline};
  color: ${theme.colors.black.primary};
`;

export const BodyText = styled.h2`
  font-size: ${theme.fontSize.body};
  color: ${theme.colors.black.primary};
`;

export const Caption1 = styled.h2`
  font-size: ${theme.fontSize.caption1};
  color: ${theme.colors.black.primary};
`;

export const Caption2 = styled.h2`
  font-size: ${theme.fontSize.caption2};
  color: ${theme.colors.black.primary};
`;

/* ######### BUTTONS #########*/

export const PrimaryButton = styled.button`
  text-align: center;
  border-radius: 30px;
  background: ${theme.colors.green.quartenary};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 100px;
  height: 30px;
  padding: 8px;
  :hover {
    background: ${theme.colors.green.primary};
    cursor: pointer;
  }
`;

export const AntdPrimaryButton = styled(Button)`
  text-align: center;
  border-radius: 30px;
  background: ${theme.colors.green.quartenary};
  color: #ffffff;

  border: none;
  width: 100px;
  height: 30px;
  padding: 8px;
  :hover {
    background: ${theme.colors.green.primary};
    cursor: pointer;
  }
`;

export const NormalButton = styled.button`
  text-align: center;
  border-radius: 30px;
  color: ${theme.colors.green.quartenary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100px;
  height: 30px;
  padding: 8px;
  margin: 0 5px;
  background-color: inherit;

  :hover {
    cursor: pointer;
    color: ${theme.colors.green.secondary};
  }
`;

export const AddButton = styled(PlusOutlined)`
  color: ${theme.colors.green.quartenary};
  font-size: 25px;
  margin: 0 20px;
  :hover {
    color: ${theme.colors.black.primary};
  }
`;

export const AddImg = styled.label`
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 0 5%;
  background-color: ${theme.colors.black.senary};
  content: 'Anexar foto';
  &:hover{
    background-color: ${theme.colors.black.senary};
    cursor: pointer;
  }
  ::-webkit-file-upload-button{
    visibility: hidden;
  };
`;
 


export const CameraIcon = styled(CameraOutlined)`
  font-size: 30px;

`;




/* ######### FORMS #########*/
export const BoxContainer = styled.div`
  display: flex;
  max-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormDefault = styled.form`
  background-color: ${theme.colors.white};
  display: flex;
  width: 30%;
  flex-direction: column;
  border-radius: 15px;
  padding: 3%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1252px) {
    width: 40%;
  }
  @media (max-width: 810px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 60%;
  }
  @media (max-width: 490px) {
    width: 80%;
  }
`;

export const LinearForm = styled.form`
  display: flex;
  flex-direction: row;
  @media (max-width:563px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputDefault = styled.input`
  background-color: ${theme.colors.black.senary};
  color: ${theme.colors.black.primary};
  border: none;
  border-radius: 15px;
  width: 100%;
  padding: 2px 8px;
  height: 30px;

  font-size: ${theme.fontSize.BodyText};
  ::placeholder {
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
  }
`;

export const LinearInput = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  width: auto;
  margin: 0 5%;

  ::placeholder {
    font-family: ${theme.placeHolder};
    font-size: 15px;
  }
`;

export const LinearInputGroup = styled(Space)`
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px 20px 0px;
`;

export const FormLabel = styled.label`
  font-size: ${theme.fontSize.headline};
  color: ${theme.colors.black.primary};
  margin: 5px 0;
  font-weight: bold;
`;
export const FormText = styled.p`
  font-size: ${theme.fontSize.caption1};
  color: ${theme.colors.black.primary};
`;
export const FormOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${theme.fontSize.caption1};
  align-items: center;
  margin-bottom: 10px;
`;
export const FormMessageError = styled.p`
  color: ${theme.colors.red.quartenary};
  font-size: ${theme.fontSize.caption1};
`;

/* ######### CONTAINERS #########*/

export const CenterContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  text-align: center;
`;

/* ########### HEADER ##############*/

export const NavBar = styled.nav`
  /* display:grid;
  grid-template-columns: 1fr 2fr 1fr; */
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.green.quartenary};
  height: 100px;
`;
export const ImgLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-left: 50px;
`;

export const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 655px) {
    display: none;
  }
`;

export const MenuOption = styled.li`
  margin: 0 15px;
  list-style: none;
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.white};
  font-weight: 500;
  :hover {
    color: ${theme.colors.black.primary};
  }
`;

export const UserAvatar = styled(Button)`
  border-color: ${theme.colors.white};
  border-style: solid;
  padding: 3px 15px;
  border-radius: 13% 13% 13% 14% / 49% 48% 52% 51%;
  border-width: thin;
  display: flex;
  text-align: center;
  background: ${theme.colors.green.quartenary};
  color: #ffffff;
  align-items: center;
  height: 30px;
  font-weight: bold;
  text-align: center;
  :hover {
    border-color: ${theme.colors.black.primary};
    background-color: inherit;
    color: ${theme.colors.black.primary};
    cursor: pointer;
  }
`;

export const MenuDropDown = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 10px 10px 0 0;
  &:hover {
    display: block;
    background-color: #f9f9f9;
  }
`;

export const DropDownOptions = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  z-index: 1;
  width: 100%;
  border-radius: 0 0 10px 10px;
`;

export const DropDownItems = styled.a`
  color: black;
  text-align: center;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const MobileNavbar = styled.div`
  display: none;
  align-items: center;

  @media (max-width: 655px) {
    display: inherit;
  }
`;

export const UserPanel = styled.div`
  text-align: center;
`;

// export const MobileMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: ${theme.colors.black.senary};

// `
// export const MobileMenuItems = styled(NavLink)`
//   text-decoration: none;
//   padding: 20px 0;
//   font-size: ${theme.fontSize.headline};
//   border-style: solid;
//   border-width: thin;
//   border-color: ${theme.colors.black.primary};
//   margin-bottom: 1px;
//   width:100%;
//   text-align: center;

// `

export const MobileMenu = styled(Menu)`
  background-color: ${theme.colors.green.primary};
  display: none;
  align-items: center;

  @media (max-width: 655px) {
    display: flex;
  }
`;




/* ########### MODAL AND MESSAGER ##############*/


export const SuccessIcon = styled(CheckCircleOutlined)`
  color:${theme.colors.green.quartenary};
  font-size:40px;
  margin-bottom: 10px;
`
export const ErrorIcon = styled(CloseCircleOutlined)`
  color:${theme.colors.red.quartenary};
  font-size:40px;
  margin-bottom: 10px;
`
export const InfoIcon = styled(InfoCircleOutlined)`
  color:${theme.colors.black.secondary};
  font-size:40px;
  margin-bottom: 10px;
`



/*CheckCircleOutlined, InfoCircleOutlined, CloseCircleOutlined*/