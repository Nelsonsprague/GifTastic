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
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" +api+ "&tag=" +search;

console.log(queryURL)
$.ajax({
    url:queryURL,
    method: "GET"
})
.then(function(response){
    console.log(response)
    var imageUrl = response.data.image_original_url;
    var image = $("<img>");
    image.attr("src", imageUrl)
    $("#images").prepend(image)
    console.log(image)
})

})

renderButtons();
// $(".gif").on("click", function(){
//     if( state === "still"){
//         $(this).attr("src",$(this.attr("data-animate"))
//         );
//         $this.attr("data-state", "animate");
//     }else{
//         $(this).attr("src",$(this).attr("data-still"));
//         $(this).attr("data-state","still");
//     }
// })