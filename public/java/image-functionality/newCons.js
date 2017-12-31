 $("#back-to-top").hide();

$(document).on("click","#rem-img-back",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Avon"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
              $("#head").html("Avon")
               document.getElementById( 'head' ).scrollIntoView();
               $("#back-to-top").show();
       })
})



$(document).on("click","#belmar",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Belmar-Constr"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
             $("#head").html("Belmar")
              document.getElementById( 'head' ).scrollIntoView();
              $("#back-to-top").show();
       })
})


$(document).on("click","#new-img-back",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/OceanGrove-Const"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size-1' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Ocean Grove")
             document.getElementById( 'head' ).scrollIntoView();
             $("#back-to-top").show();
       })
})


$(document).on("click","#mary",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Mary"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Marys Place by the Sea")
             document.getElementById( 'head' ).scrollIntoView();
             $("#back-to-top").show();
       })
})

$(document).on("click","#interlaken",function(){
        $("#rem-append").empty();
        var shell=" <div class='col-lg-4 mb-4'><div class='card h-100'>";
        var body="<div class='card-body'>"
           $.ajax({
            method: "GET",
            url: "/Interlaken"
          }).done(function(data) {
            console.log(data[0])
            for(i=1;i<data.length;i++){
              $("#rem-append").append(shell+body+"<img id='rem-size' class='img-responsive' src='"+data[0]+data[i]+"'></div></div>");
            }
            $("#head").html("Interlaken")
             document.getElementById( 'head' ).scrollIntoView();
             $("#back-to-top").show();
       })
})

$("#hide").hide();

// $(document).on("click","#rem-size",function(){
//   var img = $(this).attr("src");
//   $(".modal-body").empty();
//   $(".modal-body").append("<img id='sizer' src='"+ img +"'>");
//   $("#sizer").css("zoom","90%");
//   $(".card-body").css("opacity",".5");
//   $("#myModal2").modal("toggle"); 
//   })


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