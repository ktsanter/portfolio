function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VkGsjN8h8r":
        Script1();
        break;
      case "5iQLk7nixXS":
        Script2();
        break;
      case "6p4KRa9A7ep":
        Script3();
        break;
      case "5vs8yJbE1lG":
        Script4();
        break;
      case "6GHzUR4KxIE":
        Script5();
        break;
      case "68FateehToK":
        Script6();
        break;
      case "5VTLtpc8C4V":
        Script7();
        break;
      case "5cqFVEHa0ur":
        Script8();
        break;
      case "6TPhOMrXc6P":
        Script9();
        break;
      case "6lhIrqSpOjd":
        Script10();
        break;
      case "64XXBDrbu7k":
        Script11();
        break;
      case "5tImjdkazCy":
        Script12();
        break;
      case "6ZlreWkIcxn":
        Script13();
        break;
      case "6SQbyWE284i":
        Script14();
        break;
      case "5cQ4iQa4xnw":
        Script15();
        break;
      case "6lyGrT76Tpt":
        Script16();
        break;
      case "5rDsllYSDFI":
        Script17();
        break;
      case "6MUuG6hsXKp":
        Script18();
        break;
      case "6Jw5BkwfVxu":
        Script19();
        break;
      case "6FtFbq4xCm5":
        Script20();
        break;
  }
}

function Script1()
{
  MathUnitReview.initialize({
    "titleText": "titleText",
	"numQuestions": "numQuestions",
	"currentQuestionNumber": "currentQuestionNumber",
	"currentQuestionSelection": "currentQuestionSelection",
	"questionNumberLabel": "questionNumberLabel",
	"questionStem": "questionStem",
	"responseA": "responseA",
	"responseB": "responseB",
	"responseC": "responseC",
	"responseD": "responseD",
	"answered1": "questionAnswered1",
	"answered2": "questionAnswered2",
	"answered3": "questionAnswered3",
	"answered4": "questionAnswered4",
	"answered5": "questionAnswered5"
});

}

function Script2()
{
  MathUnitReview.loadQuestion();
}

function Script3()
{
  MathUnitReview.setResponseSelection(4);
}

function Script4()
{
  MathUnitReview.setResponseSelection(4);
}

function Script5()
{
  MathUnitReview.setResponseSelection(3);
}

function Script6()
{
  MathUnitReview.setResponseSelection(3);
}

function Script7()
{
  MathUnitReview.setResponseSelection(2);
}

function Script8()
{
  MathUnitReview.setResponseSelection(2);
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
  MathUnitReview.changeQuestion(1);
}

function Script12()
{
  MathUnitReview.changeQuestion(2);
}

function Script13()
{
  MathUnitReview.changeQuestion(3);
}

function Script14()
{
  MathUnitReview.changeQuestion(4);
}

function Script15()
{
  MathUnitReview.changeQuestion(5);
}

function Script16()
{
  MathUnitReview.checkAnswers();
}

function Script17()
{
  MathUnitReview.clearAnswers();
}

function Script18()
{
  MathUnitReview.changeQuestion("next");
}

function Script19()
{
  MathUnitReview.changeQuestion("previous");
}

function Script20()
{
  MathUnitReview.openResource(1);
}

