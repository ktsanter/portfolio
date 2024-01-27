function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kwYYVVrIfw":
        Script1();
        break;
      case "5lR7LTlryU9":
        Script2();
        break;
      case "6eGXYTrpJp0":
        Script3();
        break;
      case "6U5Xbv1WGn5":
        Script4();
        break;
      case "6BNlvuZxNoK":
        Script5();
        break;
      case "6dqeTtB3ClW":
        Script6();
        break;
      case "6Sg19zCGBuL":
        Script7();
        break;
      case "5cc7BFifkni":
        Script8();
        break;
      case "6ot9h2Ov28m":
        Script9();
        break;
      case "6H6yAxQ576x":
        Script10();
        break;
      case "5byhk1HYtrU":
        Script11();
        break;
      case "5aNDTyn2qt9":
        Script12();
        break;
      case "67kRioRe6qj":
        Script13();
        break;
      case "5e2SGtHuKDi":
        Script14();
        break;
      case "5v0ECbPLx3q":
        Script15();
        break;
      case "5gx6DLTMRtN":
        Script16();
        break;
      case "6JRRhiDLR7B":
        Script17();
        break;
      case "6kehLaX3Iuo":
        Script18();
        break;
      case "5rMXxc2u4XH":
        Script19();
        break;
      case "6XtrM2U3fXF":
        Script20();
        break;
      case "6VsSq06vq8W":
        Script21();
        break;
      case "6lDFM2XTRw4":
        Script22();
        break;
      case "6YL6t76m1ug":
        Script23();
        break;
      case "6l9bdeqJdWP":
        Script24();
        break;
      case "61ehfEBDZ59":
        Script25();
        break;
      case "6M8gHqrp55o":
        Script26();
        break;
      case "5eE9CZFJNJx":
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

