import GLOBAL from "./modules/global";
import HOME from "./modules/HOME";

document.body.className += ('ontouchstart' in window) ? 'touch' : 'no-touch';

let init = function(){},
    load = function(){},
    scroll = function(){};

if(global.vars !== undefined) {
    switch (global.vars.page) {
        case 'home_page':
            init = HOME.init.bind(HOME);
            break;
    }
}

$(document).ready(GLOBAL.init(), init());

// $(window).scroll(GLOBAL.scroll);
//
// $(window).resize(GLOBAL.resize);
//
// $(window).on('load', ()=>{
//     GLOBAL.load();
//     load();
// });