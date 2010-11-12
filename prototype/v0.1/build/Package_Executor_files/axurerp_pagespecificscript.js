
var PageName = 'Package_Executor';
var PageId = 'pd88ba51577664b0ca26de7b623fa4ea6'
var PageUrl = 'Package_Executor.html'
document.title = 'Package_Executor';

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
gv_vAlignTable['u62'] = 'bottom';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u142 = document.getElementById('u142');

var u59 = document.getElementById('u59');

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'bottom';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'bottom';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'bottom';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	self.location.href="Package_Detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u128'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'bottom';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	self.location.href="Package_Receiver.html" + GetQuerystring();

}

}
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'bottom';
var u163 = document.getElementById('u163');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'bottom';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'bottom';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'bottom';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	self.location.href="Start.html" + GetQuerystring();

}

}
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'bottom';
var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	self.location.href="Package_Detail.html" + GetQuerystring();

}

}
gv_vAlignTable['u129'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'bottom';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'bottom';
var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'bottom';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'bottom';
var u144 = document.getElementById('u144');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'bottom';
var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'bottom';
var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'bottom';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'bottom';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'bottom';
var u132 = document.getElementById('u132');

var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'bottom';
var u140 = document.getElementById('u140');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'bottom';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'bottom';
var u103 = document.getElementById('u103');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'bottom';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'bottom';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'bottom';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'bottom';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'bottom';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'bottom';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u8 = document.getElementById('u8');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'bottom';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'bottom';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'bottom';
var u6 = document.getElementById('u6');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'bottom';
var u146 = document.getElementById('u146');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'bottom';
var u154 = document.getElementById('u154');

var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

	self.location.href="Login.html" + GetQuerystring();

}

}
gv_vAlignTable['u1'] = 'top';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u121 = document.getElementById('u121');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'bottom';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'bottom';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'bottom';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'bottom';
var u101 = document.getElementById('u101');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'bottom';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'bottom';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'bottom';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'bottom';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

	self.location.href="User_Admin.html" + GetQuerystring();

}

}
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'bottom';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'bottom';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="Package_Split.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'bottom';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'bottom';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'bottom';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'bottom';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'bottom';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'bottom';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'bottom';
var u86 = document.getElementById('u86');

var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'bottom';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'bottom';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'bottom';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'bottom';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'bottom';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'bottom';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'bottom';
var u111 = document.getElementById('u111');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'bottom';
var u78 = document.getElementById('u78');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'bottom';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'bottom';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'bottom';
var u14 = document.getElementById('u14');

if (window.OnLoad) OnLoad();
