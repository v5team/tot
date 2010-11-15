
var PageName = 'package_executor';
var PageId = 'pd88ba51577664b0ca26de7b623fa4ea6'
var PageUrl = 'package_executor.html'
document.title = 'package_executor';

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
var u45 = document.getElementById('u45');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u45ann'), "<div id='u45Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
InsertBeforeEnd(u45based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u59 = document.getElementById('u59');

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u173 = document.getElementById('u173');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u173ann'), "<div id='u173Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u173', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u173').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u173based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u173base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u173based = document.getElementById('u173based');
            
InsertBeforeEnd(u173based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 里程碑标记<BR><BR></div>");

var u90 = document.getElementById('u90');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u90ann'), "<div id='u90Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u90', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u90').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u90based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u90base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u90based = document.getElementById('u90based');
            
InsertBeforeEnd(u90based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u108ann'), "<div id='u108Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u108', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u108').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u108based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u108base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u108based = document.getElementById('u108based');
            
InsertBeforeEnd(u108based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u100 = document.getElementById('u100');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u100ann'), "<div id='u100Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u100', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u100').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u100based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u100base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u100based = document.getElementById('u100based');
            
InsertBeforeEnd(u100based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 展开<BR><BR></div>");

var u37 = document.getElementById('u37');

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
            
InsertBeforeEnd(u68based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已暂停<BR><BR></div>");

var u159 = document.getElementById('u159');

var u21 = document.getElementById('u21');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u21ann'), "<div id='u21Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u21', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u21').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u21based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u21base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u21based = document.getElementById('u21based');
            
InsertBeforeEnd(u21based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 跳转到小二查询页面<br>https://is.taobao.org/souren/Default.aspx?&amp;query=%E9%87%8A%E7%84%B6#Link~fa18387d-514e-493d-b879-ca9a9d20f2d2<BR><BR></div>");
gv_vAlignTable['u21'] = 'top';
var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');

var u156 = document.getElementById('u156');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u156ann'), "<div id='u156Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u156', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u156').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u156based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u156base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u156based = document.getElementById('u156based');
            
InsertBeforeEnd(u156based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 创建子任务<BR><BR></div>");

var u35 = document.getElementById('u35');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u35ann'), "<div id='u35Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
InsertBeforeEnd(u35based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 已完成<BR><BR></div>");

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u49ann'), "<div id='u49Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
InsertBeforeEnd(u49based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 未开始<BR><BR></div>");

var u131 = document.getElementById('u131');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u97ann'), "<div id='u97Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u97', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u97').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u97based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u97base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u97based = document.getElementById('u97based');
            
InsertBeforeEnd(u97based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u63 = document.getElementById('u63');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u63ann'), "<div id='u63Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u63', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u63').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u63based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u63base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u63based = document.getElementById('u63based');
            
InsertBeforeEnd(u63based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 完成时间<BR><BR></div>");

var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u84ann'), "<div id='u84Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u84', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u84').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u84based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u84base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u84based = document.getElementById('u84based');
            
InsertBeforeEnd(u84based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u144ann'), "<div id='u144Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u144', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u144').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u144based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u144base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u144based = document.getElementById('u144based');
            
InsertBeforeEnd(u144based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 创建一个完整的任务包<BR><BR></div>");

var u172 = document.getElementById('u172');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u172ann'), "<div id='u172Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u172', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u172').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u172based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u172base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u172based = document.getElementById('u172based');
            
InsertBeforeEnd(u172based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 提交任务项<BR><BR></div>");

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u27 = document.getElementById('u27');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u27ann'), "<div id='u27Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u27', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u27').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u27based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u27base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u27based = document.getElementById('u27based');
            
InsertBeforeEnd(u27based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 当前进度<BR><BR></div>");

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u75ann'), "<div id='u75Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
InsertBeforeEnd(u75based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 不适用<BR><BR></div>");

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u140 = document.getElementById('u140');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u140ann'), "<div id='u140Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u140', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u140').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u140based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u140base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u140based = document.getElementById('u140based');
            
InsertBeforeEnd(u140based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u25 = document.getElementById('u25');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u25ann'), "<div id='u25Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
InsertBeforeEnd(u25based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 收起<BR><BR></div>");

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');

var u1 = document.getElementById('u1');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

var u167 = document.getElementById('u167');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u101ann'), "<div id='u101Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u101', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u101').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u101based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u101base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u101based = document.getElementById('u101based');
            
InsertBeforeEnd(u101based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u150ann'), "<div id='u150Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u150', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u150').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u150based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u150base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u150based = document.getElementById('u150based');
            
InsertBeforeEnd(u150based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u43 = document.getElementById('u43');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u43ann'), "<div id='u43Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
InsertBeforeEnd(u43based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 完成时间<BR><BR></div>");

var u114 = document.getElementById('u114');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u114ann'), "<div id='u114Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u114', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u114').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u114based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u114base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u114based = document.getElementById('u114based');
            
InsertBeforeEnd(u114based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 在当前项之后增加同级内容<BR><BR></div>");

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');

var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u55 = document.getElementById('u55');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u55ann'), "<div id='u55Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u55', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u55').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u55based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u55base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u55based = document.getElementById('u55based');
            
InsertBeforeEnd(u55based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u110ann'), "<div id='u110Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u110', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u110').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u110based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u110base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u110based = document.getElementById('u110based');
            
InsertBeforeEnd(u110based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 正在进行<BR><BR></div>");

var u86 = document.getElementById('u86');

var u115 = document.getElementById('u115');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u115ann'), "<div id='u115Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u115', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u115').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u115based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u115base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u115based = document.getElementById('u115based');
            
InsertBeforeEnd(u115based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 编辑当前项<BR><BR></div>");

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	self.location.href="package_detail.html" + GetQuerystring();

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');

var u139 = document.getElementById('u139');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

var u133 = document.getElementById('u133');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u133ann'), "<div id='u133Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u133', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u133').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u133based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u133base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u133based = document.getElementById('u133based');
            
InsertBeforeEnd(u133based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u19', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u19').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u19based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u19base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u19based = document.getElementById('u19based');
            
InsertBeforeEnd(u19based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> sp<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> st<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> be<BR><BR></div><div class='anncontent'><span class='annfieldname'>Effort:</span> ef<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> ri<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> stab<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> ta<BR><BR></div><div class='anncontent'><span class='annfieldname'>Assigned To:</span> as<BR><BR></div>");

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 实际耗时<BR><BR></div>");

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u47ann'), "<div id='u47Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u31ann'), "<div id='u31Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
InsertBeforeEnd(u31based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 预期耗时<BR><BR></div>");

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u162ann'), "<div id='u162Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u162', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u162').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u162based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u162base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u162based = document.getElementById('u162based');
            
InsertBeforeEnd(u162based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 计划完成时间<BR><BR></div>");

var u29 = document.getElementById('u29');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
if (window.OnLoad) OnLoad();
