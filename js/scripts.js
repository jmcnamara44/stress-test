var health = [];
var warningSign = [];
var stressRelief = [];

$(document).ready(function() {
  $("form#stressTest").submit(function(event) {
  event.preventDefault();



  $("input:checkbox[name=warning]:checked").each(function() {
    warningSign.push( $(this).val());
  });

  $("input:checkbox[name=health]:checked").each(function() {
    health.push( $(this).val());
  });

  $("input:checkbox[name=relief]:checked").each(function() {
    stressRelief.push( $(this).val());
  });

  if (warning.length !== 0 || health.length !== 0 || stressRelief.length !== 0){
    if (warningSign.length >= 3) {
      $("form#stressTest").hide();
      $("#warning").show();
    } else if (health.length >= 4) {
      $("form#stressTest").hide();
      $("#danger").show();
    } else {
      $("form#stressTest").hide();
      $("#healthy").show();
      $("#healthy").append("<li>You don't need to change your lifestyle</li>")
    }
  } else {
    alert("Please answer all of the questions");
  }

  });
});
