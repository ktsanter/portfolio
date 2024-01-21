function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kibWkI5zT6":
        Script1();
        break;
      case "6megqC6t5uK":
        Script2();
        break;
      case "6Wa1kMLSOj8":
        Script3();
        break;
      case "6ktdntqqNbY":
        Script4();
        break;
      case "5rLBpvqUgPn":
        Script5();
        break;
      case "6hC8A5Jhf2v":
        Script6();
        break;
      case "63uaHr6RmoX":
        Script7();
        break;
      case "6XbANQIcbaj":
        Script8();
        break;
      case "5cM5tLSom5x":
        Script9();
        break;
      case "5oyF7KRA9Nt":
        Script10();
        break;
      case "6nvopdAJ6F0":
        Script11();
        break;
      case "5jn106mDd57":
        Script12();
        break;
      case "6pYUKHJhHxP":
        Script13();
        break;
  }
}

function Script1()
{
  MathUnitReview.initialize({
	"numQuestions": "numQuestions",
	"currentQuestionNumber": "currentQuestionNumber",
	"currentQuestionSelection": "currentQuestionSelection",
	"questionNumberLabel": "questionNumberLabel",
	"questionStem": "questionStem",
	"responseA": "responseA",
	"responseB": "responseB",
	"responseC": "responseC",
	"responseD": "responseD"
});

}

function Script2()
{
  MathUnitReview.loadQuestion();
}

function Script3()
{
  MathUnitReview.changeQuestion("next");
}

function Script4()
{
  MathUnitReview.changeQuestion("previous");
}

function Script5()
{
  MathUnitReview.setResponseSelection(4);
}

function Script6()
{
  MathUnitReview.setResponseSelection(4);
}

function Script7()
{
  MathUnitReview.setResponseSelection(3);
}

function Script8()
{
  MathUnitReview.setResponseSelection(3);
}

function Script9()
{
  MathUnitReview.setResponseSelection(1);
}

function Script10()
{
  MathUnitReview.setResponseSelection(1);
}

function Script11()
{
  MathUnitReview.setResponseSelection(2);
}

function Script12()
{
  MathUnitReview.setResponseSelection(2);
}

function Script13()
{
  MathUnitReview.checkAnswers();
}

