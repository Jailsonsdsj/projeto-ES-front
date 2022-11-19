import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { theme } from "./style";
import { Space } from "antd";



/* ######### LOTS #########*/
export const Lot = styled.div`
    margin: 5px;
    min-width: 50px;
    min-height: 50px;
    display:flex;
    align-items: center;
  
    font-size: ${theme.fontSize.headline};
    font-weight: bold;
    color:#ffff;
    background-color: ${(props) => props.avaliable ? '#38B885' : '#8c8c8f'};
    :hover{
        color: ${theme.colors.black.primary};
    };

    & p{
        margin: 0 auto;
        
    };
    
`


export const AlloteamentsInfo = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 560px){
        flex-direction: column;
    }
`

export const AlloteamentsTable = styled.table`
    margin:20px 0;
    font-size: ${theme.fontSize.headline};
    width: 50%;
    & thead{
        color: ${theme.colors.black.terciary};
    };
    & tbody{
        font-weight: 500;
    }
    @media (max-width: 760px){
        width: 80%;
    }
    @media (max-width: 560px){
        width:100%;
    }

`

export const AlloteamentsLegend = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    font-weight: ${theme.fontSize.caption1};
    
`



/* ######### ALLOTEAMENTS #########*/

export const AlloteamentsContainer = styled(Space)`
   margin: 0 auto;
   max-width: 90vw;
   display: flex;

`

export const Card = styled.div`
    width: 150px;
    height: 200px;
    margin: 15px;
    @media (max-width: 400px){
        margin:5px;
    }
`

export const CardImage = styled.img`
    max-width: 150px;
    max-height: 150px;
`

export const AlloteamentsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 3% 30px 3%;
    flex-direction: row;
    @media (max-width:430px){
        flex-direction: column;
    }
`

export const SearchbarContainer = styled.div`
    display:flex;
    flex-direction: row;
    @media (max-width:430px){
        justify-content: space-between;

    }
   
`