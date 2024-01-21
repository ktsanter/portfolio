"use strict";

//--------------------------------------------------------------------------------
// MathUnitReview
//--------------------------------------------------------------------------------
// TODO:
//--------------------------------------------------------------------------------
class MathUnitReview {
  static questionInfo = null;
  static numQuestions = -1;
  static articulateVars = null;
  
  constructor() {
    console.log("WARNING: MathUnitReview constructor invoked unexpectedly");
  }
    
  //------------------------------------------------------------------------------
  // public methods
  //------------------------------------------------------------------------------
  static initialize(initInfo)
  {
    console.log("MathUnitReview.initialize");
    const player = GetPlayer();
    
    let questionInfo = {};
    questionInfo = {};
    questionInfo.numQuestions = player.GetVar(initInfo.numQuestions);
    MathUnitReview.questionInfo = questionInfo;
    
    let vars = {};
    vars.currentQuestionNumber = initInfo.currentQuestionNumber;
    vars.questionNumberLabel = initInfo.questionNumberLabel;
    vars.questionStem = initInfo.questionStem;
    vars.response = [
      initInfo.responseA,
      initInfo.responseB,
      initInfo.responseC,
      initInfo.responseD,
    ]
    
    MathUnitReview.articulateVars = vars;
    MathUnitReview.questionInfo = questionInfo
    
    MathUnitReview.initializeQuestions();
  }
  
  static loadQuestion()
  {
    console.log("MathUnitReview.loadQuestion");
    
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
    
    const responses = question.response;
    for (let i = 0; i < responses.length; i++) {
      player.SetVar(vars.response[i], responses[i]);
    }
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