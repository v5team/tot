
var PageName = 'prject_all';
var PageId = 'p908e6cbe11e147628c03e08339fd94cf'
var PageUrl = 'prject_all.html'
document.title = 'prject_all';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $progress = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&progress=' + encodeURIComponent($progress) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[progress\]\]/g, $progress);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u45ann'), "<div id='u45Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
InsertBeforeEnd(u45based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');

var u142 = document.getElementById('u142');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u142ann'), "<div id='u142Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u142', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u142').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u142based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u142base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u142based = document.getElementById('u142based');
            
InsertBeforeEnd(u142based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u93ann'), "<div id='u93Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u93', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u93').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u93based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u93base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u93based = document.getElementById('u93based');
            
InsertBeforeEnd(u93based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u56 = document.getElementById('u56');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u56ann'), "<div id='u56Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u56', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u56').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u56based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u56base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u56based = document.getElementById('u56based');
            
InsertBeforeEnd(u56based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u161ann'), "<div id='u161Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u161', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u161').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u161based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u161base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u161based = document.getElementById('u161based');
            
InsertBeforeEnd(u161based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u91 = document.getElementById('u91');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u91ann'), "<div id='u91Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u91', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u91').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u91based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u91base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u91based = document.getElementById('u91based');
            
InsertBeforeEnd(u91based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u206 = document.getElementById('u206');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u163ann'), "<div id='u163Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u163', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u163').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u163based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u163base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u163based = document.getElementById('u163based');
            
InsertBeforeEnd(u163based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u68ann'), "<div id='u68Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u68', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u68').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u68based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u68base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u68based = document.getElementById('u68based');
            
InsertBeforeEnd(u68based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u159 = document.getElementById('u159');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u159ann'), "<div id='u159Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u159', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u159').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u159based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u159base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u159based = document.getElementById('u159based');
            
InsertBeforeEnd(u159based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u21 = document.getElementById('u21');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u21ann'), "<div id='u21Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u21', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u21').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u21based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u21base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u21based = document.getElementById('u21based');
            
InsertBeforeEnd(u21based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u21'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u18ann'), "<div id='u18Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 进行中<BR><BR></div>");

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u170ann'), "<div id='u170Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u170', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u170').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u170based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u170base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u170based = document.getElementById('u170based');
            
InsertBeforeEnd(u170based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u185ann'), "<div id='u185Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u185', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u185').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u185based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u185base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u185based = document.getElementById('u185based');
            
