function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YeAqtYHwNr":
        Script1();
        break;
      case "5iagkLxnHtW":
        Script2();
        break;
      case "5tBpM5nmNN7":
        Script3();
        break;
      case "6pQdrQC8v4J":
        Script4();
        break;
      case "6IGPIUMpIJb":
        Script5();
        break;
      case "6rJEU9Kaqq0":
        Script6();
        break;
      case "6cWwvkfDGbb":
        Script7();
        break;
      case "6V3DmH1tnHR":
        Script8();
        break;
      case "5huvJAtyhPS":
        Script9();
        break;
      case "6PnpNFJ4KNe":
        Script10();
        break;
      case "6hqiIaqoiK7":
        Script11();
        break;
      case "5ZduhOQA0Yd":
        Script12();
        break;
      case "6AzT3qhJeae":
        Script13();
        break;
      case "6UDzblPkNty":
        Script14();
        break;
      case "6grkAVqeIzY":
        Script15();
        break;
      case "6a95QI4XzBD":
        Script16();
        break;
      case "6K9oN85Y7bz":
        Script17();
        break;
      case "5s8muujYVI0":
        Script18();
        break;
      case "66sRxEN9w8q":
        Script19();
        break;
      case "6HKGj4GesOP":
        Script20();
        break;
      case "6pcLRRzzT1y":
        Script21();
        break;
      case "5e6Mbe4mSd7":
        Script22();
        break;
      case "6eAw5GETHn9":
        Script23();
        break;
      case "6J6NufaRkTJ":
        Script24();
        break;
      case "5WTclh8iONy":
        Script25();
        break;
      case "6jKUYPfyIGZ":
        Script26();
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
	
	"resultsAvailable": "resultsAvailable"
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

