
var PageName = 'project_detail';
var PageId = 'p3830794168e34bf184f91abe9d15356a'
var PageUrl = 'project_detail.html'
document.title = 'project_detail';

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
            
InsertBeforeEnd(u109based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 定位到子任务<BR><BR></div>");
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u104ann'), "<div id='u104Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u104', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u104').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u104based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u104base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u104based = document.getElementById('u104based');
            
InsertBeforeEnd(u104based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 锚点至父任务<BR><BR></div>");
gv_vAlignTable['u104'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u79ann'), "<div id='u79Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 点击跳转到个人周报<BR><BR></div>");

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="Weekly_Report.html" + GetQuerystring();

}

}
gv_vAlignTable['u79'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u4 = document.getElementById('u4');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u4ann'), "<div id='u4Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u4', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u4').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u4based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u4base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u4based = document.getElementById('u4based');
            
InsertBeforeEnd(u4based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 记录所有任务包含已删除<BR><BR></div>");
gv_vAlignTable['u4'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u119 = document.getElementById('u119');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u119ann'), "<div id='u119Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u119', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u119').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u119based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u119base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u119based = document.getElementById('u119based');
            
InsertBeforeEnd(u119based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 主要的|里程碑的|阶段性的任务标记<BR><BR></div>");

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u90 = document.getElementById('u90');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u90ann'), "<div id='u90Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u90', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u90').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u90based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u90base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u90based = document.getElementById('u90based');
            
InsertBeforeEnd(u90based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 点击到具体任务<br>锚点<BR><BR></div>");

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u90'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u89ann'), "<div id='u89Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u89', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u89').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u89based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u89base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u89based = document.getElementById('u89based');
            
InsertBeforeEnd(u89based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 按最新未解决开始排列<br>未解决次序高于已解决<BR><BR></div>");
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u74ann'), "<div id='u74Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u74', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u74').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u74based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u74base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u74based = document.getElementById('u74based');
            
InsertBeforeEnd(u74based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u121 = document.getElementById('u121');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u121ann'), "<div id='u121Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u121', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u121').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u121based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u121base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u121based = document.getElementById('u121based');
            
InsertBeforeEnd(u121based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 主要的|里程碑的|阶段性的任务标记<BR><BR></div>");

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u117 = document.getElementById('u117');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u117ann'), "<div id='u117Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u117', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u117').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u117based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u117base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u117based = document.getElementById('u117based');
            
InsertBeforeEnd(u117based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 主要的|里程碑的|阶段性的任务标记<BR><BR></div>");

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u120 = document.getElementById('u120');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u120ann'), "<div id='u120Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u120', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u120').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u120based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u120base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u120based = document.getElementById('u120based');
            
InsertBeforeEnd(u120based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 主要的|里程碑的|阶段性的任务标记<BR><BR></div>");

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u91'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u108ann'), "<div id='u108Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u108', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u108').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u108based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u108base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u108based = document.getElementById('u108based');
            
InsertBeforeEnd(u108based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 按最新未解决开始排列<br>未解决次序高于已解决<br>定位到子任务<BR><BR></div>");
gv_vAlignTable['u108'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u13'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
