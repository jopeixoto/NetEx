
(function() {

	var xmlDoc; 
	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}

	// output information
	function Output(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}

	// file drag hover
	/*function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}*/

	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		//FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		xmlDoc = jQuery.parseXML(createNetExAgencyTemplate());
		ParseFile(files[0]);

		/*for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}*/

	}

	// output file information
	function ParseFile(file) {
		reader = new FileReader();
		reader.onload = function(e) {
			//console.log(this.result);
			var colunas = new Array();
			var rows = e.target.result.split("\n");  
			//linha com os atributos do CSV
			if (rows[0] != ""){
				var cols = rows[0].split(",");
				for (var j = 0; j < cols.length; j++) { 
					colunas.push(cols[j]);
					//console.log(cols[j]);
				}
			} 
			var index_agency_id=0;
			var index_agency_name = 0;
			var index_agency_url = 0;
			var index_agency_timezone = 0;
			var index_agency_phone = 0;
			var index_agency_lang = 0;
			//procurar o "agency_id" nas colunas carregadas
			for (var i = 0; i < colunas.length; i++) {
				if (colunas[i] == 'agency_id'){
					index_agency_id = i;
				}
				else if (colunas[i] == 'agency_name'){
					index_agency_name = i;
				}
				else if (colunas[i] == 'agency_url'){
					index_agency_url= i;
				}
				else if (colunas[i] == 'agency_timezone'){
					index_agency_timezone= i;
				}
				else if (colunas[i] == 'agency_phone'){
					index_agency_phone= i;
				}
				else if (colunas[i] == 'agency_lang'){
					index_agency_lang= i;
				}
			}

			var x = xmlDoc.getElementsByTagName("organisations");
			for (var i = 1; i < rows.length; i++) {  
				if (rows[i] != "") {  
					//para cada linha no agency.txt --> é uma Autoridade
					var AutorityNode = document.createElement("Autority");
					var NameNode = document.createElement("Name");
					var LocaleNode = document.createElement("Locale");
					var TimeZoneNode = document.createElement("TimeZone");
					var DefaultLanguageNode = document.createElement("DefaultLanguage");
					var ContactDetailsNode = document.createElement("ContactDetails");
					var PhoneNode = document.createElement("Phone");
					var UrlNode = document.createElement("Url");
					var cols = rows[i].split(",");  

					var newText= xmlDoc.createTextNode(cols[index_agency_url]);
    				UrlNode.appendChild(newText);
					newText= xmlDoc.createTextNode(cols[index_agency_phone]);
					PhoneNode.appendChild(newText);
					ContactDetailsNode.appendChild(PhoneNode);
					ContactDetailsNode.appendChild(UrlNode);

					newText= xmlDoc.createTextNode(cols[index_agency_timezone]);
					TimeZoneNode.appendChild(newText);
					newText= xmlDoc.createTextNode(cols[index_agency_lang]);
					DefaultLanguageNode.appendChild(newText);
					LocaleNode.appendChild(TimeZoneNode);
					LocaleNode.appendChild(DefaultLanguageNode);

					newText= xmlDoc.createTextNode(cols[index_agency_name]);
					NameNode.appendChild(newText);
					AutorityNode.appendChild(NameNode);
					AutorityNode.appendChild(LocaleNode);
					AutorityNode.appendChild(ContactDetailsNode);
					var id_text = cols[index_agency_id];
					AutorityNode.setAttribute("id",id_text);

					x[0].appendChild(AutorityNode);
				}  
			}
			//escrever o XML para ficheiro 
			var a = document.createElement("a");
			var conteudo = new XMLSerializer().serializeToString(xmlDoc);
    		var file = new Blob([conteudo], {type: 'text/xml'});
    		a.href = URL.createObjectURL(file);
    		a.download = "Agency.xml";
    		a.click();
		}
		reader.readAsText(file);

		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);
	}

	// initialize
	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			/*filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";*/

			// remove submit button
			submitbutton.style.display = "none";
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();