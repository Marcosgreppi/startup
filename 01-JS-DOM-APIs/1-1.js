function showonload() {
  let obj = document.getElementById("hidden");
  obj.style.display = "block";
}

function joke() {
  let response;
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.onreadystatechange = function(event) {
    response = JSON.parse(event.target.response);
    document.getElementById("sectionJoke").innerHTML = response.value.joke;
    }
    xhttp.send();
}

function ReusableJoke() {
  let response;
  let config = {
    url: "http://api.icndb.com/jokes/random"
    };
  function resolve(xhttp) {
    response = JSON.parse(event.target.response);
    document.getElementById("sectionReusableJoke").innerHTML = response.value.joke;
    }
    function reject() {
      document.getElementById("hidden").style.backgroundColor="red";
    };
    requestreusable(config).then(resolve,reject);
};

function requestreusable(object) {
  let xhttp;
  return new Promise( function (resolve, reject) {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", object.url);
    xhttp.send();
    xhttp.onload = function () {
      if (this.status == 200) {
        resolve(xhttp.response);
      } else {
        reject(this.statusText);
      }
    };
    xhttp.onerror = function () {
      reject(this.statusText);
    };
  })
}

function config(methodHttp, url, asyncronic){
 this.methodHttp = methodHttp;
 this.url = url;
 this.asyncronic = asyncronic;
}

function QSearch() {
  let objconfig = new config ("GET", "https://api.github.com/search/repositories?q=javascript", true);
  let columnNode;
  let textNode;
  let list;
  let items;
  requestreusable(objconfig).then(function(response) {
    list = document.getElementById("list");
    items = JSON.parse(response).items;

    items.map(function (item) {
      columnNode = document.createElement("li");
      textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });

  },
  function (error) {
    document.getElementById("hidden").style.color = "red";
  });
}

function FreeSearch(query) {
  let objconfig = new config ("GET", "https://api.github.com/search/repositories?q="+query, true);
  let columnNode;
  let textNode;
  let list;
  let items;
  requestreusable(objconfig).then(function(response) {
    list = document.getElementById("list");
    items = JSON.parse(response).items;

    items.map(function (item) {
      columnNode = document.createElement("li");
      textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });

  },
  function (error) {
    document.getElementById("hidden").style.color = "red";
  });
}
