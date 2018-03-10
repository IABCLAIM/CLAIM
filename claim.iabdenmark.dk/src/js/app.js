import toastr from 'toastr';
window.toastr = toastr;

import $ from 'jquery';
window.$ = $;

import web3 from 'web3';
window.web3 = web3;

const accounts = {
  "Ekstra Bladet": "0x627306090abab3a6e1400e9345bc60c78a8bef57",
  "Berlingske": "0xf17f52151ebef6c7334fad080c5704d77216b732",
  "Politiken": "0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef",
  "Alt.dk": "0x821aea9a577a9b44299b9c15c88cf3087f3b5544",
  "google.com": "0x0d1d4e623d10f9fba5db95830f7d3839406c6af2",
  "pubmatic.com": "0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e",
  "appnexus.com": "0x2191ef87e392377ec08e7c08eb105ef5448eced5",
  "fyber.com": "0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5",
  "freewheel.tv": "0x6330a553fc93768f612722bb8c2ec78ac90b3bbc",
  "adform.com": "0x5aeda56215b167893e80b4fe645ba6d5bab767de"
};

const claimContract = [{
        "constant": false,
        "inputs": [{
            "name": "ssp",
            "type": "address"
        }],
        "name": "publisher_add_supply_side_partner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "ssp",
            "type": "address"
        }],
        "name": "publisher_delete_supply_side_partner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "publisher",
            "type": "address"
        }],
        "name": "ssp_approve_publisher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "publisher",
            "type": "address"
        }],
        "name": "ssp_delete_publisher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const toastrOptions = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

import { ethSubmit } from './publisher-submit.js';
window.toastr.options = toastrOptions;
window.claimContract = claimContract;
window.accounts = accounts;
window.ethSubmit = ethSubmit;

document.addEventListener("DOMContentLoaded",function(){
    $("#submit").submit(function(e){
        e.preventDefault();
        ethSubmit();
    });
});
