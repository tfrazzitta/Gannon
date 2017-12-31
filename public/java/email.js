$("#change2").hide();

$(document).on("click","#button1",function(){
    var name= $("#name-input").val()
    var phone=$("#phone-number-input").val()
    var email= $("#email-input").val()
    var message= $("#comment-input").val()

    if(name===""||phone===""||email===""||message==""||email.includes("@")==false){
          if(email.includes("@")== false){
             $("#modal-message2").html("Please include a proper email");
             $("#myModal2").modal("toggle");
             setTimeout(AutomaticModal2,1350)
          }
          else{ 
            $("#modal-message2").html("Please submit all requiements");
            $("#myModal2").modal("toggle");
            setTimeout(AutomaticModal2,1350)
          }
    } 

    else{
        $("#name-input").val("")
        $("#phone-number-input").val("")
        $("#email-input").val("")
        $("#comment-input").val("")
        $("#modal-message2").html("Your Email has been sent");
        $("#myModal2").modal("toggle");
        setTimeout(AutomaticModal2,2000)

          $.ajax({
          url: "https://formspree.io/tfrazzitta@trschools.com", 
          method: "POST",
          data: {
                name: name,
                phone:phone,
                email:email,
                message:message
                },
          dataType: "json"
      }).done(function(data) {
         $.ajax({
          method: "POST",
          url: "/email",
          data: {
                name: name,
                phone:phone,
                email:email,
                message:message
                }
          });
      })
    }
});


function AutomaticModal2(){
  $("#change2").trigger("click");
  }
