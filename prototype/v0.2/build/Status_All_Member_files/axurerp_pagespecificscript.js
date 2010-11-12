
var PageName = 'Status_All_Member';
var PageId = 'pb39a2ade2bbb4946bfdf7c2e10ef6959'
var PageUrl = 'Status_All_Member.html'
document.title = 'Status_All_Member';

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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u62ann'), "<div id='u62Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u62', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u62').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u62based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u62base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u62based = document.getElementById('u62based');
            
InsertBeforeEnd(u62based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 不适用<BR><BR></div>");

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u180ann'), "<div id='u180Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u180', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u180').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u180based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u180base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u180based = document.getElementById('u180based');
            
InsertBeforeEnd(u180based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 完成时间<BR><BR></div>");

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u128ann'), "<div id='u128Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u128', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u128').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u128based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u128base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u128based = document.getElementById('u128based');
            
InsertBeforeEnd(u128based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u91 = document.getElementById('u91');

var u173 = document.getElementById('u173');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u173ann'), "<div id='u173Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u173', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u173').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u173based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u173base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u173based = document.getElementById('u173based');
            
InsertBeforeEnd(u173based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 未开始<BR><BR></div>");

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u23 = document.getElementById('u23');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u108ann'), "<div id='u108Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u108', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u108').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u108based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u108base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u108based = document.getElementById('u108based');
            
InsertBeforeEnd(u108based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u37ann'), "<div id='u37Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u37', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u37').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u37based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u37base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u37based = document.getElementById('u37based');
            
InsertBeforeEnd(u37based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u3 = document.getElementById('u3');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u3ann'), "<div id='u3Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u3', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u3').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u3based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u3base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u3based = document.getElementById('u3based');
            
InsertBeforeEnd(u3based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u21 = document.getElementById('u21');

var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u156 = document.getElementById('u156');

var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u185 = document.getElementById('u185');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u106ann'), "<div id='u106Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u106', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u106').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u106based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u106base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u106based = document.getElementById('u106based');
            
InsertBeforeEnd(u106based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u96ann'), "<div id='u96Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u96', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u96').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u96based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u96base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u96based = document.getElementById('u96based');
            
InsertBeforeEnd(u96based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已暂停<BR><BR></div>");

var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	NewWindow("Weekly_Report.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u132 = document.getElementById('u132');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u132ann'), "<div id='u132Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u132', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u132').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u132based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u132base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u132based = document.getElementById('u132based');
            
InsertBeforeEnd(u132based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u145ann'), "<div id='u145Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u145', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u145').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u145based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u145base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u145based = document.getElementById('u145based');
            
InsertBeforeEnd(u145based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u103 = document.getElementById('u103');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u103ann'), "<div id='u103Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u103', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u103').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u103based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u103base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u103based = document.getElementById('u103based');
            
InsertBeforeEnd(u103based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 不适用<BR><BR></div>");

var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u160ann'), "<div id='u160Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u160', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u160').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u160based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u160base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u160based = document.getElementById('u160based');
            
InsertBeforeEnd(u160based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u67ann'), "<div id='u67Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u67', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u67').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u67based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u67base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u67based = document.getElementById('u67based');
            
InsertBeforeEnd(u67based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u141ann'), "<div id='u141Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u141', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u141').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u141based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u141base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u141based = document.getElementById('u141based');
            
InsertBeforeEnd(u141based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u154ann'), "<div id='u154Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u154', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u154').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u154based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u154base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u154based = document.getElementById('u154based');
            
InsertBeforeEnd(u154based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u121ann'), "<div id='u121Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u121', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u121').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u121based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u121base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u121based = document.getElementById('u121based');
            
InsertBeforeEnd(u121based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u167 = document.getElementById('u167');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u167ann'), "<div id='u167Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u167', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u167').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u167based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u167base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u167based = document.getElementById('u167based');
            
InsertBeforeEnd(u167based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u80ann'), "<div id='u80Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u80', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u80').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u80based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u80base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u80based = document.getElementById('u80based');
            
InsertBeforeEnd(u80based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u134 = document.getElementById('u134');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u134ann'), "<div id='u134Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u134', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u134').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u134based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u134base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u134based = document.getElementById('u134based');
            
InsertBeforeEnd(u134based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u158ann'), "<div id='u158Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u158', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u158').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u158based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u158base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u158based = document.getElementById('u158based');
            
InsertBeforeEnd(u158based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u101 = document.getElementById('u101');

var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u147ann'), "<div id='u147Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u147', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u147').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u147based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u147base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u147based = document.getElementById('u147based');
            
InsertBeforeEnd(u147based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u43ann'), "<div id='u43Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
InsertBeforeEnd(u43based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 未开始<BR><BR></div>");

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u89ann'), "<div id='u89Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u89', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u89').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u89based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u89base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u89based = document.getElementById('u89based');
            
InsertBeforeEnd(u89based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u55ann'), "<div id='u55Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u55', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u55').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u55based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u55base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u55based = document.getElementById('u55based');
            
InsertBeforeEnd(u55based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已暂停<BR><BR></div>");

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u115 = document.getElementById('u115');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u115ann'), "<div id='u115Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u115', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u115').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u115based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u115base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u115based = document.getElementById('u115based');
            
InsertBeforeEnd(u115based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u69 = document.getElementById('u69');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u69ann'), "<div id='u69Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u69', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u69').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u69based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u69base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u69based = document.getElementById('u69based');
            
InsertBeforeEnd(u69based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u186ann'), "<div id='u186Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u186', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u186').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u186based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u186base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u186based = document.getElementById('u186based');
            
InsertBeforeEnd(u186based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u50ann'), "<div id='u50Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u50', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u50').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u50based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u50base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u50based = document.getElementById('u50based');
            
InsertBeforeEnd(u50based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 完成时间<BR><BR></div>");

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u119ann'), "<div id='u119Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u119', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u119').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u119based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u119base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u119based = document.getElementById('u119based');
            
InsertBeforeEnd(u119based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 全都是项目or日常 都是无色背景<BR><BR></div>");

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u82ann'), "<div id='u82Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u82', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u82').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u82based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u82base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u82based = document.getElementById('u82based');
            
InsertBeforeEnd(u82based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u78 = document.getElementById('u78');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u178 = document.getElementById('u178');

var u14 = document.getElementById('u14');

if (window.OnLoad) OnLoad();
