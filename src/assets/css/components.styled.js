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
export const AddLot = styled.div`
    min-width: 50px;
    min-height: 50px;
    display:flex;
    align-items: center;
    background-color: '#8c8c8f';
    :hover{
        cursor: pointer;
    }
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



export const SearchbarContainer = styled.div`
    display:flex;
    flex-direction: row;
    @media (max-width:430px){
        justify-content: space-between;

    }
   
`

/* ######### ALLOTEAMENTS #########*/

export const ModalFooter = styled.div`
    display:flex;
    justify-content: end;

`

/* ######### ALLOTEAMENTS #########*/

export const BluePrintContainer = styled.div`
    min-height: 30vh;
    display:flex;
    align-items: center;
    justify-content: center;
`


/* ######### CLIENTS #########*/

export const ClientCard = styled.div`
    border: 1px solid ${theme.colors.black.terciary};
    margin: 5px 5%;
    padding: 1% 2%;
    border-radius: 20px;
    display:grid;
    grid-template-columns: 1fr 3fr;
    &:nth-of-type(0){
        background-color:red;
    }

    @media (max-width: 500px){
        display:flex;
        flex-direction: column;
    }
`

export const AssociateLots = styled.div`
    border: 1px solid ${theme.colors.green.terciary};
    border-radius: 5px;
    color: ${theme.colors.green.quartenary};
    padding: 0 10px;
    margin: 0;

`

export const ClientCardBody = styled.ul`
   list-style: none;

`
export const ClientCardLots = styled(Space)`
    display: flex;
    justify-content: right;
    @media (max-width: 500px){
       
        justify-content: center;
    }
`

export const ClientName = styled(NavLink)`
    text-decoration:none;
    color: ${theme.colors.black.primary};
    :hover{
        color:${theme.colors.green.quartenary};
    }
`


export const selectedAlloteament = styled.div`


`


