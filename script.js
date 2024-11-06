id="subscribeButton"

var subscribeButton = "Subscribe";

console.log(subscribeButton === "Subscribe");

$('#subscribeButton').click(function() { 
    var clickedId = this.id; 
    checkAnswer(clickedId, 'subscribeButton');
  });
  
  function checkAnswer(clickedId, correctId) {
    if (clickedId === correctId) {
      alert("Thank you for subscribing!");
    } 
  }
  