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

function ethSubmit() {

  if (!$("#adstxt").val()) {
    window.toastr["error"]("Please paste in your ads.txt file", "Error");
    return false;
  }
  else {
    window.toastr["info"]("Establishing connection to Ethereum", "Connecting..");

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

    contract.methods.publisher_add_supply_side_partner('0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5').send({from: '0x627306090abab3a6e1400e9345bc60c78a8bef57'}).then(function(receipt){
      console.log(receipt);
  });

    setTimeout(function() {
      window.toastr.clear();
      setTimeout(function() {
        window.toastr['success']("Your updated Ads.txt has been sent to CLAIM on Ethereum", "Success");
      }, 500);
    }, 1200);
    
    return false;
  }
}

export { toastrOptions, ethSubmit };