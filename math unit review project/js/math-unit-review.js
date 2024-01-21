"use strict";

//--------------------------------------------------------------------------------
// MathUnitReview
//--------------------------------------------------------------------------------
// TODO:
//--------------------------------------------------------------------------------
class MathUnitReview {
  static questionInfo = null;
  //static numQuestions = -1;
  static articulateVars = null;
  
  constructor() {
    console.log("WARNING: MathUnitReview constructor invoked unexpectedly");
  }
    
  //------------------------------------------------------------------------------
  // public methods
  //------------------------------------------------------------------------------
  static initialize(initInfo)
  {
    const player = GetPlayer();
    
    let questionInfo = {};
    questionInfo = {};
    questionInfo.numQuestions = player.GetVar(initInfo.numQuestions);
    MathUnitReview.questionInfo = questionInfo;
    
    let vars = {};
    vars.currentQuestionNumber = initInfo.currentQuestionNumber;
    vars.currentQuestionSelection = initInfo.currentQuestionSelection;
    vars.questionNumberLabel = initInfo.questionNumberLabel;
    vars.questionStem = initInfo.questionStem;
    vars.response = [
      initInfo.responseA,
      initInfo.responseB,
      initInfo.responseC,
      initInfo.responseD,
    ];
    vars.questionAnswered = [
      initInfo.answered1,
      initInfo.answered2,
      initInfo.answered3,
      initInfo.answered4,
      initInfo.answered5
    ];
    
    MathUnitReview.articulateVars = vars;
    MathUnitReview.questionInfo = questionInfo
    
    MathUnitReview.initializeQuestions();
  }
  
  static loadQuestion()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;
    
    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    
    if (currentQuestionNum < 1 || currentQuestionNum > qInfo.question.length) {
      console.log("WARNING: MathUnitReview.loadQuestion called with invalid question number (" + currentQuestionNum + ")");
      return;
    }
    
    const question = qInfo.question[currentQuestionNum - 1];
    
    player.SetVar(vars.questionNumberLabel, currentQuestionNum);
    player.SetVar(vars.questionStem, question.stem);
    player.SetVar(vars.currentQuestionSelection, question.selection);
    
    const responses = question.response;
    for (let i = 0; i < responses.length; i++) {
      player.SetVar(vars.response[i], responses[i]);
    }
  }
  
  static setResponseSelection(selectionValue)
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;

    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    qInfo.question[currentQuestionNum - 1].selection = selectionValue;
    
    player.SetVar(vars.currentQuestionSelection, selectionValue);
    player.SetVar(vars.questionAnswered[currentQuestionNum - 1], (selectionValue != -1));
  }
  
  static changeQuestion(mode)
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;
    
    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    const numQuestions = MathUnitReview.questionInfo.numQuestions;

    let newQuestionNum;
    if (mode == "next") {
      if (currentQuestionNum >= numQuestions) {
        console.log("WARNING: MathUnitReview.nextQuestion called with 'nextd' but no more questions");
        return;
      }
      newQuestionNum = currentQuestionNum + 1;
      
    } else if (mode == "previous") {
      if (currentQuestionNum <= 1) {
        console.log("WARNING: MathUnitReview.nextQuestion called with 'previous' at beginning of list");
        return;
      }
      newQuestionNum = currentQuestionNum - 1;
      
    } else if ([1,2,3,4,5].includes(mode)) {
      newQuestionNum = mode;
    }
    
    player.SetVar(vars.currentQuestionNumber, newQuestionNum);
  }
  

  static clearAnswers()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;

    for (let i = 0; i < qInfo.numQuestions; i++) {
      player.SetVar(vars.questionAnswered[i], false);
      qInfo.question[i].selection = -1;
    }
    
    player.SetVar(vars.currentQuestionSelection, -1);
  }

  static checkAnswers()
  {
    console.log("MathUnitReview.checkAnswers");
  }

  //------------------------------------------------------------------------------
  // private methods
  //------------------------------------------------------------------------------
  static initializeQuestions()
  {
    let qInfo = MathUnitReview.questionInfo;
    const nResponses = MathUnitReview.articulateVars.response.length;
    const letterMap = "ABCDE";
    
    qInfo.question = [];
    for (let i = 0; i < qInfo.numQuestions; i++) {
      let question = {};
      question.stem = "question stem #" + (i + 1);
      question.response = [];
      for (let j = 0; j < nResponses; j++) {
        question.response.push("response " + (i + 1) + letterMap.charAt(j));
      }
      question.selection = -1;
      
      qInfo.question.push(question);
    }
    
    MathUnitReview.questionInfo = qInfo;
  }

  //------------------------------------------------------------------------------
  // callbacks
  //------------------------------------------------------------------------------    

  //------------------------------------------------------------------------------
  // handlers
  //------------------------------------------------------------------------------  

  //------------------------------------------------------------------------------
  // utilities
  //------------------------------------------------------------------------------  
 
}