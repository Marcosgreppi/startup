
var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?append_to_response=undefined&language=en-US&api_key=%3C%3Capi_key%3E%3E");

xhr.send(data);

export xhr
