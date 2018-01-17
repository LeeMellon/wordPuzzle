$(document).ready(function(){


  $("#vowelButton").click(function(event){
    event.preventDefault();
    var newArray =[]
    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $("#vowel").val().toString();
    letterArray = sentence.split("")
    console.log(letterArray);
    for (i = 0; i <= vowels.length-1; i++){
        for(x = 0; x <= letterArray.length -1; x++){
            console.log(letterArray[x]);
            if (letterArray[x] !== vowels[i]){
              newArray[x] = letterArray[x];
            }
          else if (letterArray[x] === vowels[i]){
              newArray[x] = letterArray[x].replace(vowels[i], "_");
              letterArray[x] = newArray[x];
              console.log(letterArray, vowels[i]);
          }

        }
    };

    console.log(letterArray, newArray);
  });
    // vowels.forEach(function(vowel){
    //   if(vowel === sentence[i]){
    //     sentence[i] = "_";
    //     newSentence.push(sentence[i]);
    //     console.log("#1", i, sentence[i])
    //   } else {
    //     newSentence.push(sentence[i]);
    //     console.log("#2", i, "nope");
    //   }
    // })







//     words = sentence.split(" ");
//     words.forEach(function(word){
//       var letters = word.split("");
//       vowels.forEach(function(vowel){
//         letters.forEach(function(letter){
//           if (letter !== vowel){
//             return letter;
//           }
//           else if (letter === vowel){
//             letter = "_";
//           }
//           console.log(letter);
//         })
//
//   });
// });
});
// });
