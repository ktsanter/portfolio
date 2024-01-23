function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QbSsheBhD3":
        Script1();
        break;
      case "6lzG0LXe82Y":
        Script2();
        break;
      case "5ZzPTxxVdO1":
        Script3();
        break;
      case "6ZBqXL0r91a":
        Script4();
        break;
      case "6DkljJGFpER":
        Script5();
        break;
      case "6mYamBaBEjB":
        Script6();
        break;
      case "6JmlPR1f37R":
        Script7();
        break;
      case "64We5YgOloi":
        Script8();
        break;
      case "65Kb7Lgdkjd":
        Script9();
        break;
      case "5zFwd8uwDue":
        Script10();
        break;
      case "6XcyVscC6X7":
        Script11();
        break;
      case "5WRPvcBk5MS":
        Script12();
        break;
      case "62gQMQ0beP3":
        Script13();
        break;
      case "5kZWgZCEZ1V":
        Script14();
        break;
      case "5on0mP5NJ70":
        Script15();
        break;
      case "6hWjTt9ePRR":
        Script16();
        break;
      case "5hsnCCIwfml":
        Script17();
        break;
      case "6Q7n954IhWn":
        Script18();
        break;
      case "6U7DNhiCLQZ":
        Script19();
        break;
      case "6K9P2bxPKay":
        Script20();
        break;
      case "5sn1YDEDY4B":
        Script21();
        break;
      case "5ekusqlwHbd":
        Script22();
        break;
      case "6YcElpvBWM7":
        Script23();
        break;
      case "5aRuLemFRu4":
        Script24();
        break;
      case "5jeP7LZVowY":
        Script25();
        break;
      case "5wb18GVbp1f":
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
	}
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

