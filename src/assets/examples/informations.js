import edm from '../images/edm.jfif'
import clm from '../images/clm.jfif'
import jeg from '../images/jeg.jpg'
import reactIcon from '../../logo.svg'
import elixirIcon from '../images/elixir.png'

const claudie = {
  name: 'Claudie Micat',
  description: null,
  link: 'https://github.com/claudie-micat',
  at: '@claudie-micat',
  img: clm
}

const edouard = {
  name: 'Edouard Menayde',
  description:
    'French computer science student who loves open-source and libre software community.',
  link: 'https://github.com/edouardmenayde',
  at: '@edouardmenayde',
  img: edm
}

const jerome = {
  name: 'Jey Puget Gil',
  description:
    "Étudiant·e en informatique à l’UCBL, j'aime travailler sur des projets d’Art, d'Accessibilité ou de Géomatique.",
  link: 'https://github.com/HemoreG',
  at: '@HemoreG',
  img: jeg
}

const reactRepo = {
  name: 'Repository React',
  description: "Demo d'utilisation de la librairie React.js.",
  link: 'https://github.com/HemoreG/react-demo',
  at: '@HemoreG/react-demo',
  img: reactIcon
}

const elixirRepo = {
  name: 'Repository Elixir',
  description: 'Repository de la websocket Elixir du projet react-demo.',
  link: 'https://github.com/edouardmenayde/ws-counter',
  at: '@edouardmenayde/ws-counter',
  img: elixirIcon
}

export default { claudie, edouard, jerome, reactRepo, elixirRepo }
