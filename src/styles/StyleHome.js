import styled from 'styled-components'


export const titulo = styled.h2`
    margin: 10px;
    width: 100%;
`

export const divTitle = styled.div`
    display: grid;
    place-items: center; 
    text-align: center; 
    width: 100%;
    height: fit-content;
`

export const textPrincipal = styled.span`           
    font-size: 2rem;
    padding-top: 4rem;           
    font-family: 'Roboto', sans-serif;    
    color: #fff;    
    width: 90%;  
    
    @media(max-width:375px){
        font-size: 1.5rem;
    }
`

export const skills = styled.div`
    display: grid;
    place-items: center;
    text-align: center;            
    margin: 3.5rem auto 2rem;
`

export const title = styled.h3`
    color: white;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;

    @media(max-width:375px){
        font-size: 1rem;
    }
`

export const logos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`


export const icons = styled.img`
    width: 5rem;
    height: 5rem;
    margin: 1rem;
`