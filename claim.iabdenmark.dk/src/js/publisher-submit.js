function ethSubmit() {

  if (!$("#adstxt").val()) {
    window.toastr["error"]("Please paste in your ads.txt file", "Error");
    return false;
  }
  else {

    window.toastr["info"]("Establishing connection to Ethereum", "Connecting..");

    var adstxt = $("#adstxt").val();
    var sender = $("#publisher-sender").val();
    
    var contract = new web3.eth.Contract(claimContract,
      "0xf12b5dd4ead5f743c6baa640b0216200e89b60da");

    var ssps = adstxt.split("\n");
    var messages = {};
    for(var i = 0; i < ssps.length; i++)
    {
      var ssp = ssps[i].split(", ");
      var sspDomain = ssp[0];
      var sspAddress = accounts[sspDomain];
      messages[sspDomain] = sspAddress;
    }
    for (var message in messages) {
      contract.methods.publisher_add_supply_side_partner(messages[message]).send({
        from: sender
      }).then(function(receipt) {
        console.log(receipt);
      });
    }

    setTimeout(function() {
      window.toastr.clear();
      setTimeout(function() {
        window.toastr['success']("Your updated Ads.txt has been sent to CLAIM on Ethereum", "Success");
      }, 500);
    }, 1200);
    
    return false;
  }
}

export { ethSubmit };