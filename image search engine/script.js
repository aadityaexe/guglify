const searchForm= document.getElementById("search-form");

const searchBox= document.getElementById("search-box");

const searchResult= document.getElementById("search-result");

const buttonSearch= document.getElementsById("button-search");

const buttonSeeMore= document.getElementsByTd("button-seemore");


}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})