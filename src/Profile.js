import React from 'react';
import picture from './assets/picture.jpg';

const Profile = () => {
  return (
    <section>
      <div className="profile">
        <img
          src={picture}
          alt="Foto de perfil"
        />
        <h2>Ivanildo Fernandes</h2>
        <p>
          Olá! Sou Ivanildo, um desenvolvedor de software com mais de 5 anos de
          experiência em tecnologias como Java, Javascript, React JS, React Native,
          Vue JS, .NET, C#, Angular e metodologias ágeis. Meu foco é oferecer
          suporte eficaz à equipe, valorizando a comunicação clara e a colaboração
          em todas as etapas do desenvolvimento. Cada projeto é uma oportunidade de
          aprendizado e crescimento, e estou sempre pronto para enfrentar novos
          desafios. Se busca um profissional comprometido, atualizado e
          colaborativo, estou disponível para discutir como posso contribuir para o
          sucesso da sua equipe.
        </p>
      </div>
    </section>
  );
};

export default Profile;
