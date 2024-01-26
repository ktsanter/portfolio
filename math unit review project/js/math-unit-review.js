"use strict";

//--------------------------------------------------------------------------------
// MathUnitReview
//--------------------------------------------------------------------------------
// TODO:
//--------------------------------------------------------------------------------
class MathUnitReview {
  static articulateVars = null;
  static questionInfo = null;  
  static resourceMaterial = null;
  
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
    vars.titleText = initInfo.titleText;
    vars.xAPIEnabled = initInfo.xAPIEnabled;
    
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
    
    vars.resourceVars = initInfo.resourceVars;
    vars.resultsAvailable = initInfo.resultsAvailable;    
    vars.correctVars = initInfo.correctVars;    
    vars.percentScore = initInfo.percentScore;
    vars.studentName = initInfo.studentName;
    vars.instructorName = initInfo.instructorName;
    
    MathUnitReview.articulateVars = vars;
    MathUnitReview.questionInfo = questionInfo
    
    MathUnitReview.xAPIConfigure();
    
    MathUnitReview.initializeQuestions();
    MathUnitReview.initializeResources();
    MathUnitReview.initializePeople();
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
      player.SetVar(vars.response[i], responses[i].text);
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
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const qInfo = MathUnitReview.questionInfo;
        
    const findCorrect = (q) => {
      let correct = -1;
      for (let i = 0; i < q.response.length && correct < 0; i++) {
        correct = q.response[i].correct ? (i + 1) : -1;
      }
      return correct;
    };
    
    let countCorrect = 0;
    console.log(qInfo.question);
    for (let i = 0; i < qInfo.numQuestions; i++) {
      const question = qInfo.question[i];
      const answerIsCorrect = (findCorrect(question) == question.selection);
      
      console.log(i, findCorrect(question), question.selection, answerIsCorrect, countCorrect);
      
      if (answerIsCorrect) countCorrect++;
      player.SetVar(vars.correctVars[i], answerIsCorrect);
    }
    
    const pct = (100 * countCorrect / qInfo.numQuestions).toFixed(0) + "";        
    player.SetVar(vars.percentScore, pct);
    
