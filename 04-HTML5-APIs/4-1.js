function addText(){
  let index = document.getElementById("TextInput");
  localStorage.setItem("data", index.value);
  let localElement = localStorage.getItem("data");
  alert("addtext funciona");
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
    alert("Carga Completada");
  };

  dataBase.onerror = function (e)  {
    alert("Error");
  };
}

function IndexedSave() {
  let active = dataBase.result;
  let data = active.transaction("textData", "readwrite").objectStore("textData");
  let request = data.put({
    keyPath: 1,
    text: document.querySelector("#TextInput").value
  });
  request.onerror = function (e) {
    alert("Error")
  };
  data.oncomplete = function (e) {
    document.querySelector("#TextInput").value = "";
    alert("Objeto agregado correctamente");
  };
}

function add () {
  alert("a");
  let active = dataBase.result;
  let data = active.transaction("textId", "readwrite");
  let object = data.objectStore("textId");
  let request = object.put({
      text: document.querySelector("#TextInput").value
  });
  data.oncomplete = function (event) {
    document.querySelector("#TextInput").value = "";
    alert("Object successfully added");
    loadAll();
  };
}

function loadAll() {
  let active = dataBase.result;
  let data = active.transaction("textId", "readonly");
  let object = data.objectStore("textId");
  let elements = [];
  object.openCursor().onsuccess = function (event) {
    alert("llego al event");
    let result = event.target.result;

    if (result === null) {
        return;
    }

    elements.push(result.value);
    result.continue();
  }
}

function showDataBase() {
  let dataBase = indexedDB.open("DataBase", 1);
  alert("sa");
  let active = dataBase.result;
  let data = active.transaction("textId","readonly");
  let objectStore = data.objectStore("textId");
  let request = objectStore.get("00-03");

  request.onerror = function(event) {
    alert("Error!");
  };

  request.onsuccess = function(event) {
    if(request.result) {
      alert("id: " + request.result.textId + ", text: " + request.result.TextInput);
    }
    else {
      alert("cant be found");
    }
  };
}
