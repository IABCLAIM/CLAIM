import toastr from 'toastr';
window.toastr = toastr;

import $ from 'jquery';
window.$ = $;

import web3 from 'web3';
window.web3 = web3;

import { toastrOptions, ethSubmit } from './submit.js';
window.toastr.options = toastrOptions;
window.ethSubmit = ethSubmit;
