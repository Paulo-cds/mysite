import styled from 'styled-components'



export const post = styled.div`
    width: 48%;
    background-color: white;    
    max-height: 30rem;
    margin: 1rem .5rem;
    padding: 10px;
    position: relative;  
    overflow: auto;
    overflow-x: hidden; 

    ::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 950px){
        width: 100%;
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
    border-radius: 50%;    
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    top: 260px;

    &:hover{
        cursor: pointer;
    }
`

export const description = styled.p`    
    overflow: auto;
    overflow-x: hidden;    
    width: 90%;
    text-align: center;
    margin: 10px auto;
`

export const adiciona = styled.img`
    width:100%;
    transition: all .5s ease-in-out;

    
    :hover{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);

        transform: rotate(360deg);
    }
`