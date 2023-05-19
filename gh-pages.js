const execSync = require('child_process').execSync;

console.log('Iniciando o processo de implantação no GitHub Pages...');

// Compila o projeto React
execSync('npm run build', { stdio: 'inherit' });

// Move para o diretório "build"
process.chdir('build');

// Inicializa o repositório Git
execSync('git init');

// Adiciona todos os arquivos para o Git
execSync('git add .');

// Faz o commit das mudanças
execSync('git commit -m "Deploy no GitHub Pages"');

// Configura o repositório remoto
execSync('git remote add origin https://github.com/ivanildodev/me'); // Substitua "REPO_URL" pela URL do seu repositório

// Faz o push para a branch "gh-pages" do repositório remoto
execSync('git push -f origin HEAD:gh-pages');

console.log('Implantação concluída com sucesso!');
