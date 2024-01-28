function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nIKrGv9LmK":
        Script1();
        break;
      case "5dVCgyJ4WMU":
        Script2();
        break;
      case "5b6baDexumh":
        Script3();
        break;
      case "6o0pJGOyzxn":
        Script4();
        break;
      case "5o9CbNntEkJ":
        Script5();
        break;
      case "6PMrtpr0XEH":
        Script6();
        break;
      case "5Wqwnid0G1h":
        Script7();
        break;
      case "6BOujxjnGMG":
        Script8();
        break;
      case "6dQ2ouGzGh5":
        Script9();
        break;
      case "6D63AvjLbQ7":
        Script10();
        break;
      case "6aya7AJ7iu9":
        Script11();
        break;
      case "5v8dXX40EWJ":
        Script12();
        break;
      case "5dnjz3kI0iV":
        Script13();
        break;
      case "6K8Z1fNitFi":
        Script14();
        break;
      case "5qe6ysO7Dgd":
        Script15();
        break;
      case "6LThX8VMohy":
        Script16();
        break;
      case "5vPbkdVqPu1":
        Script17();
        break;
      case "6jbJzabjA1e":
        Script18();
        break;
      case "5YZ5oenzIg4":
        Script19();
        break;
      case "6Miph3UpWLY":
        Script20();
        break;
      case "5mjgo3IgTWz":
        Script21();
        break;
      case "5dFDcNfv1M7":
        Script22();
        break;
      case "6OfADaqlWQe":
        Script23();
        break;
      case "678hta3zocu":
        Script24();
        break;
      case "5xq2yPnx9uO":
        Script25();
        break;
      case "6lTa7q1JdUF":
        Script26();
        break;
      case "6H6DsAwOXA2":
        Script27();
        break;
  }
}

function Script1()
{
  MathUnitReview.initialize({
    "titleText": "titleText",
    "xAPIEnabled": "xAPIEnabled",
	
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
	"answered5": "questionAnswered5",
	
	"resourceVars": {
		"url": [
		    "resourceDescription1",
		    "resourceDescription2",
		    "resourceDescription3",
		    "resourceDescription4",
		    "resourceDescription5"
		],
		"show": [
			"showResource1",
			"showResource2",
			"showResource3",
			"showResource4",
			"showResource5"
		]
	},
	
	"resultsAvailable": "resultsAvailable",
	
	"correctVars": [
		"correct1",
		"correct2",
		"correct3",
		"correct4",
		"correct5"
	],
	
	"percentScore": "percentScore",
	"instructorName": "instructorName",
	"studentName": "studentName"
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
  MathUnitReview.loadResources();
}

function Script21()
{
  MathUnitReview.openResource(2);
}

function Script22()
{
  MathUnitReview.openResource(5);
}

function Script23()
{
  MathUnitReview.openResource(4);
}

function Script24()
{
  MathUnitReview.openResource(3);
}

function Script25()
{
  MathUnitReview.openResource(2);
}

function Script26()
{
  MathUnitReview.openResource(1);
}

function Script27()
{
  MathUnitReview.postResults();
}

