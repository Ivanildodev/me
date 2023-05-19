import React from 'react';

const Skills = () => {
    const skills = ['Java', 'Reactjs', 'Angularjs', 'Vuejs', 'C#', '.Net', 'Sql Server', 'Postgres', 'Scrum', 'Kanbam'];

    return (
        <section className='skill'>
            <h2>Habilidades</h2>
            <div className='skills-container'>
                {skills.map((skill, index) => (
                    <span key={index} className='skill-tag'>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;