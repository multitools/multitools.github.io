function copyToClipboard(textareaId){
	var textarea = document.querySelector('#' + textareaId);
	textarea.select();
	try{
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		alert('Copying text command was ' + msg);
	}catch(err){
		alert('Oops, unable to copy');
	}
}

function printValue(value, areaToPrint){
	document.getElementById(areaToPrint).value = value;
}

$('#reset-text').click(function(){
	emptyTag('text');
});

function emptyTag(fieldId){
	$('#' + fieldId).empty();
	document.getElementById(fieldId).value = '';
}

var _gaq = [['_setAccount', 'UA-63633330-2'], ['_trackPageview']];
(function(d, t){
	var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));