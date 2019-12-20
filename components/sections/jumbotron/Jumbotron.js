import React from 'react';
import style from 'styled-components';

import Button from '../../buttons/Button';
import Container from '../../Container';
import Content from '../../Content';

const JumbotronStyle = style.header`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
`

const JumbotronButtons = style.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem 0;

    a {
        display: inline-block;
        width: 25%;

        margin: 0 2rem;
    }

    button {
        padding: 1.5rem 0;
        width: 100%;
    }
`


const Jumbotron = () => {
    return (
        <Container variant={'secondary'}>
            <Content>
                <JumbotronStyle>
                    <div>
                        <div>
                            <h1>
                                Somos uma oficina de
                                <span> funilaria </span> e
                                <span> pintura </span> com mais de 15 anos no mercado.
                            </h1>
                            <p>Nosso foco é na qualidade e agilidade do serviço</p>
                        </div>

                        <JumbotronButtons>
                            <a href="#about">
                                <Button primary >Saiba mais</Button>
                            </a>
                            <a href="#services">
                                <Button primary >Conheça nossos serviços</Button>
                            </a>
                        </JumbotronButtons>
                    </div>
                </ JumbotronStyle>
            </Content>
        </ Container>
    );
};

export default Jumbotron;