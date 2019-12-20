import React from 'react';
import Button from '../../buttons/Button';

const Jumbotron = () => {
    return (
        <header>
            <div id="start-banner">
                <div id="banner-info">
                    <div>
                        <h1>
                            Somos uma oficina de
                        <span> funilaria </span> e
                        <span> pintura </span> com mais de 15 anos no mercado.
                    </h1>
                        <p>Nosso foco é na qualidade e agilidade do serviço</p>
                    </div>
                    <a href="#about">
                        <Button primary >Saiba mais</Button>
                    </a>
                </div>
            </div>
        </ header>
    );
};

export default Jumbotron;