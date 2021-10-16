import * as S from './StyleCard'
import adicionar from '../images/adicionar.png'
import site from '../images/site.png'
import githubLink from '../images/githubLink.png'
import { useState } from 'react'

const Card = ({
    image,
    altImg,
    web,
    git,
    display,
    setDisplay,
    title,
    text
}) => {

    const [heightCard, setHeightCard] = useState('20rem')

    const handleDisplay = () => {
        display === 'none' 
        ? setDisplay('block') 
        : setDisplay('none') 

        heightCard === '20rem'
        ? setHeightCard('30rem')
        : setHeightCard('20rem')
    }

    return(
        <S.post style={{height: heightCard}}>
                    <S.image src={image} alt={altImg}/>
                    <S.divDescrip>
                        <S.divLinks>
                            <S.displayDescrip  onClick={handleDisplay}  >
                                <S.adiciona src={adicionar} />
                            </S.displayDescrip>

                            <a href={web} target='blank'> <S.links src={site}/></a>
                            <a href={git} target='blank'><S.links src = {githubLink}/></a>
                            
                        </S.divLinks>
                        <S.description style={{display:display}} >

                           {title} <br/><br/>
                           {text}
                        </S.description>
                    </S.divDescrip>
                </S.post>
    )
}

export default Card
