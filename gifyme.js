var topics = ["poker", "ufc", "biking", "climbing"]

function renderButtons(){
    $("#buttons-view").empty();
    for (var i=0; i< topics.length; i++){
        var a = $("<button>");
    
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}
$("#buttons-view").on("click", "button" ,function(){
var search=$(this).text();
var api = "GJZ9WvM1Yzqy48M1T5lInlpdiDDfCOeM";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
       search +"&api_key=" +api+ "&limit=10";

console.log(queryURL)
$.ajax({
    url:queryURL,
    method: "GET"
})
.then(function(response){
    var results = response.data;
    for(var i=0;i<results.length;i++){
        if (results[i].rating !== "r" && results[i].images.rating !== "pg-13") {
            var gifDiv = $("<div>")
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: "+rating)
    var image = $("<img>");
    console.log(results)
    var imageUrl = results[i].images.fixed_height_still.url;
    image.attr("src", imageUrl)
    image.attr("alt", search)

    gifDiv.append(image)
    gifDiv.append(p)

    $("#images").prepend(gifDiv)


        }
    }
    })

})

renderButtons();


$("#images").on("click", function(){
    
    var state = $(this).attr("data-state");
    console.log(this);
    if (state === "still") {
        alert("clicked")
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})