import styled from 'styled-components'


export const titulo = styled.h2`
    padding-top: 10px;
    color: white;
    text-align: center;
`

export const container = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem auto;
`


export const post = styled.div`
    width: 48%;
    background-color: white;
    height: fit-content;
    margin: 1rem .5rem;
    padding: 10px;
`

export const image = styled.img`
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    object-position: top;
`

export const divDescrip = styled.div`
    transition-duration: 2s;
    transition-timing-function: ease;
`

export const displayDescrip = styled.button`
    background-color: blue;
    width: 30px;
    height: 30px;


    &:hover{
        cursor: pointer;
    }
`

export const description = styled.p`    
   
`