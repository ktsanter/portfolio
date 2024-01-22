function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qJq6hGatLX":
        Script1();
        break;
      case "6oRlj42PLI4":
        Script2();
        break;
      case "6U8RPQCcsrK":
        Script3();
        break;
      case "6YhfqKyyGvD":
        Script4();
        break;
      case "5tr8vQPMZf1":
        Script5();
        break;
      case "6ASXaruumMe":
        Script6();
        break;
      case "6ck11st3XOf":
        Script7();
        break;
      case "6gGDnH6vET6":
        Script8();
        break;
      case "5x7OwXR6FzD":
        Script9();
        break;
      case "6HDZXBcTrB7":
        Script10();
        break;
      case "6rHyG1dMT3j":
        Script11();
        break;
      case "5tXBdIWEbBX":
        Script12();
        break;
      case "6kmgEdYdCOA":
        Script13();
        break;
      case "63eSOVMJ5XL":
        Script14();
        break;
      case "6cKOPeSTVld":
        Script15();
        break;
      case "5VOjBs29U8Z":
        Script16();
        break;
      case "5kIwElSemoB":
        Script17();
        break;
      case "611tq0NGF6F":
        Script18();
        break;
      case "5dHaTovMlpU":
        Script19();
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

