import biographyKanye from "../Assets/biographykanyewest.png";
import historicalFactsApi from "../Assets/historicalfactsapi.png";
import dark from "../Assets/dark.png";
import list from "../Assets/listproject.png";
import post from "../Assets/projectpost.png";
import barbershop from "../Assets/barbershopproject.png";
import menu from "../Assets/projectmenu.png";
import cart from "../Assets/shoppingcartproject.png";

export const portfolioData = [
  {
    name: "Menu project",
    image: menu,
    title: "Technologies: React, Sass, useState, Responsive",
    text: "Project where a restaurant menu was created, allowing users to filter each menu item.",
    buildUrl: "https://projetorestaurantee.netlify.app/",
    gitUrl: "https://github.com/Renanluizssx/Projeto-React-Card-pio",
  },
  {
    name: "Dark Mode Project",
    image: dark,
    title: "Technologies: React, useState, Context API, Responsive",
    text: "Project implementing a dark mode, enabling users to toggle between light and dark mode.",
    buildUrl: "https://darkmodeagencia.netlify.app/",
    gitUrl: "https://github.com/Renanluizssx/React-Dark",
  },
  {
    name: "Shopping cart project",
    image: cart,
    title: "Technologies: Html, Css, Javascript, Spread, Localstorage",
    text: "Project of a shopping cart, where users can add, delete, or update products.",
    buildUrl: "https://renanluizssx.github.io/Project-Carrinho/",
    gitUrl: "https://github.com/Renanluizssx/Project-Carrinho/tree/main",
  },
  {
    name: "Blog project",
    image: post,
    title: "Technologies: Html, Css, Javascript, Spread, Localstorage",
    text: "Project of a blog website, allowing users to add, edit, or delete their posts.",
    buildUrl: "https://renanluizssx.github.io/Project-Post/",
    gitUrl: "https://github.com/Renanluizssx/Project-Post",
  },
  {
    name: "To do list project",
    image: list,
    title: "Technologies: Html, Css, Javascript, Spread, Localstorage",
    text: "Project creating a to-do list, enabling users to input and save their tasks.",
    buildUrl: "https://renanluizssx.github.io/projeto-lista/",
    gitUrl: "https://github.com/Renanluizssx/projeto-lista",
  },
  {
    name: "Barbershop Project",
    image: barbershop,
    title: "Technologies: Html, Css, Responsive",
    text: "Project copying a landing page from Figma and making it responsive.",
    buildUrl: "https://renanluizssx.github.io/Projeto-da-Barbearia/",
    gitUrl: "https://github.com/Renanluizssx/Projeto-da-Barbearia",
  },
];

export const mainPortfolioData = [
  {
    name: "Kanye West Project",
    image: biographyKanye,
    title:
      "Technologies: React, UI - Bootstrap, UX, Api, React-Router-Dom, mock, Responsive",
    text: "Personal project about a music artist's biography.",
    buildUrl: "https://biografiakanyewest.netlify.app/",
    gitUrl:
      "https://github.com/Renanluizssx/Projeto-Kanye-West/tree/main/myapp",
  },
  {
    name: "historical fact",
    image: historicalFactsApi,
    title: "Technologies: React, UI - Bootstrap, Api, Node, Express, Cors",
    text: "Project where users input a year between 1920 and 2020, and corresponding historical events are returned.",
    buildUrl: "https://apifatoshistoricos.netlify.app/",
    gitUrl: "https://github.com/Renanluizssx/Projeto-Fatos-Hist-ricos-React",
  },
];
