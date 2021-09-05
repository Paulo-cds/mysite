import styled from 'styled-components'


export const titulo = styled.h2`
    margin: 10px;
    color: white;
    text-align: center;
`

export const text = styled.p`
    color: white;
    text-align: center;
    margin: .7rem auto;
    letter-spacing: .8px;
    font-size: 1.2rem;
    line-height: 1.5rem;
`

export const frase = styled.p`
    color: white;
    text-align: center;
    margin: 1rem auto 1.5rem 0;
    letter-spacing: .1rem;
    font-size: 1rem;
    line-height: 1.2rem;
    width: 70%;
    
`

export const container = styled.div`
    width: 100%;
    display: flex;    
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 1rem;

    @media(max-width:768px){
        display:grid;
    }
`

export const itemsContainer = styled.div`
    align-items: center;
    padding: 1rem;
    display: grid;
    width: 50%;

    @media(max-width:768px){
        width: 90%;
    }
`

export const card = styled.img`
    margin: 1rem auto;
    align-items: center;
    
    @media(max-width:370px){
        width: 100%;
    }
`