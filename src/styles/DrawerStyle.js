import styled from 'styled-components'



export const Perfil = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 100%;  
    box-shadow: 0 0 10px white;  
`


export const DivPerfil = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    left: 40%;

    @media (min-width:651px) and (max-width:750px){
        left: 35%;
    } 

    @media(min-width:426px) and (max-width:650px){
        left: 30%;
    } 

    @media(min-width:351px) and (max-width:425px){
        left: 25%;
    } 

    @media(max-width:350px){
        left: 20%;
    } 
`

export const Social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: -50%;

    @media(max-width: 900px){
        margin-top: -30%
    }
    
`

export const LinkSocial = styled.a`
    list-style: none;
    text-decoration: none;
    color:white;  
    margin: 0 5px;           
`

export const ImgSocial = styled.img`    
    width: 2.5rem;
    background-color: white;
    border-radius: 100%;     
    box-shadow: 0 0 10px white;
`