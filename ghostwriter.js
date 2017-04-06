function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["What really grinds my gears is eating","Do you want to build", "Have you ever eaten a", "Have you ever noticed"];
  var body = [" pancakes", " muffins", " banana peppers" , " snowmen", " quiche"];
  var end = [" while skating", " while surfing"];
  randIndex = randomUpTo((intro.length-1));
  sentence = intro[randIndex];
  randIndex = randomUpTo((body.length-1));
  sentence = sentence + body[randIndex];
  randIndex = randomUpTo((end.length-1));
  sentence = sentence + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
