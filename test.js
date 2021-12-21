
$(function() {

	$("#accordion").accordion({
		heightStyle:"content",
		collapsible:true,
		active:false,
		icons:{"header": "ui-icon-plus", "activeHeader": "ui-icon-minus"}
	});
	
	// Begin script to open accordion panels via an external link with hash
	// Position the script here
	var hash = window.location.hash;
	var anchor = $('a[href$="'+hash+'"]');
	if (anchor.length > 0){
		anchor.click();
	}
	// End

});