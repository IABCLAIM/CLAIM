# CLAIM - Common Ledger of Authenticated Identities for Marketing

## Prerequistes

Run `gulp` and also `webpack`

var account_one = "0x627306090abab3a6e1400e9345bc60c78a8bef57";
var account_two = "0xf17f52151ebef6c7334fad080c5704d77216b732";

## To run a local ETH blockchain
Run `claim.iabdenmark.dk/ClaimTxt/truffle develop` and then `truffle migrate --reset`



web3 = new window.web3('http://claim.iabdanmark.dk:9545');
web3.eth.defaultAccount = "0x627306090abab3a6e1400e9345bc60c78a8bef57";
var contract = new web3.eth.Contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "ssp",
          "type": "address"
        }
      ],
      "name": "publisher_add_supply_side_partner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ssp",
          "type": "address"
        }
      ],
      "name": "publisher_delete_supply_side_partner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "publisher",
          "type": "address"
        }
      ],
      "name": "ssp_approve_publisher",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "publisher",
          "type": "address"
        }
      ],
      "name": "ssp_delete_publisher",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ], "0xf12b5dd4ead5f743c6baa640b0216200e89b60da");


contract.methods.publisher_add_supply_side_partner("0x2191ef87e392377ec08e7c08eb105ef5448eced5").call({from: web3.eth.defaultAccount},function(error, result) {
    console.log(error);
    console.log(result);
});


## Then..
var meta;

Claim.deployed().then(function(instance) { meta = instance; return meta.publisher_add_supply_side_partner(account_two, {from: account_one}); }).then(function(result) { console.log(result); alert("Transaction successful!") }).catch(function(e) { console.log(e); });


Claim.deployed().then(function(instance) { console.log(instance.whitelist); });