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
    max-height: 35rem;

    @media(max-width: 950px){
        width: 90%;
    }
`

export const image = styled.img`
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    object-position: top;
    height: 15rem;    

    &:hover{
        margin-top:-4px;
        box-shadow:4px 4px 4px #999;
        margin: 1px solid black;
        transition: all .2s ease-in-out;
        
    }
`

export const divDescrip = styled.div`
    transition-duration: 2s;
    transition-timing-function: ease;     
`

export const divLinks = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const links = styled.img`
    width: 2rem;
    margin: .5rem .3rem;
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
    overflow: auto;
    overflow-x: hidden;
      
`