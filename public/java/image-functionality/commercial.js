 $("#back-to-top").hide();

$(document).on("click","#rem-img-back",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-6 mb-4'><div class='card h-100'>";
         var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Eatontown"
          }).done(function(data) {
            console.log(data)
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size-1' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>")
            }
             $("#head").html("Eatontown")
             $("#back-to-top").show();
              //document.getElementById( 'rem-append' ).scrollIntoView();
       })
})



$(document).on("click","#com-img-back",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Sandy"
          }).done(function(data) {
            console.log(data)
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>")
            }
             $("#head").html("Sandy Rehabilitation")
             $("#back-to-top").show();
              //document.getElementById( 'rem-append' ).scrollIntoView();
       })
})



$(document).on("click","#new-img-back",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Neptune"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Neptune")
            $("#back-to-top").show();
             //document.getElementById( 'rem-append' ).scrollIntoView();
       })
})


$(document).on("click","#rem-size",function(){
  var width = $(window).width(); 
  if(width < 738){
    $("#back-to-top").show();
    $("#sizer").off("click")
  }
  else{
    var img = $(this).attr("src");
    $(".modal-body").empty();
    $(".modal-body").append("<img id='sizer' src='"+ img +"'>");
    //$("#sizer").css("zoom","70%");
    $(".card-body").css("opacity",".5");
    $("#myModal2").modal("toggle");


 }
})

$(document).on("click","#sizer",function(){
  $(".card-body").css("opacity","1");
  $("#myModal2").modal("toggle"); 
 })

$(document).on("click","#back-to-top",function(){
 document.getElementById( 'top' ).scrollIntoView();
 $('#rem-append').empty();
 $('#head').html("");
 $("#back-to-top").hide();

 })