import React from "react";
import ReactDOM from "react-dom";
import InputMovie from "./InputMovie";
import ListFavMovies from "./ListFavMovies";

class Movies extends React.Component{
  render () {
    return (
        <div className="movie">
            <InputMovie onSubmit={this.handleInputMovieSubmit} /> <br />
            <ListFavMovies onList={this.handleMovieFavouriteList} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
        </div>
    );
  }

  handleInputMovieSubmit (event) {
    let movies = localStorage.getItem("movieStorage");
    if (movies === null) {
      localStorage.setItem("movieStorage", JSON.stringify(event));
    } else {
      localStorage.setItem("movieStorage", movies.concat(";", JSON.stringify(event)));
    }
  }

  handleMovieFavouriteList (event) {
    let movies = localStorage.getItem("movieStorage");
    let array = localStorage.movieStorage.split(";");
    let object = {}
    let favourites = [];
    let i, e=0;
    let list, newLine, data;
    document.getElementById("favouriteListTitle").innerHTML = "Favourite Movies:";
    list = document.getElementById("list");

    for(i=0; i<array.length; i++)
    {
      object[i] = JSON.parse(array[i]);
      console.log(object)
      if(object[i].favourite) {
        favourites[e] = object[i];
        console.log("Favourites " + object[i].title);
        e++;
      }
    }

    favourites.map(function (item) {
     newLine = document.createElement("li");
     data = document.createTextNode(item.title);
     newLine.appendChild(data);
     list.appendChild(newLine);
     });
  }
};

export default Movies;
