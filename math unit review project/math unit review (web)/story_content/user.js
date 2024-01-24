function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vbvL7kxBMU":
        Script1();
        break;
      case "5tM2KpdtscR":
        Script2();
        break;
      case "5VglEw8Kvqc":
        Script3();
        break;
      case "5gXnykIwWXQ":
        Script4();
        break;
      case "62rTC7kTkYc":
        Script5();
        break;
      case "64HjUMGiidN":
        Script6();
        break;
      case "5V8eUzLpSN8":
        Script7();
        break;
      case "5fumEtCBefi":
        Script8();
        break;
      case "6Lcd2rw6XN3":
        Script9();
        break;
      case "6FogxpbnTNT":
        Script10();
        break;
      case "6XCUxurwMXy":
        Script11();
        break;
      case "5p408FJCUdS":
        Script12();
        break;
      case "5ohUqxSuBJt":
        Script13();
        break;
      case "5gGfhlG5Rxm":
        Script14();
        break;
      case "6CgDLtuIPO9":
        Script15();
        break;
      case "6pqttfZgFKC":
        Script16();
        break;
      case "6YgGD24GSpe":
        Script17();
        break;
      case "6du03xQkibd":
        Script18();
        break;
      case "6KQQHW1UTbZ":
        Script19();
        break;
      case "6kUP9FPIdam":
        Script20();
        break;
      case "6kNaFHdmpEx":
        Script21();
        break;
      case "6B7HcU7SYqO":
        Script22();
        break;
      case "64N9XfVQTnq":
        Script23();
        break;
      case "69iebJGX2WF":
        Script24();
        break;
      case "69i7veURBP8":
        Script25();
        break;
      case "60SfVH4jzEa":
        Script26();
        break;
      case "6UvjOfw0V7c":
        Script27();
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

