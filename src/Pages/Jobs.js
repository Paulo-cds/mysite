import * as S from '../styles/StyleJob'
import {useState} from 'react'
import barberShop from '../images/barber-shop.png'
import trequinhos from '../images/trequinhos.png'
import lua from '../images/lua.png'
import site from '../images/site.png'
import superTrunfo from '../images/super-trunfo.png'
import githubLink from '../images/githubLink.png'


const Jobs = () => {
   

    
    return(
        <>
            <S.titulo>Portifólio</S.titulo>

            <S.container>
                <S.post>
                    <S.image src={trequinhos} alt={'trequinhos'}/>
                    <S.divDescrip>
                        <S.divLinks>
                            
                            <a href='https://trequinhos.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/trequinhos-conexao-api' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={barberShop} alt={'Barber-shop'} />
                    <S.divDescrip>
                        <S.divLinks>
                            
                            <a href='https://barber-shop-five.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/barber-shop-react' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={lua} alt={'Lua 2'} />
                    <S.divDescrip>
                        <S.divLinks>
                            
                            <a href='https://lua-eight.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/lua' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </S.description>
                    </S.divDescrip>
                </S.post>

                <S.post>
                    <S.image src={superTrunfo} alt={'Super Trunfo'} style={{objectFit: 'cover',
                    objectPosition: 'center'}}/>
                    <S.divDescrip>
                        <S.divLinks>
                            
                            <a href='https://super-trunfo-tau.vercel.app/' target='blank'> <S.links src={site}/></a>
                            <a href='https://github.com/Paulo-cds/lua' target='blank'><S.links src = {githubLink}/></a>
                        </S.divLinks>
                        <S.description >
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </S.description>
                    </S.divDescrip>
                </S.post>
            </S.container>
        </>
    )
}


export default Jobs