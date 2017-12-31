
 $(document).on("click","#remodel",function(){
 	var active = "<div class='item active'>"
 	var notActive = "<div class='item'>"
    $.ajax({
        method: "GET",
        url: "/remodel"
      }).done(function(data) {
      	for(i=0;i<data.length;i++){
      		for(j=0;j<data[i].file.length;j++){

                  if(i===0 && j===0){
                  $("#carousel").append(active+"<img src='"+data[i].path+data[i].file[j]+"'></div>")  

              	 }
              	 else{
					 $("#carousel").append(notActive+"<img src='"+data[i].path+data[i].file[j]+"'></div>")  
              	 }
      		}
      	}
      })

})




  $(document).on("click","#redirect",function(){
    document.getElementById( 'rem-img-back' ).scrollIntoView();

  })