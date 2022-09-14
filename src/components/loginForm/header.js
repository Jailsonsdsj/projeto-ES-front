import React from 'react'
import styled from 'styled-components';

function HeaderTest(){
    return(
        <Headerrrrr>
           <HeaderClass class="header">
                <DefaultLogoClass href="#default" class="logo">K-LOTE</DefaultLogoClass>
                <HeaderRight class="header-right">
                    <a class="active" href="#home">Dashboard</a>
                    <a href="#contact">Financeiro</a>
                    <a href="#about">Loteamentos</a>
                    <a href="#about">Clientes</a>
                </HeaderRight>
            </HeaderClass>
            
        </Headerrrrr>
    )
}

export default HeaderTest
const Headerrrrr = styled.header`
background-color: antiquewhite;
position: fixed;
z-index: 9999;
top: 0;
left: 0;
width: 100%;
height: 70px;
`
const HeaderClass = styled.div`
overflow: hidden;
background-color: #f1f1f1;
padding: 20px 10px;
@media screen and (max-width: 500px) {
  .header {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
`
const DefaultLogoClass = styled.a`
float: left;
color: black;
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 18px;
line-height: 25px;
border-radius: 4px;
`
const HeaderRight = styled.a`
float: right;
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 18px;
justify-content: space-between;
line-height: 25px;
border-radius: 4px;
`