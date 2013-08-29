var g_bShowApiErrors = false;
var g_bShowFirstError = true;
var g_strAPINotFound = "Management system interface not found. Progress will not be saved.";
var g_strAPITooDeep = "Cannot find API - too deeply nested.";
var g_strAPIInitFailed = "Found API but Initialize failed.";
var g_strAPISetError = "Trying to set value but API not available.";
var g_bMasteryScoreInitialized = false;

/////////// API INTERFACE INITIALIZATION AND CATCHER FUNCTIONS ////////
var g_nFindAPITries = 0;
var g_objAPI = null;
var g_bInitDone = false;
var g_bFinishDone = false;
var	g_bSCOBrowse = false;
var g_dtmInitialized = new Date(); // will be adjusted after initialize

//API ERROR
function AlertUserOfAPIError(strText) {
	if ((g_bShowApiErrors) || (g_bShowFirstError)) 
		{
			alert(strText);
			g_bShowFirstError = false;
		}
}

//FIND API
function FindAPI(win) {
	while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win)) {
		g_nFindAPITries ++;
		if (g_nFindAPITries > 500) {
			AlertUserOfAPIError(g_strAPITooDeep);
			return null;
		} 
		win = win.parent;
	}
	return win.API_1484_11;
}

//API OK
function APIOK() {
	return ((typeof(g_objAPI)!= "undefined") && (g_objAPI != null))
}

//SCO INITIALIZE
function SCOInitialize() {
	var err = true;
	if (!g_bInitDone) {
		if ((window.parent) && (window.parent != window)){
			g_objAPI = FindAPI(window.parent)
		}
		if ((g_objAPI == null) && (window.opener != null))	{
			g_objAPI = FindAPI(window.opener)
		}
		if (!APIOK()) {
			AlertUserOfAPIError(g_strAPINotFound);
			err = false
		} else {
			err =  g_objAPI.Initialize("");
			if (err == "true") {
				g_bSCOBrowse = (g_objAPI.GetValue("cmi.mode") == "browse");						
				if (!g_bSCOBrowse) {
					if (g_objAPI.GetValue("cmi.completion_status") != "completed") {
						err =  g_objAPI.SetValue("cmi.completion_status","incomplete")
					}
				}
			} else {
				AlertUserOfAPIError(g_strAPIInitFailed)
			}
		}
	}
	if (typeof(SCOInitData) != "undefined") {
		SCOInitData()
	}
	g_dtmInitialized = new Date();
	return (err + "") // Force type to string
}

//SCO FINISH
function SCOFinish() {
	if ((APIOK()) && (g_bFinishDone == false)) {
		if (typeof(SCOSaveData) != "undefined"){
			SCOReportSessionTime()
			SCOSaveData();
		}
		g_bFinishDone = (g_objAPI.Terminate("") == "true");
	}
	return (g_bFinishDone + "" ) // Force type to string
}

function SCOGetValue(nam)			{return ((APIOK())?g_objAPI.GetValue(nam.toString()):"")}
function SCOCommit(parm)			{return ((APIOK())?g_objAPI.Commit(""):"false")}
function SCOGetLastError(parm){return ((APIOK())?g_objAPI.GetLastError(""):"-1")}
function SCOGetErrorString(n)	{return ((APIOK())?g_objAPI.GetErrorString(n):"No API")}
function SCOGetDiagnostic(p)	{return ((APIOK())?g_objAPI.GetDiagnostic(p):"No API")}

var g_bMinScoreAcquired = false;
var g_bMaxScoreAcquired = false;

//SCO SET VALUE
function SCOSetValue(nam,val){
	var err = "";
	if (!APIOK()){
			AlertUserOfAPIError(g_strAPISetError + "\n" + nam + "\n" + val);
			err = "false";
	}
	if (err == ""){
			err =  g_objAPI.SetValue(nam,val.toString() + "");
			if (err != "true") return err;
	}
	if (nam == "cmi.score.min"){
		g_bMinScoreAcquired = true;
		g_nSCO_ScoreMin = val;
	}
	else if (nam == "cmi.score.max"){
		g_bMaxScoreAcquired = true;
		g_nSCO_ScoreMax = val;
	}
	return err;
}

//Convert duration from milliseconds to 0000:00:00.00 format
function MillisecondsToCMIDuration(n) {
	var hms = "";
	var dtm = new Date();	dtm.setTime(n);
	var h = "000" + Math.floor(n / 3600000);
	var m = "0" + dtm.getMinutes();
	var s = "0" + dtm.getSeconds();
	var cs = "0" + Math.round(dtm.getMilliseconds() / 10);
	hms = h.substr(h.length-4)+":"+m.substr(m.length-2)+":";
	hms += s.substr(s.length-2)+"."+cs.substr(cs.length-2);
	return hms;
}

//SCO REPORT SESSION TIME
function SCOReportSessionTime() {
	var dtm = new Date();
	var n = dtm.getTime() - g_dtmInitialized.getTime();
	var formattedTime = MillisecondsToCMIDuration(n)
	timeArray = new Array(4);
	timeArray = formattedTime.split(":");
	var hours = timeArray[0];
	var minutes = timeArray[1];
	var seconds = timeArray[2];
	var newvalue = "PT" + hours + "H" + minutes + "M" + seconds + "S";
	return SCOSetValue("cmi.session_time",newvalue);
}

