function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6na9j4iuQ21":
        Script1();
        break;
      case "6nO7Od0MMxs":
        Script2();
        break;
      case "6mlPm9l1B0m":
        Script3();
        break;
      case "5gs4Fb8yxde":
        Script4();
        break;
      case "5czq0XxB3Lc":
        Script5();
        break;
      case "68ULj97kx4u":
        Script6();
        break;
      case "6ZnMZq79W0q":
        Script7();
        break;
      case "6CMEho5sbR4":
        Script8();
        break;
      case "6ctbwFnr77D":
        Script9();
        break;
      case "6lZr3lOwpTE":
        Script10();
        break;
      case "5fbquB48I5q":
        Script11();
        break;
      case "5pIC2cZRMSF":
        Script12();
        break;
      case "69j1riv0Cbr":
        Script13();
        break;
      case "6ea7Pzk08Qs":
        Script14();
        break;
      case "5rh3Aoc6RHZ":
        Script15();
        break;
      case "5kRKT7Cr1v1":
        Script16();
        break;
      case "6fqpEN8V97v":
        Script17();
        break;
      case "5lNG1sOQIbL":
        Script18();
        break;
      case "6iGrM5eBAcl":
        Script19();
        break;
      case "5z9PJHfZnEk":
        Script20();
        break;
      case "5hyi639aAEP":
        Script21();
        break;
      case "5mcfAMfGf19":
        Script22();
        break;
      case "6CLQWN7epf0":
        Script23();
        break;
      case "6bCVUu1YEPP":
        Script24();
        break;
      case "5cAEc6XgQvW":
        Script25();
        break;
      case "6dssKbSb7Uv":
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
	
	"resourceMaterial": [
	    // question 1
		[
			{"text": "aaaaa", "url": "https://www.google.com"}
		],

		// question 2
		[
			{"text": "bbbb", "url": "https://www.nytimes.com"},
			{"text": "ccc", "url": "https://www.freep.com"}
		],
		
		// question 3
		[],
		
		// question 4
		[],
		
		// question 5
		[]
	]
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

