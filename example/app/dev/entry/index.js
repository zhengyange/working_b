import '../js/main.scss';
import $ from '../../../../node_modules/zepto/zepto.min.js';

import generateText from '../js/sub';
let app  = document.createElement('div');
app.innerHTML = '<h1>Hello World,自动刷新？？？'+metadata.host+'</h1>';
app.appendChild(generateText());
document.body.appendChild(app);
$('body').append('<p>look at me! no </p>');

console.log(metadata)