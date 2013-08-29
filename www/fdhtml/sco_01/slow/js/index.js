$(document).ready(function() {
	$("#index a").each(function(){
	//obtenemos el padre del elemento
			
	var hrefIndex = $(this).attr('href');
	var tempArray = hrefIndex.split("_");
		tempArray = tempArray[1].split(".");
		
	var pageNum = parseInt(tempArray[0],10);
		if(window.parent.zaVisitedPages[pageNum]==undefined ||window.parent.zaVisitedPages[pageNum]==""){
			var parentTitle = $(this).parent();
			var txtTitle = $(this).text();
			var spanTxt = $('<span></span>').html(txtTitle);
			$(this).remove();
			parentTitle.prepend(spanTxt);
		}
	});
	

});

function volver(){
	window.parent.GoToPageBack(window.parent.znThisPage);
}