//SET COMPETION STATUS
function SCOSetStatusCompleted(){
	var stat = SCOGetValue("cmi.completion_status");
	if (SCOGetValue("cmi.mode") != "browse"){
		SCOSetValue("cmi.progress_measure",1);
		return SCOSetValue("cmi.completion_status","completed");
	} else return "false";
}


//Navigation functions 
//*********************
//GO TO PAGE PASSED AS PARAMETER
function GoToPage(n) {
  if ((!isNaN(n)) && (n >= 1) && (n <= znNavigablePages)){
  	if (n < 10) { cg_stage.location.href = cgPageFolder + "/"+cgPageRoot + "_0" + n + ".htm" };
  	if (n >= 10) { cg_stage.location.href = cgPageFolder + "/"+ cgPageRoot + "_" + n + ".htm" };
  }
  else if ((!isNaN(n)) && (n == 0)){
  	cg_stage.location.href = "index.htm";
  }
}

function GoToPageVersion(n) {
  if ((!isNaN(n)) && (n >= 1) && (n <= znNavigablePages)){
  	if (n < 10) { cg_stage.location.href = "../" + cgPageFolder + "/"+cgPageRoot + "_0" + n + ".htm" };
  	if (n >= 10) { cg_stage.location.href = "../" + cgPageFolder + "/"+ cgPageRoot + "_" + n + ".htm" };
  }
  else if ((!isNaN(n)) && (n == 0)){
  	cg_stage.location.href = "index.htm";
  }
}


function GoToPageBack(n) {
  if ((!isNaN(n)) && (n >= 1) && (n <= znNavigablePages)){
  	if (n < 10) { cg_stage.location.href = cgPageRoot + "_0" + n + ".htm" };
  	if (n >= 10) { cg_stage.location.href =cgPageRoot + "_" + n + ".htm" };
  }
  else if ((!isNaN(n)) && (n == 0)){
  	cg_stage.location.href = "index.htm";
  }
}

//SET PAGE: CALL BY EACH PAGE
function SetThisPage(n) { 
  var i = 0; var nCnt = 0;
  znThisPage = n;
  zaVisitedPages[n] = true;
  for (i = 1 ; i < znNavigablePages+1; i++){
    if (zaVisitedPages[i]) { nCnt++ }
  }
  zaSuspendData = zaVisitedPages.join(",");
  znSuspendLocation = znThisPage;
  
  if (nCnt == znNavigablePages) {
     SCOSetStatusCompleted();
     SCOCommit();
  }
  
  progressScore =  parseInt(nCnt / znNavigablePages * 100);
  SCOSetValue("cmi.score.raw", progressScore);
  
  SCOSetValue("cmi.exit", zaSuspendStatus);
  SCOSetValue("cmi.location", znSuspendLocation);
  SCOSetValue("cmi.suspend_data", zaSuspendData);
  SCOCommit();
}

//INITIALIZE SCO SCORM DATA
function SCOInitData() {
	var loc = znStartPage;
	var completionStatus = SCOGetValue("cmi.completion_status");
	//Set status to incomplete if is unknown
	if (completionStatus == "unknown"){
		error = SCOSetValue("cmi.completion_status", "incomplete");
		SCOCommit();
	}
	//SCO not visit first time
  	if ((SCOGetValue("cmi.entry") != "ab-initio")){
    	var SuspendData = SCOGetValue("cmi.suspend_data");
    	if (SuspendData.length > 0) {
      		zaVisitedPages = SuspendData.split(",")
    	}
    	var loc =(parseInt(SCOGetValue("cmi.location"),10));
		if (isNaN(loc)) { loc = znStartPage; }
		//this function sets competion_status to incomplete
		SCOSetValue("cmi.completion_status","incomplete");
		SCOCommit();
  	}
	GoToPage(loc);
}

//SAVE SCO SCORM DATA
function SCOSaveData(){
	var completionStatus = SCOGetValue("cmi.completion_status");
  	SCOSetValue("cmi.exit", zaSuspendStatus);
  	SCOSetValue("cmi.location", znSuspendLocation);
  	SCOSetValue("cmi.suspend_data", zaSuspendData);
  	/*SCOSetValue("cmi.exit", zaSuspendStatus);
	SCOSetValue("adl.nav.request", "suspendAll");*/
  	if(completionStatus!="completed"){
		SCOSetValue("cmi.exit", zaSuspendStatus);
		SCOSetValue("adl.nav.request", "suspendAll");
  	}else{
		SCOSetValue("cmi.exit", '');
		SCOSetValue("adl.nav.request", "exit");
	}
  	SCOCommit();
}

function initArray(anArray, aValue) {
	for (var i=0;i<anArray.length;i++) { 
		anArray[i] = aValue;
	}
}

function resetError() {
	// Allows the next error message to be output, to enable feedback from UI Events (such as saving a question respomse)
	g_bShowFirstError = true;
	return;
}
