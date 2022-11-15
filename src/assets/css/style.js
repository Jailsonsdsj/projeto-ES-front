import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
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
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.black.primary};
`;

export const Headline = styled.h2`
  font-size: ${theme.fontSize.headline};
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.black.primary};
`;

export const BodyText = styled.h2`
  font-size: ${theme.fontSize.body};
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.black.primary};
`;

export const Caption1 = styled.h2`
  font-size: ${theme.fontSize.caption1};
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.black.primary};
`;

export const Caption2 = styled.h2`
  font-size: ${theme.fontSize.caption2};
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.black.primary};
`;

/* ######### BUTTONS #########*/

export const PrimaryButton = styled.button`
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

/* ######### FORMS #########*/
export const BoxContainer = styled.div`
  display: flex;
  max-height: 100vh;

  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormDefault = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  width: 20%;
  flex-direction: column;
  border-radius: 15px;
  padding: 1% 3%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1252px) {
    width: 30%;
  }
  @media (max-width: 810px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 50%;
  }
  @media (max-width: 490px) {
    width: 80%;
  }
`;

export const InputDefault = styled.input`
  background-color: ${theme.colors.black.senary};
  color: ${theme.colors.black.primary};
  border: none;
  border-radius: 15px;
  width: 90%;
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
  margin-left:50px;
`;

export const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none; 

`;

export const MenuOption = styled.li`
  margin: 0 15px;
  

`

export const MenuNavLink = styled(NavLink)`
   text-decoration: none;
   color: ${theme.colors.white};
   font-weight: 500;
   :hover{
    color: ${theme.colors.black.primary}
   }
`

export const UserAvatar = styled(Dropdown)`
  border-radius: 15%;
  border-color: ${theme.colors.white};
  border-style:solid;
  padding: 3px 10px;
  border-radius: 13% 13% 13% 14% / 49% 48% 52% 51%;
  border-width: thin;
  :hover{
    border-color: ${theme.colors.black.primary}
   }

`