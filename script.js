$(document).ready(function(){

    var element1 = document.createElement("input");

    //Assign different attributes to the element.
    element1.setAttribute("type", "button");
    element1.setAttribute("id", "");
    element1.innerHTML= "begin";
    var foo = document.getElementById("button");
  
    //Append the element in page (in span).
    foo.appendChild(element1);

    var element2 = document.createElement("input");

    //Assign different attributes to the element.
    element2.setAttribute("type", "button");
    // element2.setAttribute("")
    element2.setAttribute("text", "My Score");
  
    var foo = document.getElementById("button");
  
    //Append the element in page (in span).
    foo.appendChild(element2);




    // $("p").click(function(){
    //   $(this).hide();
    // });
  });
















var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];