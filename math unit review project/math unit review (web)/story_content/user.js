function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZRY4MXvXha":
        Script1();
        break;
      case "643cLL0N8Uc":
        Script2();
        break;
      case "6pfGdHN1Zbl":
        Script3();
        break;
      case "6ndoSern2X1":
        Script4();
        break;
      case "5lR3m8zfg3w":
        Script5();
        break;
      case "6T5V3V9XuMq":
        Script6();
        break;
      case "67WWXPBRXUi":
        Script7();
        break;
      case "5nLu6IURUpk":
        Script8();
        break;
      case "6UM74lyQZlM":
        Script9();
        break;
      case "61HtQFhvau3":
        Script10();
        break;
      case "6VTxyLiXq9Y":
        Script11();
        break;
      case "6djkmsEIghO":
        Script12();
        break;
      case "5Yt0VxG45P6":
        Script13();
        break;
      case "5b6jszR5TEB":
        Script14();
        break;
      case "6lLyE5cLnaW":
        Script15();
        break;
      case "6PZzj4NXPwD":
        Script16();
        break;
      case "5sBLS6s5U6W":
        Script17();
        break;
      case "5v97lHogo0t":
        Script18();
        break;
      case "69VEZbv0CtN":
        Script19();
        break;
      case "62ay09wQtuS":
        Script20();
        break;
      case "5jX6OOsIGj1":
        Script21();
        break;
      case "6emucQSM5RK":
        Script22();
        break;
      case "5juf00MuQ98":
        Script23();
        break;
      case "6MHUUIsT6Ay":
        Script24();
        break;
      case "5fYHaEvF9b2":
        Script25();
        break;
      case "6RrBPF6HQmA":
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

