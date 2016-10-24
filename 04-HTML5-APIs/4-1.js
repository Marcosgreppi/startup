function LocalStorageSave () {
  localStorage.setItem("textAreaLocal", document.querySelector("#textContent").value);
  console.log( localStorage.getItem("textAreaLocal") );
}

window.onload = function () {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  dataBase = indexedDB.open("DataBase", 1);
  dataBase.onupgradeneeded = function (e) {
    let db = event.target.result;
    object = db.createObjectStore("textData", { keyPath : "text" });
    object.createIndex("textIndex", "text", { unique : false });
  };
  dataBase.onsuccess = function (e) {
    console.log("Works");
  };
  dataBase.onerror = function (e)  {
    console.log("Error");
  };
  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    let files = evt.dataTransfer.files;
    let reader = new FileReader();
    reader.onload = function(event) {
         document.getElementById("DropZone").value = event.target.result;
    }
    reader.readAsText(files[0],"utf-8");
  }
  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy";
  }
  let dropZone = document.getElementById("DropZone");
  dropZone.addEventListener("dragover", handleDragOver, false);
  dropZone.addEventListener("drop", handleFileSelect, false);
}

function IndexedDBSave () {
  let active = dataBase.result;
  let data = active.transaction("textData", "readwrite").objectStore("textData");
  let request = data.put( {
    keyPath: 1,
    text: document.querySelector("#textContent").value
  });
  request.onerror = function (e) {
                    console.log("Error");
  };
  data.oncomplete = function (e) {
   document.querySelector("#textContent").value = "";
   alert("Works");
  };
}

function LocalStorageClear () {
  localStorage.clear();
}

function IndexedDBClear () {
  let active = dataBase.result;
  let transaction = active.transaction("textData", "readwrite");
  transaction.oncomplete = function(event) {
    console.log("Completed");
  };
  transaction.onerror = function(event) {
    console.log("Error");
  };
  let objectStore = transaction.objectStore("textData");
  let objectStoreRequest = objectStore.clear();
  objectStoreRequest.onsuccess = function(event) {
    console.log("Deleted");
  };
}

//WebSocket

let wsUri = "ws://echo.websocket.org/";
let output;

function init() {
  output = document.getElementById("output");
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) {
  writeToScreen("Works");
  doSend("WebSocket works");
}

function onClose(evt) {
  writeToScreen("Error");
}

function onMessage(evt) {
  writeToScreen("<span style="color: blue;">RESPONSE: " + evt.data+"</span>");
  websocket.close();
}

function onError(evt) {
  writeToScreen("<span style="color: red;">ERROR:</span> " + evt.data);
}

function doSend(message) {
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);
