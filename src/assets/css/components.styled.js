import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { theme } from "./style";




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
