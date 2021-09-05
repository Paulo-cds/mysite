import * as S from '../styles/StyleAbout'


const About = () => {
    return(
        <>
            

            <S.container>
                <S.itemsContainer>

                <S.frase>
                    "Seja você quem for, seja qual for a posição social que você tenha na vida, 
                    a mais alta ou a mais baixa, tenha sempre como meta muita força, 
                    muita determinação e sempre faça tudo com muito amor e com muita fé em Deus, 
                    que um dia você chega lá. De alguma maneira você chega lá."
                    <br/>
                    <p style={{fontSize: '.8rem', textAlign:'right'}}>Ayrton Senna</p>
                </S.frase>
                <S.text>
                    Meu nome é Paulo, e é com essa frase acima que acordo todos os dias e hoje busco
                    me inserir na área da programação web.
                </S.text>
                <S.text>
                    Sempre fui um apaixonado por tecnologia, desde criança brincando
                    com ataris, video-games, muito curioso em saber como cada aparelho funcionava, fascinado
                    pelo mundo da internet. 
                </S.text>
                <S.text>
                    Quando comecei a aprender que a partir de uma tela preta era possível criar o mundo da internet 
                    e com isso mudar o mundo das pessoas fiquei ainda mais maravilhado com esse universo.
                    Hoje busco minha oportunidade de iniciar na área e poder ajudar a mudar a vida das pessoas e das coisas,
                    e ao mesmo tempo adquirir mais e mais conhecimento que com certeza irá fazer toda a diferença 
                    para chegar a tão sonhada senioridade na programação web.
                </S.text>
                </S.itemsContainer>

                <S.itemsContainer>

                <S.card style={{width:'90%'}} src='https://github-readme-stats.vercel.app/api?username=Paulo-cds&show_icons=true&theme=gotham)' />
                <S.card src='https://github-readme-stats.vercel.app/api/top-langs/?username=Paulo-cds&exclude_repo=github-readme-stats,Paulo-cds.github.io'/>
                </S.itemsContainer>

            </S.container>
        </>
    )
}


export default About