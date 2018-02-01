toastr.options = {
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
  }

var allowSubmit = function () {

  validated = true;

  if(document.forms["publisher"]["domain"].value == "") {
    toastr["error"]("Please specify a domain", "Error");
    validated = false;
  }

  if(document.forms["publisher"]["adstxt"].value == "") {
    toastr["error"]("Please paste in your ads.txt file", "Error");
    validated = false;
  }

  if(!validated) {
    grecaptcha.reset();
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }

  return false;

}

var submitToClaim = function() {

  response = grecaptcha.getResponse();

  if(response.length !== "") {

    $.post("http://claim.iabdanmark.dk/:8545", {
      'publisher': document.forms["publisher"]["domain"].value,
      'adstxt': document.forms["publisher"]["adstxt"].value,
    }, function(result) {
      toastr["success"]("Your contract has been submitted to Ethereum", "Sucess");    
    });
  }
    
  return false;
}