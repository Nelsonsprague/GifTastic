$(".gif").on("click", function(){
    if( state === "still"){
        $(this).attr("src",$(this.attr("data-animate"))
        );
        $this.attr("data-state", "animate");
    }else{
        $(this).attr("src",$(this).attr("data-still"));
        $(this).attr("data-state","still");
    }
})