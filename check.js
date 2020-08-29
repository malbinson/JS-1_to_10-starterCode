document.getElementById("check").addEventListener("click",check);

function check() {

  var errorMessage="You have an error.  Make sure all of your functions are named correctly and work in the test environment";
  var goodMessage="You did it!  Share this back with Albinson and continue to 11-20";

  if(    
    sleep_in(0,1) &&
    monkey_trouble(0,0) &&
    string_times("hi",2) == "hihi" &&
    front_times("brother",2) == "brobro" &&
    string_bits("brothers") == "bohr" &&
    caughtSpeeding(60,0) == 0 &&
    fizzBuzz(15) == "FizzBuzz" &&
    teaParty(6,8) == 1 &&
    blackJack(19,21) == 21 &&
    loneSum(1,2,3) == 6  
  ) {
    document.getElementById("output").innerHTML = goodMessage;
  } else {
    document.getElementById("output").innerHTML = errorMessage;
  }



}

