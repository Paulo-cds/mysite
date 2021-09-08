import * as S from '../styles/StyleJob'
import {useState} from 'react'
import barberShop from '../images/barber-shop.png'
import trequinhos from '../images/trequinhos.png'
import questions from '../images/questions.png'
import site from '../images/site.png'
import superTrunfo from '../images/trunfoheros.png'
import githubLink from '../images/githubLink.png'
import adicionar from '../images/adicionar.png'


const Jobs = () => {
   
    const [trequinhosDisplay, setTrequinhosDisplay] = useState('none')
    const [barberDisplay, setBarberDisplay] = useState('none')
    const [questionDisplay,setQuestionDisplay] = useState('none')
    const [trunfoDisplay,setTrunfoDisplay] = useState('none')

    
    
    
    return(
        <>
            <S.titulo>Portifólio</S.titulo>

            <S.container>
                <S.post>
                    <S.image src={trequinhos} alt={'trequinhos'}/>
                    <S.divDescrip>
                        <S.divLinks>
                            <S.displayDescrip onClick={() => {trequinhosDisplay === 'none' 
                            ? setTrequinhosDisplay('block') 
                            : setTrequinhosDisplay('none') }} >
                                <S.adiciona src={adicionar} />
                            </S.displayDescrip>

                            <a href='https://trequinhos.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/trequinhos-conexao-api' target='blank'><S.links src = {githubLink}/></a>
                            
                        </S.divLinks>
                        <S.description style={{display:trequinhosDisplay}}>

                           Projeto Full-Stack. <br/><br/>
                           Back-End construido em NodeJS rodando em Heroku, banco de dados
                            MongoDB Atlas. <br/>
                                Esse projeto contém login de administrador para adicionar, editar e/ou excluir
                                produtos, utilizando local storage.
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={barberShop} alt={'Barber-shop'} />
                    <S.divDescrip>
                        <S.divLinks>
                            <S.displayDescrip onClick={() => {barberDisplay === 'none' 
                            ? setBarberDisplay('block') 
                            : setBarberDisplay('none') }} label={'Descrição'}>
                                <S.adiciona  src={adicionar} />
                            </S.displayDescrip>
                            
                            <a href='https://barber-shop-five.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/barber-shop-react' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description style={{display:barberDisplay}}>
                            Projeto construido com ReactJs. <br/><br/>
                             Esse projeto faz parte do conteúdo do curso Formação Full Stack Javascript,
                            inicialmente durante o curso feito com HTML, CSS e JavaScript, depois refiz 
                            utilizando React e Styled Components.
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={questions} alt={'Questions'} />
                    <S.divDescrip>
                        <S.divLinks>
                            <S.displayDescrip onClick={() => {questionDisplay === 'none' 
                            ? setQuestionDisplay('block') 
                            : setQuestionDisplay('none') }} label={'Descrição'}>
                                <S.adiciona  src={adicionar} />
                            </S.displayDescrip>
                            
                            <a href='https://gupy.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/gupy' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description style={{display:questionDisplay}}>
                            Projeto Front-end ReactJs. <br/><br/>
                            Esse projeto consome API de perguntas, na página inicial o usuário seleciona
                            a quantidade de perguntas que deseja responder, que é passado via context api e consulta API
                            para gerar as perguntas e respostas. O resultado é guardado no local storage onde é possível consultar o resultado anterior 
                            numa próxima consulta. Também construido utilizando Material-Ui
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={superTrunfo} alt={'Super Trunfo'} style={{objectFit: 'cover',
                    objectPosition: 'center'}}/>
                    <S.divDescrip>
                        <S.divLinks>
                            <S.displayDescrip onClick={() => {trunfoDisplay === 'none' 
                            ? setTrunfoDisplay('block') 
                            : setTrunfoDisplay('none') }} label={'Descrição'}>
                                <S.adiciona  src={adicionar} />
                            </S.displayDescrip>
                            
                            <a href='https://trunfoheros.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/trunfoHeros' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description style={{display:trunfoDisplay}}>
                            Projeto Front-end ReactJs com Materail-Ui <br/><br/>
                            Projeto consome API de super heróis, onde o usuário seleciona o números de rounds desejado
                            e após é consultada a api onde sorteia as cartas para o jogador e para máquina e compara os atributos de cada,
                            ao final é demonstrado que venceu ou se empatou o jogo.
                        </S.description>
                    </S.divDescrip>
                </S.post>
            </S.container>
        </>
    )
}


export default Jobs