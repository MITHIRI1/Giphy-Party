const $area = $("area");
const $searchInput = $("search");

function addGif(res){
    let numResults = res.data.length;
    if (numResults){
        let randomIdx = Math.floor(Math.random() *numResults);
        let $column = $("<div>", { class: "col-md-4 col-12 mb-4"});
        let $gif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $column.append($gif);
        $area.append($column);


    }
}

$("form").on("submit", async function (evt) {
    evt.preventDefault();
    
    let term = $searchInput.val();
    $searchInput.val("");
    
    const response = await axios.get ("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: term,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);

});
$("#remove").on("click", function(){
    $area.empty();
})