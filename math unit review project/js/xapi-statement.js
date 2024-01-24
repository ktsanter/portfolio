function sendTest() {	
  console.log('sendTest');
  
	const player = GetPlayer();
  
  const actorName = "Fred Flintstone";
  const actorEmail = "fred.flintstone@bogus.com";
  
  const verbID = "http://adlnet.gov/expapi/verbs/completed";
  const verbName = "completed";
  
  const objectId = "https://www.aardvark-studios.com/xapi-text";
  const objectName = "xAPI Test";
  const objectDescription = "testing xAPI send";
  const activityType = "http://adlnet.gov/expapi/activities/assessment";
	
	const conf = {
		"endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
		"auth": "Basic " + toBase64("atelew:gijeli")
	};
	ADL.XAPIWrapper.changeConfig(conf);

	const statement = {
		"actor": {
			"name": actorName,
			"mbox": "mailto:" + actorEmail
		},
		
		"verb": {
			"id": verbID,
			"display": { "en-US": verbName }
		},
		
		"object": {
			"id": objectId,
			"definition": {
				"name": { "en-US": objectName },
				"description": { "en-US": objectDescription },
				"type": activityType
			},
			"objectType": "Activity"
		}
	};
	
  console.log(statement);
  
	const result = ADL.XAPIWrapper.sendStatement(statement);
}



/*------------------------------------------------------------------------------------
 * sendStatement_Beginner
 *------------------------------------------------------------------------------------*/
function sendStatement_Beginner(verbName, verbId, objectName, objectId, objectDescription, activityType) {	
	const player = GetPlayer();
	const userNameJS = player.GetVar("userName");
	const userEmailJS = player.GetVar("userEmail");

	const conf = {
		"endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
		"auth": "Basic " + toBase64("atelew:gijeli")
	};
	ADL.XAPIWrapper.changeConfig(conf);

	const statement = {
		"actor": {
			"name": userNameJS,
			"mbox": "mailto:" + userEmailJS
		},
		
		"verb": {
			"id": verbId,
			"display": { "en-US": verbName }
		},
		
		"object": {
			"id": objectId,
			"definition": {
				"name": { "en-US": objectName },
				"description": { "en-US": objectDescription },
				"type": activityType
			},
			"objectType": "Activity"
		}
	};
	
	const result = ADL.XAPIWrapper.sendStatement(statement);
}

/*------------------------------------------------------------------------------------
 * sendStatement_TextResponse
 *------------------------------------------------------------------------------------*/
function sendStatement_TextResponse(verbName, verbId, objectName, objectId, objectDescription, activityType, openTextVar) {	
	const player = GetPlayer();
	const userNameJS = "Test User"; //player.GetVar("userName");
	const userEmailJS = "test@bogus.com"; //player.GetVar("userEmail");
	const userTextResponseJS = player.GetVar(openTextVar);

	const conf = {
		"endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
		"auth": "Basic " + toBase64("atelew:gijeli")
	};
	ADL.XAPIWrapper.changeConfig(conf);

	const statement = {
		"actor": {
			"name": userNameJS,
			"mbox": "mailto:" + userEmailJS
		},
		
		"verb": {
			"id": verbId,
			"display": { "en-US": verbName }
		},
		
		"object": {
			"id": objectId,
			"definition": {
				"name": { "en-US": objectName },
				"description": { "en-US": objectDescription },
				"type": activityType
			},
			"objectType": "Activity"
		},
		
		"result": {
			"response": userTextResponseJS
		}
	};
	
	const result = ADL.XAPIWrapper.sendStatement(statement);
}

/*------------------------------------------------------------------------------------
 * sendStatement_QuizResults
 *------------------------------------------------------------------------------------*/
function sendStatement_QuizResults(verbName, verbId, objectName, objectId) {	
	const player = GetPlayer();
	const userNameJS = "Test User"; //player.GetVar("userName");
	const userEmailJS = "test@bogus.com"; //player.GetVar("userEmail");
	
    const userScoreJS = player.GetVar("userScore");
    const maxScoreJS = player.GetVar("maxScore");
    const scaledScore = userScoreJS / maxScoreJS;
    const userPassed = (scaledScore >= 0.8);

	const conf = {
		"endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
		"auth": "Basic " + toBase64("atelew:gijeli")
	};
	ADL.XAPIWrapper.changeConfig(conf);

	const statement = {
		"actor": {
			"name": userNameJS,
			"mbox": "mailto:" + userEmailJS
		},
		
		"verb": {
			"id": verbId,
			"display": { "en-US": verbName }
		},
		
		"object": {
			"id": objectId,
			"definition": {
				"name": { "en-US": objectName }
			}
		},
		
        "result": {
            "score": {
                "min": 0,
                "max": maxScoreJS,
                "raw": userScoreJS,
                "scaled": scaledScore 
            },
            "success": userPassed
        }
	};
	
	const result = ADL.XAPIWrapper.sendStatement(statement);
}

/*------------------------------------------------------------------------------------
 * tracking duration
 *------------------------------------------------------------------------------------*/
let courseSeconds = 0;
let slideSeconds = 0;
 
let isCourseTimerActive = false;
let isSlideTimerActive = false;

window.setInterval(
    () => {
        if (isCourseTimerActive) courseSeconds++;
        if (isSlideTimerActive) slideSeconds++;
    },
    1000
);

const manageTimer = {
    "course": {
        "start": () => { isCourseTimerActive = true; },
        "stop": () => { isCourseTimerActtive = false; },
        "reset": () => { courseSeconds = 0; }
    },
    
    "slide": {
        "start": () => { isSlideTimerActive = true; },
        "stop": () => { isSlideTimerActtive = false; },
        "reset": () => { slideSeconds = 0; }
    }
};

function convertSecondsToIso(secondsVar) {
    let seconds = secondsVar;
    if (seconds > 60) {
        if (seconds > 3600) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            seconds = (seconds % 3600) % 60;
            return `PT${hours}H${minutes}M${seconds}S`;

        } else {
            const minutes = Math.floor(seconds / 60);
            seconds %= 60;
            return `PT${minutes}M${seconds}S`;
        }
    
    } else {
        return `PT${seconds}S`;
    }
}

function sendStatement_Duration(verbName, verbId, objectName, objectId, timerName) {	
	const player = GetPlayer();
	const userNameJS = "Test User"; //player.GetVar("userName");
	const userEmailJS = "test@bogus.com"; //player.GetVar("userEmail");
	
    const userScoreJS = player.GetVar("userScore");
    const maxScoreJS = player.GetVar("maxScore");
    const scaledScore = userScoreJS / maxScoreJS;
    const userPassed = (scaledScore >= 0.8);

	const conf = {
		"endpoint": "https://ksanter-test-lrs.lrs.io/xapi/",
		"auth": "Basic " + toBase64("atelew:gijeli")
	};
	ADL.XAPIWrapper.changeConfig(conf);

    let finalDuration = null;
    if (timerName == "course") {
        finalDuration = convertSecondsToIso(courseSeconds);
    } else if (timerName == "slide") {
        finalDuration = convertSecondsToIso(slideSeconds);
    }
    
	const statement = {
		"actor": {
			"name": userNameJS,
			"mbox": "mailto:" + userEmailJS
		},
		
		"verb": {
			"id": verbId,
			"display": { "en-US": verbName }
		},
		
		"object": {
			"id": objectId,
			"definition": {
				"name": { "en-US": objectName }
			}
		},
		
        "result": {
            "duration": finalDuration
        }
	};
	
	const result = ADL.XAPIWrapper.sendStatement(statement);
}
