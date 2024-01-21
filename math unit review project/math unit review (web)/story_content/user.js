function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gYKngH3U1L":
        Script1();
        break;
      case "62Y1w5VUlQI":
        Script2();
        break;
      case "5dsAv89zgMo":
        Script3();
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

function Script3()
{
  MathUnitReview.checkAnswers();
}

