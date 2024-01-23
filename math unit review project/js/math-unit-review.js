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
    
    
    MathUnitReview.articulateVars = vars;
    MathUnitReview.questionInfo = questionInfo
    
    MathUnitReview.initializeQuestions();
    MathUnitReview.initializeResources();
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
    console.log("MathUnitReview.checkAnswers");
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
        player.SetVar(urlVars[i], "");
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
  }
  
  //------------------------------------------------------------------------------
  // private methods
  //------------------------------------------------------------------------------
  static initializeQuestions()
  {
    let qInfo = MathUnitReview.questionInfo;
    const nResponses = MathUnitReview.articulateVars.response.length;
    const letterMap = "ABCDE";
    
    const questionMakerMap = [
      MathUnitReview.makeQuestionType1,
      MathUnitReview.makeQuestionType2,
      MathUnitReview.makeQuestionType3,
      MathUnitReview.makeQuestionType4,
      MathUnitReview.makeQuestionType5
    ];
        
    qInfo.question = [];
    for (let i = 0; i < qInfo.numQuestions; i++) {      
      const q = questionMakerMap[i]();
      q.selection = -1;
      qInfo.question.push(q);
    }
    
    MathUnitReview.questionInfo = qInfo;
  }
  
  static initializeResources()
  {
    MathUnitReview.resourceMaterial = [
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
      [
      {"text": "ddd", "url": "https://www.google.com"}
      ],

      // question 4
      [
      {"text": "eee", "url": "https://www.google.com"}
      ],

      // question 5
      [
      {"text": "fff", "url": "https://www.google.com"}
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
      "What are the coordinates of a point that partitions the segment into a %%ratio%% ratio?\n\n\n\n\n";
    
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
        "ratio": MathUnitReview.formatRatio(ratio)        
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
    console.log("MathUnitReview.makeQuestionType4");

    let question = {};
    
    let stem = 
      "Which of these quadrilateral names is the most\n" +
      "specific description of the polygon formed by:\n" +
      "A: %%pointA%%\n" +
      "B: %%pointB%%\n" +
      "C: %%pointC%%\n" +
      "D: %%pointD%%\n\n" 
    
    const quadNames = [/*"square", "rectangle", */ "rhombus" /*,  "parallelogram"*/];
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
      slopeBC = MathUnitReview.handySlope();
      while (
        (slopeBC.numerator == slopeAB.numerator && slopeBC.denominator == slopeAB.denominator) ||
        (slopeBC.numerator == -1 * slopeAB.denominator && slopeBC.denominator == slopeAB.numerator)
      ) slopeBC = MathUnitReview.handySlope();
      slopeAD = {...slopeBC};
      slopeCD = {...slopeAB};

      pointD.x = pointA.x + scaleAB * slopeAD.denominator;
      pointD.y = pointA.y + scaleAB * slopeAD.numerator;
      pointC.x = pointB.x + scaleAB * slopeBC.denominator;
      pointC.y = pointB.y + scaleAB * slopeBC.numerator;
      
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
    
    console.log(solution);
    console.log("AB", MathUnitReview.formatRatio(slopeAB), scaleAB);
    //console.log("BC", MathUnitReview.formatRatio(slopeBC));
    //console.log("CD", MathUnitReview.formatRatio(slopeCD));
    console.log("AD", MathUnitReview.formatRatio(slopeAD));
    
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
    let s = str;
    
    for (let key in keywords) {
      s = s.replaceAll("%%" + key + "%%", keywords[key]);
    }
    
    return s;
  }
  
  static formatToTwoPlaces(n)
  {
    const rounded = "" + Math.round(n * 100) / 100;
    console.log(rounded);
    
    return "" + rounded;
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
 
}