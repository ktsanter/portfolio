function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mBxfeH4BB4":
        Script1();
        break;
      case "6nuN2ohfInu":
        Script2();
        break;
      case "68IrGrFq1zv":
        Script3();
        break;
      case "6rSMxQlQNLW":
        Script4();
        break;
      case "6g3jyeMKA50":
        Script5();
        break;
      case "5vjpcYJHmaL":
        Script6();
        break;
      case "5gNmTmVFUHZ":
        Script7();
        break;
      case "6ZVUc5twdbi":
        Script8();
        break;
      case "6huV01j95Yl":
        Script9();
        break;
      case "5iU9neg7EaN":
        Script10();
        break;
      case "62u6x94FtG1":
        Script11();
        break;
      case "5jGscsV86sD":
        Script12();
        break;
      case "671sZF9wGh8":
        Script13();
        break;
      case "5rXK9JyNaqq":
        Script14();
        break;
      case "6I033w68OoA":
        Script15();
        break;
      case "5m6rQTu2PYC":
        Script16();
        break;
      case "5t1X1v64GiK":
        Script17();
        break;
      case "6gniSx3t7yq":
        Script18();
        break;
      case "5ePUUVMNSso":
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

