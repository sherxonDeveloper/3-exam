var elList = document.querySelector(".js-list");
var elMoves = document.querySelector(".js-movies");
var elBoth = document.querySelector(".js-both");

var elBtnPokemon = document.querySelector(".pokemon__btn")
var elBtnMovies = document.querySelector(".movies__btn")
var elBtnBoth = document.querySelector(".both__btn")
var elBtnBoth = document.querySelector(".both__btn")
var elClear = document.querySelector(".clear")

var elMoiesImg = document.querySelector(".moies__img")
var elPokemonImg = document.querySelector(".pokemon__img")

function ixchamlash(array, node,) {
  
  for (let i = 0; i < array.length; i++) {
    // <====Element create ====>
    var newItem = document.createElement("li");
    var newBox = document.createElement("div");
    var newImg = document.createElement("img");
    var newSpan = document.createElement("span");
    var newHeading = document.createElement("h3");
    var newHeight = document.createElement("strong");
    var newWeight = document.createElement("strong");
    var newTime = document.createElement("time");
    var newText = document.createElement("p");
    newImg.textContent = `${array[i].img}`;
    newSpan.textContent = `${array[i].id}`;
    newHeading.textContent = `${array[i].name}`;
    newText.textContent = `${array[i].candy}`;
    
    newTime.textContent = `${array[i].spawn_time}`;
    newHeight.textContent = `${array[i].height}`;
    newWeight.textContent = `${array[i].weight}`;
    newImg.src = `${array[i].img}`
    
    // <===Style to give====>
    newItem.style.display = "flex";
    newItem.style.flexDirection = "column";
    newItem.style.textAlign = "center";
    newItem.style.alignItems = "center";
    newItem.style.marginBottom = "30px";
    newItem.style.width = "270px";
    newItem.style.borderRadius = "20px";
    newItem.style.padding = "40px 10px";
    newItem.style.backgroundColor = "rgb(37, 223, 223)";
    newItem.style.position = "relative";
    newItem.setAttribute("class", "item");
    newImg.style.width = "168px";
    newImg.style.height = "168px";
    newImg.style.transition = "all 0.5s ease";
    newBox.style.display = "flex"
    newWeight.style.marginLeft = "30px"
    newTime.style.padding = "7px 15px"
    newTime.style.backgroundColor = "rgb(43, 134, 127)"
    newTime.style.color = "#fff"
    newTime.style.borderRadius = "6px";
    newTime.style.marginTop = "20px"
    newTime.style.marginRight = "98px"
    newSpan.style.position = "absolute";
    newSpan.style.top = "10px";
    newSpan.style.left = "20px";
    newSpan.style.fontWeight = "bolder";
    
    // <====AppendChild====>
    newImg.setAttribute("class", "images");
    newItem.setAttribute("class", "item");
    
    // <====AppendChild do====>
    newItem.appendChild(newSpan);
    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newBox.appendChild(newHeight);
    newBox.appendChild(newWeight);
    newItem.appendChild(newBox);
    newItem.appendChild(newTime);
    node.appendChild(newItem);
  }
}
ixchamlash(pokemons, elList)


function moviesFilim(array, node,) {
  
  for (let i = 0; i < array.length; i++) {
    // <====Element create ====>
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newHeading = document.createElement("h3");
    var newText1 = document.createElement("p");
    var newText2 = document.createElement("p");
    var newBtn1 = document.createElement("button");
    var newBtn2 = document.createElement("button");
    var newBtn3 = document.createElement("button");
    var newBtnBox = document.createElement("div");
    var newH3 = document.createElement("h3");
    
    
    if (array[i].name) {
      newImg.src = array[i].img;
      newH3.textContent = array[i].name;
    }else {
      newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`;
  
    }
    newText1.textContent =  array[i].imdb_rating;
    newText2.textContent =  array[i].movie_year;
    newBtn1.textContent = "Watch Trailer"
    newBtn2.textContent = "Bookmark"
    newBtn3.textContent = "More info"
    newBtn1.setAttribute("class", "btn1")
    newBtn2.setAttribute("class", "btn2")
    newBtn3.setAttribute("class", "btn3")
    // <===Style to give====>
    newItem.style.display = "flex";
    newItem.style.flexDirection = "column";
    newItem.style.textAlign = "center";
    newItem.style.alignItems = "center";
    newItem.style.marginBottom = "30px";
    newItem.style.width = "270px";
    newItem.style.borderRadius = "20px";
    newItem.style.paddingBottom = "10px"
    newItem.style.backgroundColor = "rgb(37, 223, 223)";
    newItem.style.position = "relative";
    newItem.setAttribute("class", "item");
    newHeading.setAttribute("class", "heading");
    newImg.style.width = "27  0px";
    newImg.style.height = "168px";
    newImg.style.transition = "all 0.5s ease";
 
    // <====AppendChild do====>
    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText1);
    newItem.appendChild(newText2);
    newBtnBox.appendChild(newBtn1);
    newBtnBox.appendChild(newBtn2);
    newBtnBox.appendChild(newBtn3);
    newItem.appendChild(newBtnBox);
    node.appendChild(newItem);
  }
}
moviesFilim(movies, elMoves)

elBtnPokemon.addEventListener("click", function() {
  elList.setAttribute("style", "display:flex")
  elMoiesImg.setAttribute("style", "display:none")
  elPokemonImg.setAttribute("style", "display:block")
  elMoves.setAttribute("style", "display:none")
})

elBtnMovies.addEventListener("click", function() {
  elList.setAttribute("style", "display:none")
  elMoiesImg.setAttribute("style", "display:block")
  elPokemonImg.setAttribute("style", "display:none")
  elMoves.setAttribute("style", "display:flex")
})

elBtnBoth.addEventListener("click", function() {
  elList.setAttribute("style", "display:flex")
  elMoiesImg.setAttribute("style", "display:none")
  elPokemonImg.setAttribute("style", "display:none")
  elMoves.setAttribute("style", "display:flex")
  elList.concat(elMoves)
})

elClear.addEventListener("click", function() {
  elList.setAttribute("style", "display:none")
  elMoiesImg.setAttribute("style", "display:none")
  elPokemonImg.setAttribute("style", "display:none")
  elMoves.setAttribute("style", "display:none")
})





































