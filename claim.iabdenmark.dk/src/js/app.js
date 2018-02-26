import toastr from 'toastr';
window.toastr = toastr;

import jquery from 'jquery';
window.jquery = jquery;

import web3 from 'web3';
window.web3 = web3;

import { toastrOptions, allowSubmit, submitToClaim} from './submit.js';

window.toastr.options = toastrOptions;
window.allowSubmit = allowSubmit;
//window.submitToClaim = submitToClaim;