function displaySSUI(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var html = HtmlService.createTemplateFromFile("index.html").evaluate();
  ss.show(html);
 
  return
}

//function returnVal () {
   //Logger.log("So far so good")            //Displays in Apps Script Logger Saca el texto
   //return "json"                           //Espera a pulsar sobre botón de good
  
//}

//Retorna la página principal
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

//Obtener los valores del formulario.
function obtenerValores(formulario){
  var nombre = formulario.nombredepila,
      apellido = formulario.nombredefamilia,
      IP = formulario.json,
      longitud = formulario.div,
      latitud = formulario.latitud,
      libro = SpreadsheetApp.openById('key'),
      hoja = libro.getSheetByName('Hoja 1');
  hoja.appendRow([nombre, apellido, IP, longitud, latitud]);
}