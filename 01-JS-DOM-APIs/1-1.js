function showonload () {
  let obj = document.getElementById("hidden");
  obj.style.display = "block";
}

function joke () {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.onreadystatechange = function(event) {
    let response = JSON.parse(event.target.response);
    document.getElementById("sectionJoke").innerHTML = response.value.joke;
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.responseText.value) {
        document.getElementById("buttonJoke").innerHTML  = xhttp.responseText.value.joke;
        }
      }
    }
    xhttp.send();
}

function ReusableJoke () {
    let config = {
      url: "http://api.icndb.com/jokes/random"
    };
    function resolve(xhttp) {
      let response = JSON.parse(event.target.response);
      document.getElementById("sectionReusableJoke").innerHTML = response.value.joke;
      if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.responseText.value) {
          document.getElementById("buttonReusableJoke").innerHTML  = xhttp.responseText.value.joke;
        }
      }
    };
    function reject() {
       document.getElementById("hidden").style.backgroundColor="red";
    };
    requestreusable(config).then(resolve,reject);
  };

function requestreusable (object) {
  return new Promise( function (resolve, reject) {
    let xhttp = new XMLHttpRequest();
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

function config (methodHttp, url, asyncronic){
 this.methodHttp = methodHttp;
 this.url = url;
 this.asyncronic = asyncronic;
}

function QSearch () {
  let objconfig = new config ("GET", "https://api.github.com/search/repositories?q=javascript", true);
  requestreusable(objconfig).then(function(response) {
    let list = document.getElementById("list");
    let items = JSON.parse(response).items;

    items.map(function(item) {
      var columnNode = document.createElement("li");
      var textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });

  },
  function(error) {
    document.getElementById("hidden").style.color = "red";
  });
}

function FreeSearch (query) {
  let objconfig = new config ("GET", "https://api.github.com/search/repositories?q="+query, true);
  requestreusable(objconfig).then(function(response) {
    let list = document.getElementById("list");
    let items = JSON.parse(response).items;

    items.map(function(item) {
      var columnNode = document.createElement("li");
      var textNode = document.createTextNode(item.full_name);
      columnNode.appendChild(textNode);
      list.appendChild(columnNode);
    });

  },
  function(error) {
    document.getElementById("hidden").style.color = "red";
  });
}
