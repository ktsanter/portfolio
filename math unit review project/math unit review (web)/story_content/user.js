function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ntdSFn3xdz":
        Script1();
        break;
      case "5zWIUu9R0Fy":
        Script2();
        break;
  }
}

function Script1()
{
  MathUnitReview.initialize({
	"numQuestions": "numQuestions",
	"currentQuestionNumber": "currentQuestionNumber",
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

