
var PageName = 'package_receiver_check';
var PageId = 'pfccfd146c0d54063aec26caa8548d8c2'
var PageUrl = 'package_receiver_check.html'
document.title = 'package_receiver_check';

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

var u109 = document.getElementById('u109');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u109ann'), "<div id='u109Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u109', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u109').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u109based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u109base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u109based = document.getElementById('u109based');
            
InsertBeforeEnd(u109based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u54ann'), "<div id='u54Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u54', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u54').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u54based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u54base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u54based = document.getElementById('u54based');
            
InsertBeforeEnd(u54based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u54'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u60 = document.getElementById('u60');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u60ann'), "<div id='u60Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u60', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u60').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u60based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u60base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u60based = document.getElementById('u60based');
            
InsertBeforeEnd(u60based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u45 = document.getElementById('u45');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u45ann'), "<div id='u45Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
InsertBeforeEnd(u45based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u83 = document.getElementById('u83');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u83ann'), "<div id='u83Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u83', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u83').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u83based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u83base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u83based = document.getElementById('u83based');
            
InsertBeforeEnd(u83based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u51 = document.getElementById('u51');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u51ann'), "<div id='u51Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u51', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u51').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u51based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u51base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u51based = document.getElementById('u51based');
            
InsertBeforeEnd(u51based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 粗短断线的为2级<BR><BR></div>");

var u96 = document.getElementById('u96');

var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u79ann'), "<div id='u79Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u79'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u80ann'), "<div id='u80Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u80', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u80').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u80based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u80base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u80based = document.getElementById('u80based');
            
InsertBeforeEnd(u80based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u80'] = 'top';
var u26 = document.getElementById('u26');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u99ann'), "<div id='u99Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u99', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u99').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u99based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u99base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u99based = document.getElementById('u99based');
            
InsertBeforeEnd(u99based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u99'] = 'top';
var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u23ann'), "<div id='u23Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u23', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u23').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u23based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u23base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u23based = document.getElementById('u23based');
            
InsertBeforeEnd(u23based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u110 = document.getElementById('u110');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u110ann'), "<div id='u110Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u110', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u110').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u110based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u110base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u110based = document.getElementById('u110based');
            
InsertBeforeEnd(u110based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u20ann'), "<div id='u20Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u20', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u20').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u20based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u20base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u20based = document.getElementById('u20based');
            
InsertBeforeEnd(u20based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u48ann'), "<div id='u48Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
InsertBeforeEnd(u48based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u11 = document.getElementById('u11');

var u64 = document.getElementById('u64');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u64ann'), "<div id='u64Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u64', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u64').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u64based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u64base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u64based = document.getElementById('u64based');
            
InsertBeforeEnd(u64based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u39ann'), "<div id='u39Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u39', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u39').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u39based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u39base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u39based = document.getElementById('u39based');
            
InsertBeforeEnd(u39based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u39'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u93ann'), "<div id='u93Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u93', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u93').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u93based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u93base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u93based = document.getElementById('u93based');
            
InsertBeforeEnd(u93based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');

var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');

var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u84ann'), "<div id='u84Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u84', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u84').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u84based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u84base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u84based = document.getElementById('u84based');
            
InsertBeforeEnd(u84based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u90 = document.getElementById('u90');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u90ann'), "<div id='u90Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u90', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u90').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u90based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u90base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u90based = document.getElementById('u90based');
            
InsertBeforeEnd(u90based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');

var u136 = document.getElementById('u136');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u101 = document.getElementById('u101');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u24 = document.getElementById('u24');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u24ann'), "<div id='u24Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u24', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u24').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u24based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u24base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u24based = document.getElementById('u24based');
            
InsertBeforeEnd(u24based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u24'] = 'top';
var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
InsertBeforeEnd(u15based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u21 = document.getElementById('u21');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u49ann'), "<div id='u49Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
InsertBeforeEnd(u49based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u65ann'), "<div id='u65Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u65', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u65').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u65based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u65base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u65based = document.getElementById('u65based');
            
InsertBeforeEnd(u65based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u65'] = 'top';
var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');

var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u94 = document.getElementById('u94');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u94ann'), "<div id='u94Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u94', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u94').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u94based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u94base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u94based = document.getElementById('u94based');
            
InsertBeforeEnd(u94based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u120 = document.getElementById('u120');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u120ann'), "<div id='u120Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u120', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u120').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u120based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u120base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u120based = document.getElementById('u120based');
            
InsertBeforeEnd(u120based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u125 = document.getElementById('u125');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u125ann'), "<div id='u125Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u125', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u125').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u125based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u125base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u125based = document.getElementById('u125based');
            
InsertBeforeEnd(u125based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u125'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u18ann'), "<div id='u18Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1 = document.getElementById('u1');

var u34 = document.getElementById('u34');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u34ann'), "<div id='u34Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u34', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u34').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u34based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u34base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u34based = document.getElementById('u34based');
            
InsertBeforeEnd(u34based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u68 = document.getElementById('u68');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u68ann'), "<div id='u68Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u68', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u68').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u68based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u68base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u68based = document.getElementById('u68based');
            
InsertBeforeEnd(u68based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u75ann'), "<div id='u75Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
InsertBeforeEnd(u75based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u8ann'), "<div id='u8Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u8', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u8').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u8based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u8base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u8based = document.getElementById('u8based');
            
InsertBeforeEnd(u8based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u132 = document.getElementById('u132');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u95ann'), "<div id='u95Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u95', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u95').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u95based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u95base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u95based = document.getElementById('u95based');
            
InsertBeforeEnd(u95based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u95'] = 'top';
var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u108ann'), "<div id='u108Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u108', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u108').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u108based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u108base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u108based = document.getElementById('u108based');
            
InsertBeforeEnd(u108based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u113 = document.getElementById('u113');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u113ann'), "<div id='u113Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u113', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u113').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u113based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u113base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u113based = document.getElementById('u113based');
            
InsertBeforeEnd(u113based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u47 = document.getElementById('u47');

var u53 = document.getElementById('u53');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u53ann'), "<div id='u53Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u53', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u53').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u53based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u53base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u53based = document.getElementById('u53based');
            
InsertBeforeEnd(u53based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u114ann'), "<div id='u114Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u114', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u114').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u114based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u114base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u114based = document.getElementById('u114based');
            
InsertBeforeEnd(u114based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u2ann'), "<div id='u2Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u2', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u2').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u2based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u2base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u2based = document.getElementById('u2based');
            
InsertBeforeEnd(u2based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u124 = document.getElementById('u124');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u124ann'), "<div id='u124Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u124', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u124').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u124based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u124base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u124based = document.getElementById('u124based');
            
InsertBeforeEnd(u124based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u124'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u50ann'), "<div id='u50Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u50', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u50').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u50based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u50base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u50based = document.getElementById('u50based');
            
InsertBeforeEnd(u50based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u50'] = 'top';
var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u19', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u19').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u19based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u19base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u19based = document.getElementById('u19based');
            
InsertBeforeEnd(u19based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u41 = document.getElementById('u41');

var u111 = document.getElementById('u111');

var u69 = document.getElementById('u69');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u69ann'), "<div id='u69Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u69', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u69').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u69based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u69base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u69based = document.getElementById('u69based');
            
InsertBeforeEnd(u69based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u123ann'), "<div id='u123Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u123', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u123').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u123based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u123base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u123based = document.getElementById('u123based');
            
InsertBeforeEnd(u123based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u98 = document.getElementById('u98');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u98ann'), "<div id='u98Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u98', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u98').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u98based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u98base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u98based = document.getElementById('u98based');
            
InsertBeforeEnd(u98based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u9 = document.getElementById('u9');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u9ann'), "<div id='u9Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u9', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u9').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u9based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u9base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u9based = document.getElementById('u9based');
            
InsertBeforeEnd(u9based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转至项目详情<BR><BR></div>");

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="project_detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');

var u105 = document.getElementById('u105');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u105ann'), "<div id='u105Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u105', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u105').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u105based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u105base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u105based = document.getElementById('u105based');
            
InsertBeforeEnd(u105based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u6 = document.getElementById('u6');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u6ann'), "<div id='u6Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u6', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u6').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u6based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u6base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u6based = document.getElementById('u6based');
            
InsertBeforeEnd(u6based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 注意边框<br>实线的为1级<BR><BR></div>");

var u35 = document.getElementById('u35');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u35ann'), "<div id='u35Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
InsertBeforeEnd(u35based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u63ann'), "<div id='u63Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u63', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u63').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u63based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u63base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u63based = document.getElementById('u63based');
            
InsertBeforeEnd(u63based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 加入到资源报告中<BR><BR></div>");

var u38 = document.getElementById('u38');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u38ann'), "<div id='u38Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u38', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u38').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u38based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u38base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u38based = document.getElementById('u38based');
            
InsertBeforeEnd(u38based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
