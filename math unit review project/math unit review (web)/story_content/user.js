function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5stbWsl6WTt":
        Script1();
        break;
      case "6YoKV5SGzKl":
        Script2();
        break;
      case "5uQQ0kazJKO":
        Script3();
        break;
      case "60fHkkQTjbD":
        Script4();
        break;
      case "69Qf0qoV28F":
        Script5();
        break;
      case "6qZgYUYXweh":
        Script6();
        break;
      case "67xOiLUEGbd":
        Script7();
        break;
      case "6B28mFpAetC":
        Script8();
        break;
      case "5w3z0XOhRIn":
        Script9();
        break;
      case "61JbeoVKirP":
        Script10();
        break;
      case "5sNAPPr9yAa":
        Script11();
        break;
      case "5n6GA5jiem8":
        Script12();
        break;
      case "6KKgJcCIic7":
        Script13();
        break;
      case "6q0rX3t1oxt":
        Script14();
        break;
      case "69z9BpXfV5d":
        Script15();
        break;
      case "6oFk0sdpNPW":
        Script16();
        break;
      case "6q8NECVRXHy":
        Script17();
        break;
      case "6mv0qAbvRWz":
        Script18();
        break;
      case "6DFUs8ux5JD":
        Script19();
        break;
      case "5qm7DGg7vqW":
        Script20();
        break;
      case "5b9Wa3TK8U2":
        Script21();
        break;
      case "5gnhAWNtSof":
        Script22();
        break;
      case "5qdm0hZ97j0":
        Script23();
        break;
      case "5ztx6VWnM2u":
        Script24();
        break;
      case "6jbuMORJqqU":
        Script25();
        break;
      case "6RGV7vvbjMs":
        Script26();
        break;
      case "5rOQ1cxMyBX":
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

