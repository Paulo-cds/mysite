import * as S from '../styles/StyleJob'
import {useState} from 'react'
import barberShop from '../images/barber-shop.png'
import trequinhos from '../images/trequinhos.png'
import questions from '../images/questions.png'
import superTrunfo from '../images/trunfoheros.png'
import trailerFlix from '../images/trailer-flix.png'
import mario from '../images/mario-seven.png'
import Card from '../components/Card'


const Jobs = () => {
   
    const [trequinhosDisplay, setTrequinhosDisplay] = useState('none')
    const [barberDisplay, setBarberDisplay] = useState('none')
    const [questionDisplay,setQuestionDisplay] = useState('none')
    const [trunfoDisplay,setTrunfoDisplay] = useState('none')
    const [trailerDisplay,setTrailerDisplay] = useState('none')
    const [marioDisplay,setMarioDisplay] = useState('none')

    
    
    
    return(
        <>
            <S.titulo>Portifólio</S.titulo>

            

            <S.container>

                <Card
                    image={trequinhos}
                    altImg='trequinhos'
                    web='https://trequinhos.vercel.app/'
                    git='https://github.com/Paulo-cds/trequinhos-conexao-api'
                    display={trequinhosDisplay}
                    setDisplay={setTrequinhosDisplay}
                    title='Projeto Full-Stack.'
                    text='Back-End construido em NodeJS rodando em Heroku, banco de dados
                     MongoDB Atlas. Esse projeto contém login de administrador para adicionar, editar e/ou excluir produtos, utilizando local storage.'
                />


                <Card
                    image={barberShop}
                    altImg='Barber-shop'
                    web='https://barber-shop-five.vercel.app/'
                    git='https://github.com/Paulo-cds/barber-shop-react'
                    display={barberDisplay}
                    setDisplay={setBarberDisplay}
                    title='Projeto construido com ReactJs.'
                    text='Esse projeto faz parte do conteúdo do curso Formação Full Stack Javascript,
                    inicialmente durante o curso feito com HTML, CSS e JavaScript, depois refiz 
                    utilizando React e Styled Components.'
                />

                <Card
                    image={questions}
                    altImg='Questions'
                    web='https://gupy.vercel.app/'
                    git='https://github.com/Paulo-cds/gupy'
                    display={questionDisplay}
                    setDisplay={setQuestionDisplay}
                    title='Projeto Front-end ReactJs.'
                    text='Esse projeto consome API de perguntas, na página inicial o usuário seleciona
                    a quantidade de perguntas que deseja responder, que é passado via context api e consulta API
                    para gerar as perguntas e respostas. O resultado é guardado no local storage onde é possível consultar o resultado anterior 
                    numa próxima consulta. Também construido utilizando Material-Ui'
                />

                <Card
                    image={superTrunfo}
                    altImg='Super Trunfo'
                    web='https://trunfoheros.vercel.app/'
                    git='https://github.com/Paulo-cds/trunfoHeros'
                    display={trunfoDisplay}
                    setDisplay={setTrunfoDisplay}
                    title='Projeto Front-end ReactJs com Materail-Ui'
                    text='Projeto consome API de super heróis, onde o usuário seleciona o números de rounds desejado
                    e após é consultada a api onde sorteia as cartas para o jogador e para máquina e compara os atributos de cada,
                    ao final é demonstrado que venceu ou se empatou o jogo.'
                />

                <Card
                    image={trailerFlix}
                    altImg='trailerFlix'
                    web='https://trailer-flix-pi.vercel.app/'
                    git='https://github.com/Paulo-cds/trailerFlix'
                    display={trailerDisplay}
                    setDisplay={setTrailerDisplay}
                    title='Projeto Front-end'
                    text='Utilizando HTML, CSS(SASS) e JavaScript, reprodução do layout da Netflix,
                    onde é possível assistir o trailer da série ou filme selecionado linkado com
                    o youtube.'
                />

                <Card
                    image={mario}
                    altImg='Mario'
                    web='https://mario-seven.vercel.app/'
                    git='https://github.com/Paulo-cds/dino'
                    display={marioDisplay}
                    setDisplay={setMarioDisplay}
                    title='Projeto Front-end'
                    text='Utilizando HTML, CSS(SASS) e JavaScript, reprodução do jogo do dinossauro sem internet
                    modificado para o jogo do Mario Bros.'
                />
                
            </S.container>
        </>
    )
}


export default Jobs