InsertBeforeEnd(u185based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u49ann'), "<div id='u49Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
InsertBeforeEnd(u49based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u97ann'), "<div id='u97Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u97', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u97').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u97based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u97base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u97based = document.getElementById('u97based');
            
InsertBeforeEnd(u97based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u63 = document.getElementById('u63');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u63ann'), "<div id='u63Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u63', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u63').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u63based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u63base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u63based = document.getElementById('u63based');
            
InsertBeforeEnd(u63based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看风险<br>当存风险在时，锚点到详情风险<br>不存在则不显示此图标<BR><BR></div>");

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u95ann'), "<div id='u95Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u95', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u95').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u95based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u95base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u95based = document.getElementById('u95based');
            
InsertBeforeEnd(u95based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u125 = document.getElementById('u125');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u125ann'), "<div id='u125Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u125', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u125').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u125based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u125base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u125based = document.getElementById('u125based');
            
InsertBeforeEnd(u125based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u165ann'), "<div id='u165Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u165', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u165').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u165based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u165base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u165based = document.getElementById('u165based');
            
InsertBeforeEnd(u165based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u181 = document.getElementById('u181');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u181ann'), "<div id='u181Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u181', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u181').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u181based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u181base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u181based = document.getElementById('u181based');
            
InsertBeforeEnd(u181based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u2ann'), "<div id='u2Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u2', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u2').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u2based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u2base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u2based = document.getElementById('u2based');
            
InsertBeforeEnd(u2based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u140 = document.getElementById('u140');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u140ann'), "<div id='u140Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u140', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u140').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u140based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u140base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u140based = document.getElementById('u140based');
            
InsertBeforeEnd(u140based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u183 = document.getElementById('u183');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u183ann'), "<div id='u183Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u183', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u183').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u183based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u183base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u183based = document.getElementById('u183based');
            
InsertBeforeEnd(u183based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u70 = document.getElementById('u70');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u70ann'), "<div id='u70Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u70', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u70').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u70based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u70base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u70based = document.getElementById('u70based');
            
InsertBeforeEnd(u70based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u120 = document.getElementById('u120');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u120ann'), "<div id='u120Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u120', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u120').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u120based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u120base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u120based = document.getElementById('u120based');
            
InsertBeforeEnd(u120based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u187 = document.getElementById('u187');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u187ann'), "<div id='u187Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u187', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u187').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u187based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u187base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u187based = document.getElementById('u187based');
            
InsertBeforeEnd(u187based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u53ann'), "<div id='u53Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u53', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u53').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u53based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u53base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u53based = document.getElementById('u53based');
            
InsertBeforeEnd(u53based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 新增<BR><BR></div>");

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');

var u99 = document.getElementById('u99');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u99ann'), "<div id='u99Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u99', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u99').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u99based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u99base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u99based = document.getElementById('u99based');
            
InsertBeforeEnd(u99based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已暂停<BR><BR></div>");

var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u17ann'), "<div id='u17Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u17', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u17').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u17based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u17base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u17based = document.getElementById('u17based');
            
InsertBeforeEnd(u17based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u121ann'), "<div id='u121Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u121', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u121').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u121based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u121base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u121based = document.getElementById('u121based');
            
InsertBeforeEnd(u121based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u210 = document.getElementById('u210');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u79ann'), "<div id='u79Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u79'] = 'top';
var u188 = document.getElementById('u188');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u188ann'), "<div id='u188Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u188', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u188').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u188based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u188base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u188based = document.getElementById('u188based');
            
InsertBeforeEnd(u188based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u51ann'), "<div id='u51Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u51', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u51').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u51based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u51base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u51based = document.getElementById('u51based');
            
InsertBeforeEnd(u51based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u143 = document.getElementById('u143');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u143ann'), "<div id='u143Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u143', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u143').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u143based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u143base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u143based = document.getElementById('u143based');
            
InsertBeforeEnd(u143based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已完成<BR><BR></div>");

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');

var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u147ann'), "<div id='u147Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u147', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u147').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u147based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u147base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u147based = document.getElementById('u147based');
            
InsertBeforeEnd(u147based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u114ann'), "<div id='u114Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u114', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u114').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u114based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u114base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u114based = document.getElementById('u114based');
            
InsertBeforeEnd(u114based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u74ann'), "<div id='u74Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u74', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u74').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u74based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u74base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u74based = document.getElementById('u74based');
            
InsertBeforeEnd(u74based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u138 = document.getElementById('u138');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u138ann'), "<div id='u138Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u138', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u138').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u138based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u138base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u138based = document.getElementById('u138based');
            
InsertBeforeEnd(u138based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u136 = document.getElementById('u136');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u136ann'), "<div id='u136Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u136', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u136').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u136based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u136base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u136based = document.getElementById('u136based');
            
InsertBeforeEnd(u136based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u10 = document.getElementById('u10');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u10ann'), "<div id='u10Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u10', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u10').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u10based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u10base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u10based = document.getElementById('u10based');
            
InsertBeforeEnd(u10based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划工时<BR><BR></div>");

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u72ann'), "<div id='u72Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u72', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u72').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u72based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u72base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u72based = document.getElementById('u72based');
            
InsertBeforeEnd(u72based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u102 = document.getElementById('u102');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u102ann'), "<div id='u102Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u102', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u102').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u102based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u102base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u102based = document.getElementById('u102based');
            
InsertBeforeEnd(u102based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');

var u118 = document.getElementById('u118');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u118ann'), "<div id='u118Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u118', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u118').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u118based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u118base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u118based = document.getElementById('u118based');
            
InsertBeforeEnd(u118based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u216 = document.getElementById('u216');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u166 = document.getElementById('u166');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u166ann'), "<div id='u166Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u166', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u166').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u166based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u166base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u166based = document.getElementById('u166based');
            
InsertBeforeEnd(u166based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u98ann'), "<div id='u98Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u98', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u98').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u98based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u98base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u98based = document.getElementById('u98based');
            
InsertBeforeEnd(u98based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 查看详情<BR><BR></div>");

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	NewWindow("project_detail.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u16ann'), "<div id='u16Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u16', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u16').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u16based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u16base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u16based = document.getElementById('u16based');
            
InsertBeforeEnd(u16based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 整体进度<BR><BR></div>");

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u192ann'), "<div id='u192Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u192', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u192').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u192based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u192base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u192based = document.getElementById('u192based');
            
InsertBeforeEnd(u192based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 指向周报<BR><BR></div>");

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u47ann'), "<div id='u47Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u116ann'), "<div id='u116Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u116', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u116').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u116based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u116base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u116based = document.getElementById('u116based');
            
InsertBeforeEnd(u116based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际工时<BR><BR></div>");

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u14 = document.getElementById('u14');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u14ann'), "<div id='u14Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u14', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u14').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u14based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u14base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u14based = document.getElementById('u14based');
            
InsertBeforeEnd(u14based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

if (window.OnLoad) OnLoad();
