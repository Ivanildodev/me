import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meu Portfólio</h1>
      </header>
      <main>
        <section>
          <div className="profile">
            <img src="https://lh3.googleusercontent.com/pw/AJFCJaXTLoH8Cy-jk8blXpCxEjgG5f408eJxEfodBJP-_X5cHlSb-1U6Ili4UrHm2bjYCR5I7G5cjohlhfaHvSjqxlcISTy8A3bXIj0S837WgdC82sTSA9FhF1jXW1p3ujsGe5k9rI-eNqXEtpaCukIqxTE41Oc0SOfOc7FrprdPB4s2uzBf9b7_yYIuBx2ZfrbHvQMR3VBegNCfV03UGsPdVutJMgl0FdHCIOfZ6x0XFNsND_xT_s4jFzw48stSSOxXWuuF-NqKL7BeNrYTIRibAYeTdeZm-69HOkbP3Hr_j24XpKC5j405QWIxi8zGhD3FOspp9CZWgMRp3C33Gu2ARmvZbCkywLvdpUkG65Q2YO9zdvHA8_psHaUht_uikcqsIhmNpisMT8mAh8q91FwZs3P-aLSWtwbzzVGWTM-4-8h0erhMuAVJ7R72foYhKZldJGC2W1qGRmKVa3AelDAim1ANHtj_HzSHLcUc7U9OMHmCNQ-6bmmRtP32y6zvVZydbdIKqdm4kbeKYxLBv07dxtqkbqgj0CuLws19smang1l1aGv0tqBr5P5Tm_r2psl4n3WJS1qzWftCAEb6aplHGn8WXGhNGTxNKqP4qErKUBY5ul5QlcugqLOdxlHRMzljIxe9QW2jwcbmi47V_PO-MfkOiUaiE37qT7d3eTjG31mguxvw9WykCf3vXTD27DmNFalh5QZiJ2YadekyQyVa2eUchGushXKeS2nD5mBDkdwe46wDI79m0HvuLMY-X5Reez12naiae46sFNVXrcst31neSqJ2gQIMfglrkoMpa9dES2F2Ue2I31eG76ioBMTytrIUfftcJaDBK9mHWZnXrOOgGUj5tf1Q1LflmbZHPlAspB2mpTQV_198mc_j-p62Ntq87s1rVqXGpVWTdBy3NyK15QXhS1uWK4f1ef2ip6cNg2IUyXuoHgSB53sY=w315-h560-s-no?authuser=0" alt="Foto de perfil" />
            <h2>Ivanildo Fernandes</h2>
            <p>Descrição do perfil</p>
          </div>
        </section>
        <section className='project-card'>
          <h2>Projetos</h2>
          <ul className='project-list'>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
          </ul>
        </section>
        <section className='experience-card'>
          <h2>Experiência Profissional</h2>
          <ul className='experience-list'>
            <li>
              <h3>Nome da Empresa</h3>
              <p>Período de trabalho</p>
              <p>Descrição das responsabilidades e conquistas</p>
            </li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </section>
        <section className='education-card'>
          <h2>Educação</h2>
          <ul className='education-list'>
            <li>
              <h3>Instituição de Ensino</h3>
              <p>Curso / Graduação</p>
              <p>Ano de conclusão</p>
            </li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </section>
        <section className='skill'>
          <h2>Habilidades</h2>
          <ul className='skills-list'>
            <li>Habilidade 1</li>
            <li>Habilidade 2</li>
            <li>Habilidade 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Meu Portfólio</p>
      </footer>
    </div>
  );
}

export default App;
