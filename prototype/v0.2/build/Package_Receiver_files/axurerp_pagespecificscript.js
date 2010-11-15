
var PageName = 'package_receiver';
var PageId = 'p2a0a5125207a4acabe66ac1bddc55fe4'
var PageUrl = 'package_receiver.html'
document.title = 'package_receiver';

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

var u2 = document.getElementById('u2');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u2ann'), "<div id='u2Note' class='annnotelabel' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u2', 300, 300, false)\">?</div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u2').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u2based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u2base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u2based = document.getElementById('u2based');
            
InsertBeforeEnd(u2based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 返回引导页<BR><BR></div>");

var u1 = document.getElementById('u1');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u5 = document.getElementById('u5');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
