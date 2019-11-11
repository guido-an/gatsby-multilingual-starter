const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/next-page',
    component: path.resolve(`src/pages/page-2.js`)
  },
  {
    path: '/pagina-successiva',
    component: path.resolve(`src/pages/page-2.js`)
  },
];