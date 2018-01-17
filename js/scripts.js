$(document).ready(function() {

  $("#vowelButton").click(function(event) {
    event.preventDefault();
    var newArray = []
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var sentence = $("#vowel").val().toString();
    letterArray = sentence.split("")
    for (i = 0; i <= vowels.length - 1; i++) {
      for (x = 0; x <= letterArray.length - 1; x++) {
        if (letterArray[x] !== vowels[i]) {
          newArray[x] = letterArray[x];
        } else if (letterArray[x] === vowels[i]) {
          newArray[x] = letterArray[x].replace(vowels[i], "_");
          letterArray[x] = newArray[x];
        }
      }
      var outPut = letterArray.join("");
      $("#result").html("<li>" + outPut + "</li>");
      $(".resultBox").fadeIn(900);
    };
  });
});
