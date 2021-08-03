import * as S from '../styles/StyleHome'
import Typing from 'react-typing-animation'
import { makeStyles} from '@material-ui/core/styles'
import {useState} from 'react'
import Html from '../images/html-5.png'
import Css from '../images/css.png'
import Javascript from '../images/javascript.png'
import React from '../images/react.png'
import Git from '../images/Git.png'

import {Flip} from 'animate-css-styled-components'

const useStyles = makeStyles(() => ({  
  root: {
    
    maxHeight: '0vh',
    
  },
}));


const Home = () => { 
  const classes = useStyles();
  let [skills, setSkills] = useState('none')

  const skillsLoad = setTimeout(() => {
    setSkills('grid');     
  }, 3000);

  window.onload = {skillsLoad}
    return(
      <>
      
      <S.divTitle>
        <S.textPrincipal>    
          <S.titulo>
            <Typing>
            Desenvolvedor Front-end Júnior
            </Typing>
          </S.titulo>          
        </S.textPrincipal>
      </S.divTitle>
      

      <S.skills style={{display: skills}} >
        <S.title>Skills</S.title>
        <Flip duration = '1.3s'>
          <S.logos>
            <S.icons src={Html} alt='HTML'/>
            <S.icons src={Css} alt='CSS'/>
            <S.icons src={Javascript} alt='Javascript'/>
            <S.icons src={React} alt='React'/>
            <S.icons style={{backgroundColor: 'white'}} src={Git} alt='Git'/>
          </S.logos>
        </Flip>
      </S.skills>

      </>
    )

}


export default Home