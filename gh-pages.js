const execSync = require('child_process').execSync;

console.log('Iniciando o processo de implantação no GitHub Pages...');

// Compila o projeto React
execSync('npm run build', { stdio: 'inherit' });

// Cria uma nova branch chamada "gh-pages"
execSync('git checkout -b gh-pages');

// Remove os arquivos existentes na branch "gh-pages"
execSync('git rm -rf .');

// Move os arquivos da pasta "build" para o diretório raiz da branch "gh-pages"
execSync('mv build/* .');

// Faz o commit das mudanças
execSync('git add .');
execSync('git commit -m "Deploy no GitHub Pages"');

console.log('Implantação concluída com sucesso!');

