import biografiaKanye from "../Assets/biografiakanyewest.png";
import apiFatosHistoricos from "../Assets/apifatoshistoricos.png";
import dark from "../Assets/dark.png";
import lista from "../Assets/projetolista.png";
import Post from "../Assets/ProjetoPost.png";
import barbearia from "../Assets/projetobarbearia.png";
import sorveteria from "../Assets/sorveteria.png";
import barbshop from "../Assets/barbeariamodedark.png";
export const dadosPortfolio = [
  {
    nome: "projeto kanye west",
    imagem: biografiaKanye,
    titulo:
      "Tecnologias: React, UI - Bootstrap, UX, Api, Rotas e Dados Mocados",
    texto:
      "Projeto pessoal que fiz sobre uma biografia de um artista da música. Utilizei bootstrap como formatação css para deixar responsivo, utilize uma api e rotas para navegação entre as páginas",
    urlBuild: "https://biografiakanyewest.netlify.app/",
    urlGit:
      "https://github.com/Renanluizssx/Projeto-Kanye-West/tree/main/myapp",
  },
  {
    nome: "projeto node",
    imagem: apiFatosHistoricos,
    titulo: "Tecnologias: React, UI - Bootstrap, Api, Node, Express, Cors",
    texto:
      "projeto que criei utilizando uma api de fatos históricos em que o usuário seleciona cada ano entre 1920 e 2020. Essa api foi criada pelo node e hospedei no render. ",
    urlBuild: "https://apifatoshistoricos.netlify.app/",
    urlGit: "https://github.com/Renanluizssx/Projeto-Fatos-Hist-ricos-React",
  },
  {
    nome: "projeto sorveteria",
    imagem: sorveteria,
    titulo: "Tecnologias: React, Rotas e responsivo",
    texto:
      "Projeto onde criei um site de sorveteria responsivo, o principal do projeto foi a utilização de rotas com react-router-dom",
    urlBuild: "https://sorveteriaartesanal.netlify.app/",
    urlGit: "https://github.com/Renanluizssx/Projeto-Sorveteria-React",
  },
  {
    nome: "projeto dark",
    imagem: dark,
    titulo: "Tecnologias: React, sass, responsivo",
    texto:
      "Projeto onde criei um dark mode onde o usuário clica no botão acima que ele trocará entre modo claro e escuro. O principal sobre este projeto foi a passagem de dados entre componentes via props",
    urlBuild: "https://darkmodeagencia.netlify.app/",
    urlGit: "https://github.com/Renanluizssx/React-Dark",
  },
  {
    nome: "projeto barbshop",
    imagem: barbshop,
    titulo: "Tecnologias: React, responsivo",
    texto:
      "Projeto onde criei uma página inicial de uma barbearia. A principal utilização desse projeto foi o useState para trocar entre modo-escuro e modo-claro",
    urlBuild: "https://barbeariamodedark.netlify.app/",
    urlGit: "https://github.com/Renanluizssx/Projeto-Barbearia-React",
  },
  {
    nome: "projeto crud post",
    imagem: Post,
    titulo: "Tecnologias: html, css, javascript e localstorage",
    texto:
      "Projeto onde fiz um crud, em que o usuário pode adicionar, editar, excluir ou atualizar o seu post. O principal do projeto foi crud com localstorage e utilização do operador spread",
    urlBuild: "https://renanluizssx.github.io/Project-Post/",
    urlGit: "https://github.com/Renanluizssx/Project-Post/tree/developer",
  },
  {
    nome: "projeto lista",
    imagem: lista,
    titulo: "Tecnologias: Html, Css, Javascript e localstorage",
    texto:
      "Projeto onde criei uma lista de tarefas, em que o usuário digita e ele salva no banco de dados do navegador utilizando localstorage e operador spread.",
    urlBuild: "https://renanluizssx.github.io/projeto-lista/",
    urlGit: "https://github.com/Renanluizssx/projeto-lista",
  },
  {
    nome: "projeto barbshop",
    imagem: barbearia,
    titulo: "tecnologias: html, css, responsividade",
    texto:
      "projeto onde copiei essa landing page do figma, landing page responsivo com media queries. Utilizei display flex e media queries para poder criar um design responsivo",
    urlBuild: "https://renanluizssx.github.io/Projeto-da-Barbearia/",
    urlGit: "https://github.com/Renanluizssx/Projeto-da-Barbearia",
  },
];
