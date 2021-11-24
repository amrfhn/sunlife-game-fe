import "../scss/index.scss"
import "bootstrap";

import 'core-js';
import 'regenerator-runtime/runtime';

//components
import "./components/game";


$(function () {
    console.log('Document ready!')
})

if (module.hot) {
    module.hot.accept()
}