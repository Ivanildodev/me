import React from 'react';

const Experiences = () => {
    return (
        <section className='experience-card'>
            <h2>Experiência Profissional</h2>
            <ul className='experience-list'>
                <li>
                    <h3>Ok Desenvolvimento De Software</h3>
                    <p>2018-2021</p>
                    <p>Descrição das responsabilidades e conquistas</p>
                </li>
                <li>
                    <h3>Universidade Federal da Grande Dourados - UFGD</h3>
                    <p>2021-2022</p>
                    <p>Descrição das responsabilidades e conquistas</p>
                </li>
                <li>
                    <h3>Serviço Nacional de Aprendizagem Comercial - SENAC</h3>
                    <p>2022-Atual</p>
                    <p>Descrição das responsabilidades e conquistas</p>
                </li>
            </ul>
        </section>
    );
};

export default Experiences;