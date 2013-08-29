(function(){
	var mzName = "com_aquafadas_mz_v2";
	var mz = window[mzName];
	//modified by MZ-------
	var mzDoc = {"id":"Document_0","h":410,"bgc":[255,255,255,1],"slides":[{"id":"Slide_0","components":{"VectorTextComponent_59":{"id":"VectorTextComponent_59","txts":["reiniciar"],"type":"VectorTextComponent","settings":{"txtAl":"left","x":69,"txt":0,"mh":100,"y":16,"m":"none","mw":100,"ox":0,"txtS":13,"h":24,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":106,"txtF":"Arial"}},"RectangleShapeComponent_20":{"id":"RectangleShapeComponent_20","type":"RectangleShapeComponent","settings":{"gy2":0,"mh":100,"btl":true,"bc":[0,0,0],"mw":100,"btr":true,"gy1":0,"gc2":[0,0,0],"h":87,"gnc":1,"gc4":[0,0,0],"gc1":[75,231,228],"gr2":1,"gc0":[233,233,233],"gra":0,"gr3":1,"gr1":1,"bbr":true,"x":355,"w":709,"y":368,"gr4":1,"m":"none","ox":0.5,"oy":0.5,"gc3":[0,0,0],"my":0,"gx2":1,"mx":0,"gx1":0,"bbl":true,"gr":false}},"ImageComponent_36":{"id":"ImageComponent_36","type":"ImageComponent","settings":{"x":203,"mh":100,"y":271,"src":"./assets/Media-1354102164.4666.png","m":"none","mw":100,"ox":0.5,"h":39,"my":0,"mx":0,"oy":0.5,"w":54}},"ImageComponent_34":{"id":"ImageComponent_34","type":"ImageComponent","settings":{"x":325,"mh":100,"y":164,"src":"./assets/Media-1354096632.3014.jpeg","m":"none","mw":100,"ox":0.5,"h":324,"my":0,"mx":0,"oy":0.5,"w":302}},"VectorTextComponent_60":{"id":"VectorTextComponent_60","txts":["reiniciar"],"type":"VectorTextComponent","settings":{"txtAl":"left","x":69,"txt":0,"mh":100,"y":16,"m":"none","mw":100,"ox":0,"txtS":13,"h":24,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":106,"txtF":"Arial"}},"VectorTextComponent_15":{"id":"VectorTextComponent_15","txts":["Supongamos que partimos de una situación como la que se muestra en la figura con la tabla NAT vacía y en la que el PC1 envía datos al servidor S1 que está conectado a Internet. ","Supongamos que partimos de una situación como la que se muestra en la figura con la tabla NAT vacía y en la que el PC1 envía datos al servidor S1 que está conectado a Internet. ","Cuando el paquete llega al router, éste incluye en su tabla la equivalencia entre la dirección de origen privada (172.16.1.10) y la dirección pública que le asigna para que el paquete pueda ser enrutado en Internet. En este caso, la dirección asignada es la primera que hay libre en el pool de direcciones (previamente configurado en el NAT) : 200.2.2.10","Cuando vuelve la respuesta desde S1, su dirección de origen es la de S1 (205.2.1.6)  y  de destino la que el router asignó al hacer NAT (200.2.2.10). ","Para que el paquete pueda ser entregado a su destinatario en la red local, es necesario revertir el cambio inicial. Para ello, el router consulta su tabla de NAT buscando el registro con dirección de salida 200.2.2.10, y sustituye en el paquete dicha dirección con la original: 172.16.1.10. Una vez realizado el cambio, ya puede reenviar el paquete a través de la interfaz local correspondiente para que llegue la respuesta a PC1."],"type":"VectorTextComponent","settings":{"txtAl":"left","x":42,"txt":0,"mh":100,"y":355,"m":"none","mw":100,"ox":0,"txtS":13,"h":49,"txtC":"#000000","my":0,"mx":0,"oy":0,"w":592,"txtF":"Arial"}},"VectorTextComponent_64":{"id":"VectorTextComponent_64","txts":["Cuando el paquete llega al router, éste incluye en su tabla la equivalencia entre la dirección de origen privada (172.16.1.10) y la dirección pública que le asigna para que el paquete pueda ser enrutado en Internet. En este caso, la dirección asignada es la primera que hay libre en el pool de direcciones (previamente configurado en el NAT) : 200.2.2.10"],"type":"VectorTextComponent","settings":{"txtAl":"left","x":356,"txt":0,"mh":100,"y":377,"m":"none","mw":100,"ox":0.5,"txtS":13,"h":82,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0.5,"w":639,"txtF":"Arial"}},"ImageComponent_27":{"id":"ImageComponent_27","type":"ImageComponent","settings":{"x":50,"mh":100,"y":30,"src":"./assets/Media-1353342909.0623.png","m":"none","mw":100,"ox":0.5,"h":51,"my":0,"mx":0,"v":false,"oy":0.5,"w":52}},"VectorTextComponent_51":{"id":"VectorTextComponent_51","txts":["iniciar","continuar","iniciar"],"type":"VectorTextComponent","settings":{"txtAl":"left","x":74,"txt":0,"mh":100,"y":20,"m":"none","mw":100,"ox":0,"txtS":13,"h":21,"txtC":"#000000","my":0,"mx":0,"oy":0,"w":93,"txtF":"Arial"}},"VectorTextComponent_44":{"id":"VectorTextComponent_44","txts":["Pool de direcciones NAT: 200.200.200.10-20\rTabla NAT estática\rIn    Out\r-----------------------------------------","Pool de direcciones NAT: 200.200.200.10-20\rTabla NAT estática\rIn    Out"],"type":"VectorTextComponent","settings":{"txtAl":"center","x":380,"txt":0,"mh":100,"y":143,"m":"none","mw":100,"ox":0,"txtS":13,"h":64,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":264,"txtF":"Arial"}},"VectorTextComponent_35":{"id":"VectorTextComponent_35","txts":["172.16.1.10"],"type":"VectorTextComponent","settings":{"txtAl":"center","x":423,"txt":0,"mh":100,"y":202,"m":"none","mw":100,"ox":0,"txtS":13,"h":21,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":93,"txtF":"Arial"}},"ImageComponent_21":{"id":"ImageComponent_21","type":"ImageComponent","settings":{"x":50,"mh":100,"y":30,"src":"./assets/Media-1353340984.5376.png","m":"none","mw":100,"ox":0.5,"w":52,"h":51,"my":0,"mx":0,"oy":0.5,"btn":true,"oc":{"arg2":null,"type":"play","arg3":null,"arg1":null}}},"ImageComponent_28":{"id":"ImageComponent_28","type":"ImageComponent","settings":{"x":175,"r":-60,"mh":100,"y":295,"src":"./assets/Media-1353343637.9889.png","m":"none","mw":100,"ox":0,"h":24,"my":0,"mx":0,"v":false,"oy":0,"w":69}},"VectorTextComponent_31":{"id":"VectorTextComponent_31","txts":["200.2.2.10 "],"type":"VectorTextComponent","settings":{"txtAl":"center","x":525,"txt":0,"mh":100,"y":200,"m":"none","mw":100,"ox":0,"txtS":13,"h":20,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":79,"txtF":"Arial"}},"VectorTextComponent_37":{"id":"VectorTextComponent_37","txts":["172.16.1.10"],"type":"VectorTextComponent","settings":{"txtAl":"center","x":423,"txt":0,"mh":100,"y":203,"m":"none","mw":100,"ox":0,"txtS":13,"h":21,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":93,"txtF":"Arial Rounded MT Bold"}},"ImageComponent_23":{"id":"ImageComponent_23","type":"ImageComponent","settings":{"x":50,"mh":100,"y":30,"src":"./assets/Media-1353341028.9552.png","m":"none","mw":100,"ox":0.5,"h":51,"my":0,"mx":0,"v":false,"oy":0.5,"w":52}},"ImageComponent_38":{"id":"ImageComponent_38","type":"ImageComponent","settings":{"x":406,"mh":100,"y":43,"src":"./assets/Media-1354102327.5035.png","m":"none","mw":100,"ox":0.5,"h":45,"my":0,"mx":0,"v":false,"oy":0.5,"w":49}},"VectorTextComponent_69":{"id":"VectorTextComponent_69","txts":["Para que el paquete pueda ser entregado a su destinatario en la red local, es necesario revertir el cambio inicial. Para ello, el router consulta su tabla de NAT buscando el registro con dirección de salida 200.2.2.10, y sustituye en el paquete dicha dirección con la original: 172.16.1.10. Una vez realizado el cambio, ya puede reenviar el paquete a través de la interfaz local correspondiente para que llegue la respuesta a PC1."],"type":"VectorTextComponent","settings":{"txtAl":"left","x":357,"txt":0,"mh":100,"y":379,"m":"none","mw":100,"ox":0.5,"txtS":13,"h":78,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0.5,"w":632,"txtF":"Arial"}},"RectangleShapeComponent_12":{"id":"RectangleShapeComponent_12","type":"RectangleShapeComponent","settings":{"gy2":0,"mh":100,"btl":true,"bc":[0,0,0],"mw":100,"btr":true,"gy1":0,"gc2":[0,0,0],"h":1,"gnc":1,"gc4":[0,0,0],"gc1":[53,47,199],"v":false,"gr2":1,"gc0":[0,0,0],"gra":0,"gr3":1,"gr1":1,"bbr":true,"x":515,"w":177,"y":212,"gr4":1,"m":"none","ox":0.5,"oy":0.5,"gc3":[0,0,0],"my":0,"gx2":1,"mx":0,"gx1":0,"bbl":true,"gr":false}},"VectorTextComponent_12":{"id":"VectorTextComponent_12","txts":["Orig.: 172.16.1.10\rDsti.: 205.2.1.6\r","Orig.: 172.16.1.10\rDsti.: 205.2.1.6\r","Orig.: 200.2.2.10\rDsti.: 205.2.1.6\r","Orig.: 205.2.1.6\rDsti.: 200.2.2.10\r","Orig.: 205.2.1.6\rDsti.: 172.16.1.10"],"type":"VectorTextComponent","settings":{"txtAl":"left","x":56,"txt":0,"mh":100,"y":263,"m":"none","mw":100,"ox":0,"txtS":13,"h":38,"txtC":"#000000","my":0,"mx":0,"oy":0,"w":133,"txtF":"Arial"}},"RectangleShapeComponent_2":{"id":"RectangleShapeComponent_2","type":"RectangleShapeComponent","settings":{"gy2":0,"mh":100,"btl":true,"bc":[0,0,0],"mw":100,"btr":true,"gy1":0,"gc2":[0,0,0],"h":40,"gnc":1,"gc4":[0,0,0],"gc1":[214,99,221],"gr2":1,"gc0":[255,180,0],"gra":0,"gr3":1,"gr1":1,"bbr":true,"x":114,"w":126,"y":280,"gr4":1,"m":"none","ox":0.5,"oy":0.5,"gc3":[0,0,0],"my":0,"gx2":1,"mx":0,"gx1":0,"bbl":true,"gr":false}},"VectorTextComponent_47":{"id":"VectorTextComponent_47","txts":["Pool de direcciones NAT: 200.2.2.10-20\rTabla NAT estática\rIn    Out"],"type":"VectorTextComponent","settings":{"txtAl":"center","x":380,"txt":0,"mh":100,"y":143,"m":"none","mw":100,"ox":0,"txtS":13,"h":51,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0,"w":264,"txtF":"Arial"}},"VectorTextComponent_50":{"id":"VectorTextComponent_50","txts":["----------------------------------------- "],"type":"VectorTextComponent","settings":{"txtAl":"center","x":515,"txt":0,"mh":100,"y":192,"m":"none","mw":100,"ox":0.5,"txtS":15,"h":19,"txtC":"#000000","my":0,"mx":0,"v":false,"oy":0.5,"w":250,"txtF":"Arial"}},"RectangleShapeComponent_17":{"id":"RectangleShapeComponent_17","type":"RectangleShapeComponent","settings":{"gy2":0,"mh":100,"btl":true,"bc":[0,0,0],"mw":100,"btr":true,"gy1":0,"gc2":[0,0,0],"h":96,"gnc":1,"gc4":[0,0,0],"gc1":[145,60,235],"v":false,"gr2":1,"gc0":[223,220,220],"gra":0,"gr3":1,"gr1":1,"bbr":true,"x":514,"w":270,"y":186,"gr4":1,"m":"none","ox":0.5,"oy":0.5,"gc3":[0,0,0],"my":0,"gx2":1,"mx":0,"gx1":0,"bbl":true,"gr":false}}},"states":[{"transitions":{},"onEnd":null,"sortedDisplayList":["ImageComponent_34","RectangleShapeComponent_20","VectorTextComponent_64","VectorTextComponent_69","VectorTextComponent_51","VectorTextComponent_59","ImageComponent_21","ImageComponent_23","RectangleShapeComponent_17","RectangleShapeComponent_2","VectorTextComponent_12","VectorTextComponent_15","VectorTextComponent_31","RectangleShapeComponent_12","VectorTextComponent_35","VectorTextComponent_37","VectorTextComponent_44","VectorTextComponent_47","VectorTextComponent_50","ImageComponent_27","ImageComponent_28","VectorTextComponent_60","ImageComponent_36","ImageComponent_38"],"duration":0,"onStart":{"arg2":null,"type":"pause","arg3":null,"arg1":null}},{"onEnd":null,"transitions":{"VectorTextComponent_35":{},"ImageComponent_21":{"btn":{"d":0,"v":false},"v":{"d":0,"v":false}},"VectorTextComponent_15":{"h":{"d":0,"v":58},"txt":{"d":0,"v":1},"w":{"d":0,"v":593}},"VectorTextComponent_31":{"y":{"d":0,"v":203}},"VectorTextComponent_37":{},"ImageComponent_23":{"v":{"d":0,"v":true}},"ImageComponent_28":{},"VectorTextComponent_47":{},"VectorTextComponent_51":{"v":{"d":0,"v":false}},"VectorTextComponent_44":{}},"duration":0,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_17":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":219},"y":{"e":"linear","d":1,"v":209}},"VectorTextComponent_44":{},"VectorTextComponent_35":{},"VectorTextComponent_31":{},"VectorTextComponent_37":{},"RectangleShapeComponent_12":{},"VectorTextComponent_12":{"x":{"e":"linear","d":1,"v":85},"y":{"e":"linear","d":1,"v":149}},"RectangleShapeComponent_2":{"x":{"e":"linear","d":1,"v":142},"y":{"e":"linear","d":1,"v":166}},"VectorTextComponent_47":{},"VectorTextComponent_50":{},"ImageComponent_36":{"x":{"e":"linear","d":1,"v":247},"y":{"e":"linear","d":1,"v":175}}},"duration":2,"onStart":null},{"onEnd":null,"transitions":{"VectorTextComponent_51":{"v":{"d":0,"v":true},"txt":{"d":0,"v":1}},"VectorTextComponent_44":{"v":{"d":0,"v":true},"txt":{"d":0,"v":1}},"VectorTextComponent_35":{},"ImageComponent_21":{"v":{"d":0,"v":true},"btn":{"d":0,"v":true}},"VectorTextComponent_31":{},"VectorTextComponent_37":{},"ImageComponent_23":{"v":{"d":0,"v":false}},"RectangleShapeComponent_12":{},"VectorTextComponent_12":{"txt":{"d":0,"v":1}},"VectorTextComponent_47":{},"VectorTextComponent_50":{"v":{"d":0,"v":true}},"RectangleShapeComponent_17":{"gc0":{"d":0,"v":[252,239,208]},"v":{"d":0,"v":true}}},"duration":0,"onStart":{"arg2":null,"type":"pause","arg3":null,"arg1":null}},{"onEnd":null,"transitions":{"VectorTextComponent_35":{},"ImageComponent_21":{"btn":{"d":0,"v":false},"v":{"d":0,"v":false}},"VectorTextComponent_31":{},"VectorTextComponent_37":{},"ImageComponent_23":{"v":{"d":0,"v":true}},"VectorTextComponent_64":{"x":{"d":0,"v":42},"oy":{"d":0,"v":0},"ox":{"d":0,"v":0},"w":{"d":0,"v":604},"y":{"d":0,"v":340}},"VectorTextComponent_47":{},"VectorTextComponent_51":{"v":{"d":0,"v":false}},"VectorTextComponent_44":{}},"duration":0,"onStart":null},{"onEnd":null,"transitions":{"VectorTextComponent_35":{"v":{"d":0,"v":true}},"VectorTextComponent_31":{"v":{"d":0,"v":true}},"VectorTextComponent_37":{},"RectangleShapeComponent_12":{},"VectorTextComponent_15":{"h":{"e":"linear","d":1,"v":77},"txt":{"d":0,"v":2},"y":{"e":"linear","d":1,"v":343},"v":{"d":0,"v":false}},"VectorTextComponent_64":{"h":{"e":"linear","d":1,"v":81},"w":{"e":"linear","d":1,"v":612},"v":{"d":0,"v":true}},"VectorTextComponent_47":{"v":{"d":0,"v":true}},"VectorTextComponent_44":{"v":{"d":0,"v":false}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"VectorTextComponent_12":{"txt":{"d":0,"v":2}},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":247},"r":{"e":"linear","d":1,"v":-90}},"VectorTextComponent_37":{}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"ImageComponent_28":{"y":{"e":"linear","d":1,"v":156}},"VectorTextComponent_37":{},"RectangleShapeComponent_12":{},"VectorTextComponent_12":{"y":{"e":"linear","d":1,"v":63}},"RectangleShapeComponent_2":{"y":{"e":"linear","d":1,"v":79}},"ImageComponent_36":{"x":{"e":"linear","d":1,"v":244},"y":{"e":"linear","d":1,"v":89}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":227},"r":{"e":"linear","d":1,"v":-40},"y":{"e":"linear","d":1,"v":111}},"VectorTextComponent_37":{}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":315},"y":{"e":"linear","d":1,"v":51}},"VectorTextComponent_37":{},"ImageComponent_36":{"x":{"e":"linear","d":1,"v":376},"y":{"e":"linear","d":1,"v":38}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"ImageComponent_36":{"a":{"e":"linear","d":1,"v":0}},"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":366},"r":{"e":"linear","d":1,"v":0},"a":{"e":"linear","d":1,"v":0},"y":{"e":"linear","d":1,"v":16}},"VectorTextComponent_37":{},"ImageComponent_38":{}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"d":0,"v":416},"r":{"d":0,"v":-80},"y":{"d":0,"v":11},"sx":{"d":0,"v":-1}},"VectorTextComponent_37":{},"ImageComponent_38":{"a":{"d":0,"v":0},"v":{"d":0,"v":true}}},"duration":0,"onStart":null},{"onEnd":null,"transitions":{"VectorTextComponent_35":{},"ImageComponent_28":{"a":{"e":"linear","d":1,"v":1}},"VectorTextComponent_37":{},"ImageComponent_38":{"a":{"e":"linear","d":1,"v":1}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"ImageComponent_21":{"v":{"d":0,"v":true},"btn":{"d":0,"v":true}},"VectorTextComponent_37":{},"ImageComponent_23":{"v":{"d":0,"v":false}},"ImageComponent_38":{"x":{"e":"linear","d":1,"v":339},"y":{"e":"linear","d":1,"v":110}},"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":361},"r":{"e":"linear","d":1,"v":-40},"y":{"e":"linear","d":1,"v":74}},"VectorTextComponent_51":{"v":{"d":0,"v":true}}},"duration":1,"onStart":{"arg2":null,"type":"pause","arg3":null,"arg1":null}},{"onEnd":null,"transitions":{"VectorTextComponent_35":{"v":{"d":0,"v":false}},"ImageComponent_21":{"btn":{"d":0,"v":false},"v":{"d":0,"v":false}},"VectorTextComponent_31":{},"VectorTextComponent_37":{"v":{"d":0,"v":true}},"ImageComponent_23":{"v":{"d":0,"v":true}},"VectorTextComponent_15":{"y":{"d":0,"v":350}},"VectorTextComponent_51":{"v":{"d":0,"v":false}}},"duration":0,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{"y":{"e":"linear","d":1,"v":209}},"VectorTextComponent_12":{"txt":{"d":0,"v":3}},"VectorTextComponent_15":{"v":{"d":0,"v":true},"txt":{"d":0,"v":3}},"VectorTextComponent_64":{"v":{"d":0,"v":false}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":319},"r":{"e":"linear","d":1,"v":-90},"y":{"e":"linear","d":1,"v":76}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"ImageComponent_21":{"btn":{"d":0,"v":true},"v":{"d":0,"v":true}},"ImageComponent_28":{"y":{"e":"linear","d":1,"v":139}},"ImageComponent_23":{"v":{"d":0,"v":false}},"ImageComponent_38":{"y":{"e":"linear","d":1,"v":180}},"RectangleShapeComponent_12":{},"VectorTextComponent_12":{"x":{"e":"linear","d":1,"v":84},"y":{"e":"linear","d":1,"v":153}},"RectangleShapeComponent_2":{"y":{"e":"linear","d":1,"v":170}},"VectorTextComponent_51":{"v":{"d":0,"v":true}}},"duration":1,"onStart":{"arg2":null,"type":"pause","arg3":null,"arg1":null}},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{},"VectorTextComponent_69":{"x":{"d":0,"v":42},"oy":{"d":0,"v":0},"ox":{"d":0,"v":0},"w":{"d":0,"v":608},"y":{"d":0,"v":330}},"ImageComponent_21":{"v":{"d":0,"v":false},"btn":{"d":0,"v":false}},"VectorTextComponent_51":{"v":{"d":0,"v":false}},"ImageComponent_23":{"v":{"d":0,"v":true}}},"duration":0,"onStart":null},{"onEnd":null,"transitions":{"VectorTextComponent_69":{"v":{"d":0,"v":true}},"VectorTextComponent_12":{"txt":{"d":0,"v":4}},"VectorTextComponent_15":{"v":{"d":0,"v":false},"txt":{"d":0,"v":4}},"VectorTextComponent_64":{}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{"w":{"e":"linear","d":1,"v":1},"x":{"e":"linear","d":1,"v":428}},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":346},"r":{"e":"linear","d":1,"v":-50},"y":{"e":"linear","d":1,"v":143}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{"x":{"e":"linear","d":1,"v":429},"v":{"d":0,"v":true}},"ImageComponent_28":{"x":{"e":"linear","d":1,"v":277},"y":{"e":"linear","d":1,"v":239}},"VectorTextComponent_12":{"x":{"e":"linear","d":1,"v":58},"y":{"e":"linear","d":1,"v":264}},"RectangleShapeComponent_2":{"x":{"e":"linear","d":1,"v":114},"y":{"e":"linear","d":1,"v":280}},"ImageComponent_38":{"x":{"e":"linear","d":1,"v":271},"y":{"e":"linear","d":1,"v":283}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"RectangleShapeComponent_12":{"w":{"e":"linear","d":1,"v":176},"x":{"e":"linear","d":1,"v":514}},"ImageComponent_28":{"a":{"e":"linear","d":1,"v":0}},"VectorTextComponent_59":{},"ImageComponent_38":{"a":{"e":"linear","d":1,"v":0}}},"duration":1,"onStart":null},{"onEnd":null,"transitions":{"ImageComponent_21":{},"VectorTextComponent_59":{"x":{"d":0,"v":71},"y":{"d":0,"v":19},"v":{"d":0,"v":true}},"VectorTextComponent_31":{},"ImageComponent_27":{"btn":{"d":0,"v":true},"oc":{"d":0,"v":{"arg2":null,"type":"play","arg3":null,"arg1":null}},"v":{"d":0,"v":true}},"ImageComponent_23":{"v":{"d":0,"v":false}},"RectangleShapeComponent_12":{},"VectorTextComponent_69":{},"VectorTextComponent_51":{"txt":{"d":0,"v":2}}},"duration":0,"onStart":{"arg2":null,"type":"pause","arg3":null,"arg1":null}}]}],"timeFactor":1,"w":708};
	mzDoc.mzId = "MC1354097693601923";
	//---------------------
	if(!mz.docs){
		mz.docs = {};
	}
	mz.docs[mzDoc.mzId] = mzDoc;
	
})();