    player.SetVar(vars.resultsAvailable, true);
  }
  
  static loadResources()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const material = MathUnitReview.resourceMaterial;
    
    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    const showVars = vars.resourceVars.show;
    const urlVars = vars.resourceVars.url;
    const references = material[currentQuestionNum - 1];
        
    for (let i = 0; i < showVars.length; i++) {
      if (references.length > i) {
        player.SetVar(showVars[i], true);
        player.SetVar(urlVars[i], references[i].text);
        
      } else {
        player.SetVar(urlVars[i], "\n");
        player.SetVar(showVars[i], false);
      }
    }    
  }
  
  static openResource(resourceNumber)
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const material = MathUnitReview.resourceMaterial;
    
    const currentQuestionNum = player.GetVar(vars.currentQuestionNumber);
    const url = material[currentQuestionNum - 1][resourceNumber - 1].url;
    window.open(url, "_blank");
    
    const xAPIParams = { "verb": "", "result": {} };
    
    xAPIParams.verb = "interacted";
    xAPIParams.result = {
      "response": url
    }      

    MathUnitReview.xAPISend(xAPIParams);    
  }
  
  static postResults()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    
    const completed = player.GetVar(vars.resultsAvailable);
    
    const instructor = player.GetVar(vars.instructorName);
    const numQuestions =  MathUnitReview.questionInfo.numQuestions;
    const percentScore = player.GetVar(vars.percentScore);
    const passed = (percentScore >= 60);

    let answerResult = [];
    for (let i = 0; i < numQuestions; i++) {
      answerResult.push(player.GetVar(vars.correctVars[i]));
    }
        
    const xAPIParams = { "verb": "", "result": {} };
    
    xAPIParams.verb = "completed";
    xAPIParams.result = {
      "score": {
        "min": 0,
        "max": numQuestions,
        "raw": Math.round((percentScore / 100.0) * numQuestions),
        "scaled": percentScore / 100.0
      },
      "response": JSON.stringify({
        "instructor": instructor,
        "correct": answerResult
      }),
      "success": passed,
    }      

    MathUnitReview.xAPISend(xAPIParams);
  }
  
  //------------------------------------------------------------------------------
  // private methods
  //------------------------------------------------------------------------------
  static initializeQuestions()
  {
    let qInfo = MathUnitReview.questionInfo;
    const nResponses = MathUnitReview.articulateVars.response.length;
    
    const questionMakerMap = [
      MathUnitReview.makeQuestionType1,
      MathUnitReview.makeQuestionType2,
      MathUnitReview.makeQuestionType3,
      MathUnitReview.makeQuestionType4,
      MathUnitReview.makeQuestionType5
    ];
        
    qInfo.question = [];
    for (let i = 0; i < qInfo.numQuestions; i++) {     
      let q;
      
      if (i != 20) {
        q = questionMakerMap[i]();
        
      } else {
        const index = i + 1;
        q = {
          "stem": "stem for #" + index + "\n\n\n\n\n\n",
          "response": [
            {"correct": true, "text": "response" + index + "A"},
            {"correct": false, "text": "response" + index + "B"},
            {"correct": false, "text": "response" + index + "C"},
            {"correct": false, "text": "response" + index + "D"}
          ]
        };
      }
      
      q.selection = -1;
      qInfo.question.push(q);
    }
    
    MathUnitReview.questionInfo = qInfo;
  }
  
  static initializePeople()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
        
    const student = "Student" + MathUnitReview.randomInteger(1,20).toString().padStart(2, "0");
    const instructor = "Instructor" + MathUnitReview.randomInteger(1,3).toString().padStart(2, "0");
        
    player.SetVar(vars.studentName, student);
    player.SetVar(vars.instructorName, instructor);    
  }
  
  static initializeResources()
  {
    MathUnitReview.resourceMaterial = [
      // question 1
      [
        {"text": "Parallel and perpendicular lines. (Khan Academy)", "url": "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-angles-between-lines/v/identifying-parallel-and-perpendicular-lines#:~:text=Parallel%20lines%20are%20lines%20that,angles%20and%20symbols%20in%20diagrams."},
        {"text": "Parallel and perpendicular lines. (Mathplanet)", "url": "https://www.mathplanet.com/education/algebra-1/formulating-linear-equations/parallel-and-perpendicular-lines"},
        {"text": "What are parallel and perpendicular lines? (SplashLearn)", "url": "https://www.splashlearn.com/math-vocabulary/geometry/parallel-and-perpendicular-lines"}
      ],

      // question 2
      [
      {"text": "Equations of parallel and perpendicular lines (YouTube)", "url": "https://www.youtube.com/watch?v=LTb2-LE7StE"},
      {"text": "Parallel and perpendicular lines (Mathematics LibreTexts)", "url": "https://math.libretexts.org/Courses/Hawaii_Community_College/Hawaii_Community_College_MA82X_Textbook/04%3A_Graphing_Lines/4.06%3A_Parallel_and_Perpendicular_Lines"}
      ],

      // question 3
      [
      {"text": "Directed Line Segments - Partitions and Ratios (MathBitsNotebook)", "url": "https://mathbitsnotebook.com/Geometry/CoordinateGeometry/CGdirectedsegments.html"},
      {"text": "Dividing line segments accoring to ratio (YouTube)", "url": "https://www.youtube.com/watch?v=Cx-_PxD4DJM"}
      ],

      // question 4
      [
      {"text": "Quadrilaterals classification (Varsity Tutors)", "url": "https://www.varsitytutors.com/hotmath/hotmath_help/topics/quadrilaterals"},
      {"text": "Classifying quadrilaterals (Khan Academy)", "url": "https://www.khanacademy.org/math/cc-fifth-grade-math/properties-of-shapes/imp-quadrilaterals-2/v/classifying-shapes"}
      ],

      // question 5
      [
      {"text": "Area of right triangle (Cuemath)", "url": "https://www.cuemath.com/measurement/area-of-right-triangle/"}
      ],
    ];    
  }
  
  static makeQuestionType1()
  {
    let question = {};
    
    let stem = 
      "Line segment AB has the endpoints %%pointA%% and %%pointB%%.\n" +
      "Line segment CD has the endpoints %%pointC%% and %%pointD%%.\n\n" +
      "What is the relationship between AB and CD?\n\n\n"
    
    const makeParallel = Math.random() > 0.5;
    
    let response = [
      {"correct": makeParallel, "text":"parallel"},
      {"correct": !makeParallel, "text":"perpendicular"},
      {"correct": false, "text":"congruent"},
      {"correct": false, "text":"skew"}
    ];
    
    response.sort(() => { return Math.random() - 0.5; }); 
    
    const pointA = MathUnitReview.pickPoint();   
    const slopeAB = MathUnitReview.randomSlope();
    let pointB, pointC, pointD;
    let slopeCD;
    
    let coordDistFactor = MathUnitReview.randomInteger(1, 4);
    pointB = {
      "x": pointA.x + coordDistFactor * slopeAB.denominator,
      "y": pointA.y + coordDistFactor * slopeAB.numerator
    }
    
    slopeCD = makeParallel ? slopeAB : MathUnitReview.perpendicularSlope(slopeAB);
    
    pointC = MathUnitReview.pickDifferentPoint(pointA);
    coordDistFactor = MathUnitReview.randomInteger(1, 4);
    pointD = {
      "x": pointC.x + coordDistFactor * slopeCD.denominator,
      "y": pointC.y + coordDistFactor * slopeCD.numerator
    }
    
    question.stem = MathUnitReview.replaceKeywords(
      stem, {
        "pointA": MathUnitReview.formatPoint(pointA),
        "pointB": MathUnitReview.formatPoint(pointB),
        "pointC": MathUnitReview.formatPoint(pointC),
        "pointD": MathUnitReview.formatPoint(pointD)
      }
    );
    question.response = response;
    
    return question;
  }
  
  static makeQuestionType2()
  {
    let question = {};
    
    let stem = 
      "Find the equation of the line that is\n" +
      "%%relation%% to the line %%line1%%\n" +
      "and passes through the point %%pointX%%.\n\n\n\n\n"

    const makeParallel = Math.random() > 0.5;    
    const slope1 = MathUnitReview.handySlope();
    
    const line1 = {
      "m": slope1,
      "b": Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 7)
    }
    
    let pointX = MathUnitReview.pickPoint();    
    while (MathUnitReview.pointOnLine(pointX, line1)) {
      pointX = MathUnitReview.pickPoint();
    }

    const slopeSolution = makeParallel ? {...slope1} : MathUnitReview.perpendicularSlope(slope1);
    const lineSolution = {
      "m": slopeSolution,
      "b": pointX.y - ((slopeSolution.numerator / slopeSolution.denominator) * pointX.x)
    }
    
    question.stem = MathUnitReview.replaceKeywords(
      stem, {
        "relation": makeParallel ? "parallel" : "perpendicular", 
        "line1": MathUnitReview.formatLine(line1),
        "pointX": MathUnitReview.formatPoint(pointX)
      }
    );
    
    let otherPoint = {...pointX};
    otherPoint.y += MathUnitReview.randomInteger(1,5);
    
    let distractor1 = {...lineSolution};
    distractor1.b = otherPoint.y - ((distractor1.m.numerator / distractor1.m.denominator) * otherPoint.x);

    let distractor2 = {...lineSolution};
    distractor2.m = MathUnitReview.perpendicularSlope(lineSolution.m);
    distractor1.b = otherPoint.y - ((distractor2.m.numerator / distractor2.m.denominator) * otherPoint.x);

    let distractor3 = {...lineSolution};
    distractor3.m = MathUnitReview.perpendicularSlope(lineSolution.m);
    distractor3.b = otherPoint.y - ((distractor3.m.numerator / distractor3.m.denominator) * otherPoint.x);
    
    
    let response = [
      {"correct": true, "text":  MathUnitReview.formatLine(lineSolution)},
      {"correct": false, "text": MathUnitReview.formatLine(distractor1)},
      {"correct": false, "text": MathUnitReview.formatLine(distractor2)},
      {"correct": false, "text": MathUnitReview.formatLine(distractor3)},
    ];
    response.sort(() => { return Math.random() - 0.5; }); 
    
    question.response = response;
    
    return question;
  }
  
  static makeQuestionType3()
  {
    let question = {};
    
    let stem = 
      "Line segment AB has endpoints at %%pointA%% and %%pointB%%.\n\n" +
      "What are the coordinates of a point that partitions the segment into a %%partitionRatio%% ratio?\n\n\n";
    
    const ratioNumerator = MathUnitReview.randomInteger(1, 5);
    const ratioDenominator = MathUnitReview.randomInteger(ratioNumerator + 1, ratioNumerator + 5);
    const ratio = {
      "numerator": ratioNumerator,
      "denominator": ratioDenominator
    };
    const slope = MathUnitReview.randomSlope();
    
    const pointA = MathUnitReview.pickPoint();
    
    let pointC = {
      "x": pointA.x + ratio.numerator * slope.denominator,
      "y": pointA.y + ratio.numerator * slope.numerator
    }
    let pointB = {
      "x": pointA.x + ratio.denominator * slope.denominator,
      "y": pointA.y + ratio.denominator * slope.numerator
    }
    
    question.stem = MathUnitReview.replaceKeywords(
      stem, {
        "pointA": MathUnitReview.formatPoint(pointA),
        "pointB": MathUnitReview.formatPoint(pointB),
        "partitionRatio": MathUnitReview.formatRatio(ratio)        
      }
    );
    
    let distractor1 = {...pointC};
    distractor1.x += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
    distractor1.y += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
    
    let distractor2 = {...pointC};
    distractor2.x += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
    distractor2.y += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
    
    let distractor3 = {...pointC};
    distractor3.x += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
    distractor3.y += Math.sign(Math.random() - 0.5) * MathUnitReview.randomInteger(1, 4);
  
    let response = [
      {"correct": true, "text":  MathUnitReview.formatPoint(pointC)},
      {"correct": false, "text": MathUnitReview.formatPoint(distractor1)},
      {"correct": false, "text": MathUnitReview.formatPoint(distractor2)},
      {"correct": false, "text": MathUnitReview.formatPoint(distractor3)}
    ];
    response.sort(() => { return Math.random() - 0.5; }); 
    
    question.response = response;
    
    return question;
  }
  
  static makeQuestionType4()
  {
    let question = {};
    
    let stem = 
      "Which of these quadrilateral names is the most\n" +
      "specific description of the polygon formed by:\n" +
      "A: %%pointA%%\n" +
      "B: %%pointB%%\n" +
      "C: %%pointC%%\n" +
      "D: %%pointD%%\n\n" 
    
    const quadNames = ["square", "rectangle", "rhombus",  "parallelogram"];
    const solution = quadNames[MathUnitReview.randomInteger(0, quadNames.length - 1)];
    
    const pointA = MathUnitReview.pickPoint();
    const slopeAB = MathUnitReview.reduceRatio(MathUnitReview.randomSlope());
    const scaleAB = MathUnitReview.randomInteger(1, 4);
    
    let pointB = {}, pointC = {}, pointD = {};
    
    pointB.x = pointA.x + scaleAB * slopeAB.denominator;
    pointB.y = pointA.y + scaleAB * slopeAB.numerator;
    
    let slopeBC = {}, slopeAD = {}, slopeCD = {};
    let scaleBC, scaleAD, scaleCD;

    if (solution == "square") {
      slopeBC = MathUnitReview.perpendicularSlope(slopeAB);
      slopeAD = MathUnitReview.perpendicularSlope(slopeAB);
      slopeCD = {...slopeAB};
      
        
    } else if (solution == "rectangle") {
      slopeBC = MathUnitReview.perpendicularSlope(slopeAB);
      slopeAD = MathUnitReview.perpendicularSlope(slopeAB);
      slopeCD = {...slopeAB};
      
    } else if (solution == "rhombus") {
      const deltaX = pointB.x - pointA.x;
      const deltaY = pointB.y - pointA.y;
      
      pointC.x = pointB.x + deltaX
      pointC.y = pointA.y;
      pointD.x = pointB.x;
      pointD.y = pointA.y - deltaY
      
    } else { // parallelogram
      slopeAD = MathUnitReview.handySlope();
      while (
        (slopeAD.numerator == slopeAB.numerator && slopeAD.denominator == slopeAB.denominator) ||
        (slopeAD.numerator == -1 * slopeAB.denominator && slopeAD.denominator == slopeAB.numerator)
      ) slopeAD = MathUnitReview.handySlope();
      pointD.x = pointA.x + slopeAD.denominator;
      pointD.y = pointA.y + slopeAD.numerator;
      pointC.x = pointB.x + slopeAD.denominator;
      pointC.y = pointB.y + slopeAD.numerator;
    }
        
    question.stem = MathUnitReview.replaceKeywords(
      stem, {
        "pointA": MathUnitReview.formatPoint(pointA),
        "pointB": MathUnitReview.formatPoint(pointB),
        "pointC": MathUnitReview.formatPoint(pointC),
        "pointD": MathUnitReview.formatPoint(pointD)
      }
    );
    
    let response = [
      {"correct": solution == "square", "text":  "square"},
      {"correct": solution == "rectangle", "text": "rectangle"},
      {"correct": solution == "rhombus", "text": "rhombus"},
      {"correct": solution == "parallelogram", "text": "parallelogram"}
    ];
    response.sort(() => { return Math.random() - 0.5; }); 
    
    question.response = response;

    return question;
  }
  
  static makeQuestionType5()
  {
    let question = {};

    let stem = 
      "A triangle has vertices at\n" +
      "A: %%pointA%%\n" +
      "B: %%pointB%%\n" +
      "C: %%pointC%%\n" +
      "Side AB makes a right angle with side BC.\n\n" +
      "What is the area of the triangle?";
    
    const pointA = MathUnitReview.pickPoint();
    const slopeAB = MathUnitReview.randomSlope();
    const slopeAC = MathUnitReview.perpendicularSlope(slopeAB);
    const scaleFactorAB = MathUnitReview.randomInteger(1, 4);
    const scaleFactorAC = MathUnitReview.randomInteger(1, 4);
    
    let pointB = {};
    pointB.x = pointA.x + scaleFactorAB * slopeAB.numerator;
    pointB.y = pointA.y + scaleFactorAB * slopeAB.denominator;
    
    let pointC = {};
    pointC.x = pointA.x + scaleFactorAC * slopeAC.numerator;
    pointC.y = pointA.y + scaleFactorAC * slopeAC.denominator;

    question.stem = MathUnitReview.replaceKeywords(
      stem, {
        "pointA": MathUnitReview.formatPoint(pointA),
        "pointB": MathUnitReview.formatPoint(pointB),
        "pointC": MathUnitReview.formatPoint(pointC)
      }
    );
    
    const distAB = MathUnitReview.distance(pointA, pointB);
    const distAC = MathUnitReview.distance(pointA, pointC);
    const solution = distAB * distAC / 2;
    
    let response = [
      {"correct": true, "text":  solution.toFixed(0)},
      {"correct": false, "text": (solution + MathUnitReview.randomInteger(1, 2)).toFixed(0)},
      {"correct": false, "text": (solution - MathUnitReview.randomInteger(1, 2)).toFixed(0)},
      {"correct": false, "text": (solution + MathUnitReview.randomInteger(3, 4)).toFixed(0)}
    ];
    response.sort(() => { return Math.random() - 0.5; }); 
    
    question.response = response;

    return question;
  }
  
  static pickDifferentPoint(point)
  {
    let p = MathUnitReview.pickPoint();
    while (p.x == point.x && p.y == point.y) {
      p = MathUnitReview.pickPoint();
    }
    return p;
  }
 
  static pickPoint() 
  {
    const MINCOORD = -15;
    const MAXCOORD = 15;
    
    return {
      "x": MathUnitReview.randomInteger(MINCOORD, MAXCOORD),
      "y": MathUnitReview.randomInteger(MINCOORD, MAXCOORD)
    };
  }
  
  static randomSlope()
  {
    const numeratorSign = Math.sign(Math.random() - 0.5);
    const numerator = numeratorSign * MathUnitReview.randomInteger(1, 10);
    
    let denominator = MathUnitReview.randomInteger(1, 10);
    while (denominator == numerator) {
      denominator = MathUnitReview.randomInteger(1, 10);
    }
    
    return {
      "numerator": numerator,
      "denominator": denominator
    }
  }
  
  static handySlope()
  {
    const possibleNumerator = [1, 2, 4, 5];
    const possibleDenominator = [1, 2, 4, 5];
    
    let slope = {
      "numerator": possibleDenominator[MathUnitReview.randomInteger(0, possibleDenominator.length -1 )],
      "denominator": possibleDenominator[MathUnitReview.randomInteger(0, possibleDenominator.length -1 )]
    };
    
    slope.numerator *= Math.sign(Math.random() - 0.5);
    
    return slope;
  }
  
  static perpendicularSlope(slope)
  {
    return {
      "numerator": -1 * slope.denominator,
      "denominator": slope.numerator
    }
  }
 
  static pointOnLine(point, line)
  {
    const calculatedY = line.m * point.x + line.b;
    
    return calculatedY == point.y;
  }
  
  static randomInteger(minval, maxval)
  {
    return Math.floor(Math.random() * (maxval - minval)) + minval;
  }
  
  static distance(a, b)
  {
    return Math.sqrt( (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) );
  }
  
  static replaceKeywords(str, keywords)
  {
    let s = (' ' + str).slice(1);
    
    for (let key in keywords) {
      s = s.replace("%%" + key + "%%", keywords[key]);
    }
    
    return s;
  }
  
  static formatPoint(point) 
  {
    return "(" + point.x + ", " + point.y + ")";
  }
  
  static formatLine(line)
  {    
    let formattedB = line.b;
    if (line.b == 0) {
      formattedB = "";
    } else if (line.b >= 0) {
      formattedB = "+ " + line.b;
    }
    
    const slope = line.m;
    let formattedSlope = slope.numerator / slope.denominator;
    if (formattedSlope == 1) {
      formattedSlope = "";
    } else if (formattedSlope == -1) {
      formattedSlope = "-";
    }
    
    return "y = " + formattedSlope + "x " + formattedB;
  }
 
  static reduceRatio(ratio)
  {
    let findGCD = (a, b) => {
      return b ? findGCD(b, a%b) : a;
    };
    const gcd = findGCD(ratio.numerator, ratio.denominator);
    
    return {
      "numerator": ratio.numerator / gcd,
      "denominator": ratio.denominator / gcd
    };
  }
  
  static formatRatio(ratio)
  {
    const reduced = MathUnitReview.reduceRatio(ratio);
    
    return (reduced.numerator) + ":" + (reduced.denominator);
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
  static xAPIConfigure()
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    const xAPIEnabled = player.GetVar(vars.xAPIEnabled);
    if (!xAPIEnabled) return;
    
    const conf = {
      "endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
      "auth": "Basic " + toBase64("atelew:gijeli")
    };
    ADL.XAPIWrapper.changeConfig(conf);    
  }
  
  static xAPISend(params)
  {
    const player = GetPlayer();
    const vars = MathUnitReview.articulateVars;
    
    const xAPIEnabled = player.GetVar(vars.xAPIEnabled);
    
    const objectId = "https://www.aardvark-studios.com/math-unit-review/story";
    const objectName = "Math Unit Review";
    const objectDescription = "Storyline project for math unit review";
    const objectActivityType = "http://adlnet.gov/expapi/activities/assessment";
 
    const student = player.GetVar(vars.studentName);
    const verbInfo = MathUnitReview.xAPIVerbLookup(params.verb);
 
    const statement = {
      "actor": {
        "name": student,
        "mbox": "mailto:" + student + "@bogusmail.com"
      },
      
      "verb": {
        "id": verbInfo.id,
        "display": { "en-US": verbInfo.name }
      },
      
      "object": {
        "id": objectId,
        "definition": {
          "name": { "en-US": objectName },
          "description": { "en-US": objectDescription },
          "type": objectActivityType
        },
        "objectType": "Activity"
      }
    };
    
    if (params.hasOwnProperty("result")) statement.result = params.result;

    if (xAPIEnabled) {
      const result = ADL.XAPIWrapper.sendStatement(statement);
      console.log("xAPISend result", result);
      
    } else {
      console.log('xAPI disabled', statement);
    }
  }
  
  static xAPIVerbLookup(verbDescriptor) 
  {
    const verbInfo = {
      "completed": {"name": "completed", "id": "http://adlnet.gov/expapi/verbs/completed"},
      "abandoned": {"name": "abandoned", "id": "http://w3id.org/xapi/adl/verbs/abandoned"},
      "interacted": {"name": "interacted", "id": "http://adlnet.gov/expapi/verbs/interacted"}
    }
    
    return verbInfo[verbDescriptor];
  }
}