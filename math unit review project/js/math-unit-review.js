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
    console.log("MathUnitReview.initialize", initInfo);
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

    console.log("Articulate variables:");
    for (let key in MathUnitReview.articulateVars) {
      console.log(key, MathUnitReview.articulateVars[key]);
    }

    MathUnitReview.questionInfo = questionInfo
    console.log("questionInfo", MathUnitReview.questionInfo);
    
    MathUnitReview.initializeQuestions();
  }
  
  static loadQuestion()
  {
    console.log("MathUnitReview.loadQuestion");
    
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;
    console.log(qInfo);
    
    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    console.log("current question: ", currentQuestionNum);
    if (currentQuestionNum < 1 || currentQuestionNum > qInfo.question.length) {
      console.log("WARNING: MathUnitReview.loadQuestion called with invalid question number (" + currentQuestionNum + ")");
      return;
    }
    
    const question = qInfo.question[currentQuestionNum - 1];
    console.log("question", question);
    
    player.SetVar(vars.questionNumberLabel, currentQuestionNum);
    player.SetVar(vars.questionStem, question.stem);
  }

  //------------------------------------------------------------------------------
  // private methods
  //------------------------------------------------------------------------------
  static initializeQuestions()
  {
    let qInfo = MathUnitReview.questionInfo;
    
    qInfo.question = [];
    for (let i = 0; i < qInfo.numQuestions; i++) {
      let question = {};
      question.stem = "question stem #" + (i + 1);
      
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