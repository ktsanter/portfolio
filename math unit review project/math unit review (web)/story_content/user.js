function ExecuteScript(strId)
{
  switch (strId)
  {
      case "619SH4OqyBK":
        Script1();
        break;
      case "5y8QJshKn36":
        Script2();
        break;
      case "5fLIHe5wmxx":
        Script3();
        break;
      case "6WrXtWFVDLx":
        Script4();
        break;
      case "5fkOh47lbke":
        Script5();
        break;
      case "6BG5OJw0Q6A":
        Script6();
        break;
      case "6CQ7O93FsVi":
        Script7();
        break;
      case "6m9SAZdPAkH":
        Script8();
        break;
      case "64MIMFLKune":
        Script9();
        break;
      case "6diQ2bNkwnc":
        Script10();
        break;
      case "6mvYNnmwzde":
        Script11();
        break;
      case "62Ld2ZSVpRg":
        Script12();
        break;
      case "64URKqANR3i":
        Script13();
        break;
      case "5vyxsHpuulO":
        Script14();
        break;
      case "6VejrORLHSV":
        Script15();
        break;
      case "6dMKkJrYV4D":
        Script16();
        break;
      case "6E6pMXxnZJ2":
        Script17();
        break;
      case "6LxzrevdlRU":
        Script18();
        break;
      case "5n01HB344Wi":
        Script19();
        break;
      case "5pEDMwUh94T":
        Script20();
        break;
      case "5xoIeMNIiqZ":
        Script21();
        break;
      case "6PShLk5ZG3A":
        Script22();
        break;
      case "5tO06kdvRih":
        Script23();
        break;
      case "6Wp6EyzttT4":
        Script24();
        break;
      case "5iR0iCTK4FR":
        Script25();
        break;
      case "6nmQIprRlqd":
        Script26();
        break;
      case "5veB4atMSfF":
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

