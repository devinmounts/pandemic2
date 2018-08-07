import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { map } from './map.js';
import { GetInfo, GetLatLong } from './map.js';

$(document).ready(function() {
    // setTimeout(function() {
      GetInfo();
    // }, 1000);

});
