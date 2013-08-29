	function menuNavegacion(){
		//Quitamos el pie
		$('#footer-notoc').remove();
		var scoreRaw = window.parent.SCOGetValue("cmi.score.raw");
		if(scoreRaw==''){
			scoreRaw = "100"
		}
		var mainContentNotoc = $('#main-content-notoc');
		var divFooter = $('<div></div>').attr({'id': 'footer'});
		var divNavegacion = $('<div></div>').attr({'id': 'navegacion'});
		
		//CAPA SALIR
		var divExit = $('<div></div>').attr({'id': 'salir'});
		var btnExit = $('<a></a>').attr({'id':'btnSalir', 'href':'#',"onMouseOut": "imgSwap('img_exit','buttons/bot_salir.gif')", "onBlur":"imgSwap('img_exit','buttons/bot_salir.gif')" ,"onMouseOver":"imgSwap('img_exit','buttons/bot_salir_roll.gif')", 'onFocus': "imgSwap('img_exit','buttons/bot_salir_roll.gif')"});
		var imgExit = $('<img></img>').attr({'name': 'img_exit', 'class': 'img_vertical_align','border': 0, 'src': 'buttons/bot_salir.gif'});
		var txtExit = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Salir");
		
			btnExit.append(imgExit);
			btnExit.append(txtExit);
			divExit.append(btnExit);
			divNavegacion.append(divExit);

		//CAPA PROGRESO
		var divProgress = $('<div></div>').attr({'id': 'progreso'});
		//var divImgProgress = $('<div></div>').attr({'class': 'imgNavegationInf'});
		var imgProgress = $('<img></img>').attr({'name': 'img_progress', 'class': 'img_vertical_align', 'border': 0,'src': 'buttons/ico_progreso.gif'});
		//var divTxtProgress = $('<div></div>').attr({'class': 'txtNavegationInf'}).html("Progreso:");
		//var divNumProgress = $('<div></div>').attr({'class': 'txtProgress'}).html(scoreRaw+"%");
		var txtProgress = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Progreso:");
		var numProgress = $('<span></span>').attr({'class': 'txtProgress'}).html(scoreRaw+"%");
			
			divProgress.append(imgProgress);
			divProgress.append(txtProgress);
			divProgress.append(numProgress);
			divNavegacion.append(divProgress);
			
			/*divImgProgress.append(imgProgress);
			divProgress.append(divImgProgress);
			divProgress.append(divTxtProgress);
			divProgress.append(divNumProgress);
			divNavegacion.append(divProgress);*/
				
		
		//CAPA NAVEGACIÓN
		var divPagination = $('<div></div>').attr({'id': 'paginacion'});
			divNavegacion.append(divPagination);
		
		//CAPA ÍNDICE
		var divIndex = $('<div></div>').attr({'id': 'indice'});
		var btnIndex = $('<a></a>').attr({'href':'index.htm',"onMouseOut": "imgSwap('img_index','buttons/btn_contents_topup.gif')", "onBlur":"imgSwap('img_index','buttons/btn_contents_topup.gif')" ,"onMouseOver":"imgSwap('img_index','buttons/btn_contents_topdown.gif')", 'onFocus': "imgSwap('index_top','buttons/btn_contents_topdown.gif')"});
		//var divImgIndex = $('<div></div>').attr({'class': 'imgNavegationInf'});
		var imgIndex = $('<img></img>').attr({'name': 'img_index', 'class': 'img_vertical_align', 'border': 0, 'src': 'buttons/btn_contents_topup.gif', "border": "0","width":"25", "height":"27", "alt":"Indice"});
		//var divTxtIndex = $('<div></div>').attr({'class': 'txtNavegationInf'}).html("Indice");
		var txtIndex = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Indice");
			
			btnIndex.append(imgIndex);
			btnIndex.append(txtIndex);
			divIndex.append(btnIndex);
			divNavegacion.append(divIndex);
			
			/*divImgIndex.append(imgIndex);
			btnIndex.append(divImgIndex);
			btnIndex.append(divTxtIndex);
			divIndex.append(btnIndex);
			divNavegacion.append(divIndex);*/
	
		//CAPA GLOSARIO	
		var divGlossary = $('<div></div>').attr({'id': 'glossary'});
		var btnGlossary = $('<a></a>').attr({'href':'glossary.htm',"onMouseOut": "imgSwap('img_glossary','buttons/bot_glosario.gif')", "onBlur":"imgSwap('img_glossary','buttons/bot_glosario.gif')" ,"onMouseOver":"imgSwap('img_glossary','buttons/bot_glosario_roll.gif')", 'onFocus': "imgSwap('img_glossary','buttons/bot_glosario_roll.gif')"});
		//var divImgGlossary = $('<div></div>').attr({'class': 'imgNavegationInf'});
		var imgGlossary = $('<img></img>').attr({'name': 'img_glossary', 'class': 'img_vertical_align','border': 0,'src': 'buttons/bot_glosario.gif'});
		//var divTxtGlossary = $('<div></div>').attr({'class': 'txtNavegationInf'}).html("Glosario");
		var txtGlossary = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Glosario");
			
			btnGlossary.append(imgGlossary);
			btnGlossary.append(txtGlossary);
			divGlossary.append(btnGlossary);
			divNavegacion.append(divGlossary);
			
			/*divImgGlossary.append(imgGlossary);
			btnGlossary.append(divImgGlossary);
			btnGlossary.append(divTxtGlossary);
			divGlossary.append(btnGlossary);
			divNavegacion.append(divGlossary);*/
		
		//CAPA MODO
		var divMode = $('<div></div>').attr({'id': 'mode'});
		var btnMode= $('<a></a>').attr({'href':'javascript:parent.changeView()',"onMouseOut": "imgSwap('img_mode','buttons/bot_mode.gif')", "onBlur":"imgSwap('img_mode','buttons/bot_mode.gif')" ,"onMouseOver":"imgSwap('img_mode','buttons/bot_mode_roll.gif')", 'onFocus': "imgSwap('img_mode','buttons/bot_mode_roll.gif')"});
		//var divImgGlossary = $('<div></div>').attr({'class': 'imgNavegationInf'});
		var imgMode = $('<img></img>').attr({'name': 'img_mode', 'class': 'img_vertical_align','border': 0,'src': 'buttons/bot_mode.gif'});
		//var divTxtGlossary = $('<div></div>').attr({'class': 'txtNavegationInf'}).html("Glosario");
		var txtMode = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Modo");
			
			btnMode.append(imgMode);
			btnMode.append(txtMode);
			divMode.append(btnMode);
			divNavegacion.append(divMode);
		
		//CAPA AYUDA	
		var divHelp = $('<div></div>').attr({'id': 'help'});
		var btnHelp = $('<a></a>').attr({'href':'help.htm',"onMouseOut": "imgSwap('img_help','buttons/bot_ayuda.gif')", "onBlur":"imgSwap('img_help','buttons/bot_ayuda.gif')" ,"onMouseOver":"imgSwap('img_help','buttons/bot_ayuda_roll.gif')", 'onFocus': "imgSwap('img_help','buttons/bot_ayuda_roll.gif')"});
		//var divImgHelp = $('<div></div>').attr({'class': 'imgNavegationInf'});
		var imgHelp = $('<img></img>').attr({'name': 'img_help','class': 'img_vertical_align', 'border': 0,'src': 'buttons/bot_ayuda.gif'});
		//var divTxtHelp = $('<div></div>').attr({'class': 'txtNavegationInf'}).html("Ayuda");
		var txtHelp = $('<span></span>').attr({'class': 'txtNavegationInf'}).html("Ayuda");
			
			btnHelp.append(imgHelp);
			btnHelp.append(txtHelp);
			divHelp.append(btnHelp);
			divNavegacion.append(divHelp);
			
			/*divImgHelp.append(imgHelp);
			btnHelp.append(divImgHelp);
			btnHelp.append(divTxtHelp);
			divHelp.append(btnHelp);
			divNavegacion.append(divHelp);*/
			
		divNavegacion.append('<div class ="limpiar"></div>');
		divFooter.append(divNavegacion);
		divFooter.insertAfter(mainContentNotoc);
	}
	
	function generarPaginacion(){
		var enlaceSig ='';
		var enlaceAnt ='';
		var longPag = window.parent.znNavigablePages.toString().length;
		var numpagSig =0;
		var numpagAnt =0;
		var divPagNext ='';
		var divPagPre ='';
		var rellenarCeros ='';
		
		$('#paginacion').empty();
		
		numpagSig = window.parent.znThisPage + 1;
		if(numpagSig.toString().length<longPag){
			diff=longPag - numpagSig.toString().length;
			for(i=0; i<diff; i++){
				rellenarCeros += "0";
			}
		}
		numpagSig = window.parent.cgPageRoot+"_"+rellenarCeros + numpagSig.toString()+".htm";	
		rellenarCeros = ''
		numpagAnt = window.parent.znThisPage - 1;
		if(numpagAnt.toString().length<longPag){
			diff=longPag - numpagAnt.toString().length;
			for(i=0; i<diff; i++){
				rellenarCeros += "0";
			}
		}
		numpagAnt = window.parent.cgPageRoot+"_"+rellenarCeros + numpagAnt.toString()+".htm";
		//SI NO ESTAMOS NI EN LA PRIMERA NI EN LA ÚLTIMA PÁGINA
		if(window.parent.znThisPage!=1 && window.parent.znThisPage!=window.parent.znNavigablePages){
			//divPagNext = $('<div></div>').attr({'id':'pagNext'});
			divPagNext = $('<span></span>').attr({'id':'pagNext'});
			enlaceSig = $('<a></a>').attr({'href':numpagSig, 'onMouseOut':'imgSwap("next_bot","buttons/btn_next_botup.gif");', 'onBlur':'imgSwap("next_bot","buttons/btn_next_botup.gif")', 'onMouseOver':'imgSwap("next_bot","buttons/btn_next_botdown.gif")', 'onFocus':'imgSwap("next_bot","buttons/btn_next_botdown.gif")'}).html('<img class="img_vertical_align" name="next_bot" border="0" src="buttons/btn_next_botup.gif" width="25" height="27" alt="P&aacute;gina siguiente">');
			divPagNext. append(enlaceSig);
			//divPagPre = $('<div></div>').attr({'id':'pagPrevious'});
			divPagPre = $('<span></span>').attr({'id':'pagPrevious'});
			enlaceAnt = $('<a></a>').attr({'href':numpagAnt, 'onMouseOut':'imgSwap("prev_bot","buttons/btn_prev_botup.gif");', 'onBlur':'imgSwap("prev_bot","buttons/btn_prev_botup.gif")', 'onMouseOver':'imgSwap("prev_bot","buttons/btn_prev_botdown.gif")', 'onFocus':'imgSwap("prev_bot","buttons/btn_prev_botdown.gif")'}).html('<img class="img_vertical_align" name="prev_bot" border="0" src="buttons/btn_prev_botup.gif" width="25" height="27" alt="P&aacute;gina anterior">');			
			divPagPre. append(enlaceAnt);
			
			
			$('#paginacion').append(divPagPre);
			//$('#paginacion').append('<div class="pagNumeracion">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</div>');		
			$('#paginacion').append('<span class="pagNumeracion">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</span>');		
			$('#paginacion').append(divPagNext);
			//$('#paginacion').append('<div class ="limpiar"></div>');
			
		}else if(window.parent.znThisPage==1){
			//divPagNext = $('<div></div>').attr({'id':'pagNext'});
			divPagNext = $('<span></span>').attr({'id':'pagNext'});
			enlaceSig = $('<a></a>').attr({'href':numpagSig, 'onMouseOut':'imgSwap("next_bot","buttons/btn_next_botup.gif");', 'onBlur':'imgSwap("next_bot","buttons/btn_next_botup.gif")', 'onMouseOver':'imgSwap("next_bot","buttons/btn_next_botdown.gif")', 'onFocus':'imgSwap("next_bot","buttons/btn_next_botdown.gif")'}).html('<img class="img_vertical_align" name="next_bot" border="0" src="buttons/btn_next_botup.gif" width="25" height="27" alt="P&aacute;gina siguiente">');
			divPagNext. append(enlaceSig);
			
			$('#paginacion').append('<span class="pagNumeracion">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</span>');		
			$('#paginacion').append(divPagNext);
			//$('#paginacion').append('<div class="pagNumeracion">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</div>');		
			
			//$('#paginacion').append('<div class ="limpiar"></div>');
			
		}else{
			//divPagPre = $('<div></div>').attr({'id':'pagPrevious'});
			divPagPre = $('<span></span>').attr({'id':'pagPrevious'});
			enlaceAnt = $('<a></a>').attr({'href':numpagAnt, 'onMouseOut':'imgSwap("prev_bot","buttons/btn_prev_botup.gif");', 'onBlur':'imgSwap("prev_bot","buttons/btn_prev_botup.gif")', 'onMouseOver':'imgSwap("prev_bot","buttons/btn_prev_botdown.gif")', 'onFocus':'imgSwap("prev_bot","buttons/btn_prev_botdown.gif")'}).html('<img class="img_vertical_align" name="prev_bot" border="0" src="buttons/btn_prev_botup.gif" width="25" height="27" alt="P&aacute;gina anterior">');
			divPagPre. append(enlaceAnt);
			
			$('#paginacion').append(divPagPre);
			//$('#paginacion').append('<div class="pagNumeracion_left">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</div>');		
			$('#paginacion').append('<span class="pagNumeracion_left">'+window.parent.znThisPage +"/"+ window.parent.znNavigablePages+'</span>');		
			//$('#paginacion').append('<div class ="limpiar"></div>');
		}
	}
	
	function resizeContent(){
		var windowHeight = $(document).height();
		var headerDivHeight = $('#header').innerHeight();
		var titleDivHeight = $('#titulo_pantalla').innerHeight();
		var footerDivHeight = $('#footer').innerHeight();
		var contentDiv = $('#main-content-notoc');		
		var contentHeight = windowHeight - (headerDivHeight + titleDivHeight + footerDivHeight+30);
		contentDiv.height(contentHeight);
	}
	
	$(document).ready(function() {
		//Elimina todo los a que haya debajo del div con id=header
		//resizeContent();
		$("#header a").remove();
		$("#skipanchor").remove();
		menuNavegacion();
		generarPaginacion();
		$('#btnSalir').click (function() {
			top.close();
		});
	});
	
