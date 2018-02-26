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

function allowSubmit() {

  window.validated = true;

  if(document.forms["publisher"]["domain"].value == "") {
    window.toastr["error"]("Please specify a domain", "Error");
    window.validated = false;
  }

  if(document.forms["publisher"]["adstxt"].value == "") {
    window.toastr["error"]("Please paste in your ads.txt file", "Error");
    window.validated = false;
  }

  if(!window.validated) {
    grecaptcha.reset();
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }

  return false;

}

export { toastrOptions, allowSubmit, submitToClaim};