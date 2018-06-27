import 'jquery';
import 'metismenu';
import 'bootstrap';

import 'url-search-params-polyfill';
import './../node_modules/font-awesome/css/font-awesome.css';
// app theme
import './assets/styles/app.scss';
// importAll(require.context('./commons', true, /\.scss$/));
// importAll(require.context('./containers', true, /\.scss$/));
importAll(require.context('./assets/theme', true, /\.css$/));
// importAll(require.context('./assets/theme', true, /\.js$/));
import './assets/theme/js/core/app';

function importAll (r) {
  r.keys().forEach(r);
}
