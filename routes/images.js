
var path = require("path");

var fs = require("fs");
var Array1=[];

var Belmar = './public/remodel/Belmar - Remodel';
var LittleSilver = './public/remodel/Little Silver - House Lift - Progress-Remodel';
var OceanGrove = './public/remodel/Ocean Grove Kitchen Renovation-Remodel';

var Eatontown = './public/commercial/Commercial - Eatontown';
var Sandy= './public/commercial/Commerical - Sandy Rehabilitation';
var Neptune= './public/commercial/Commerical-Neptune';

var Avon= './public/new construction/Avon - New Construction';
var BelmarCon= './public/new construction/Belmar - New Construction';
var GroveCon= './public/new construction/Ocean Grove - New Construction';
var Interlaken='./public/new construction/Interlaken - New Construction';
var Mary= './public/new construction/Marys Place by the Sea - New Construction';


module.exports=function(app){
  
  app.post("/email",function(req,res){
      console.log(req.body)
      res.redirect("/")
  })

//////=====================================REMODEL=====================================================//////

app.get("/belmar", function(req,res){
  Array1=[];
   fs.readdir(Belmar, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Belmar = 'remodel/Belmar - Remodel';
            var path=Belmar+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/LittleSilver", function(req,res){
  Array1=[];
   fs.readdir(LittleSilver, function( err, data ) {
      for(i=0;i<data.length;i++){
            var LittleSilver = 'remodel/Little Silver - House Lift - Progress-Remodel';
            var path=LittleSilver+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/OceanGrove", function(req,res){
  Array1=[];
   fs.readdir(OceanGrove, function( err, data ) {
      for(i=0;i<data.length;i++){
            var OceanGrove = 'remodel/Ocean Grove Kitchen Renovation-Remodel';
            var path=OceanGrove+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/remodel-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/image-html/remodel.html"));
});


///======================================NEW CONSTRUCTION==============================================///


app.get("/Avon", function(req,res){
  Array1=[];
   fs.readdir(Avon, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Avon = '/new construction/Avon - New Construction';
            var path=Avon+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/Belmar-Constr", function(req,res){
  Array1=[];
   fs.readdir(BelmarCon, function( err, data ) {
      for(i=0;i<data.length;i++){
            var BelmarCon= '/new construction/Belmar - New Construction';
            var path=BelmarCon+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/Interlaken", function(req,res){
  Array1=[];
   fs.readdir(Interlaken, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Interlaken = '/new construction/Interlaken - New Construction';
            var path=Interlaken+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})



app.get("/Mary", function(req,res){
  Array1=[];
   fs.readdir(Mary, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Mary = '/new construction/Marys Place by the Sea - New Construction';
            var path=Mary+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})



app.get("/OceanGrove-Const", function(req,res){
  Array1=[];
   fs.readdir(GroveCon, function( err, data ) {
      for(i=0;i<data.length;i++){
            var GroveCon = '/new construction/Ocean Grove - New Construction';
            var path=GroveCon+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})





app.get("/new-construction-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/image-html/newConstruction.html"));
});




        

//////=====================================COMMERCIAL=====================================================//////



app.get("/Eatontown", function(req,res){
  Array1=[];
   fs.readdir(Eatontown, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Eatontown = '/commercial/Commercial - Eatontown';
            var path=Eatontown+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/Sandy", function(req,res){
  Array1=[];
   fs.readdir(Sandy, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Sandy= '/commercial/Commerical - Sandy Rehabilitation';
            var path=Sandy+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/Neptune", function(req,res){
  Array1=[];
   fs.readdir(Neptune, function( err, data ) {
      for(i=0;i<data.length;i++){
            var Neptune = '/commercial/Commerical-Neptune';
            var path=Neptune+'/';            
            Array1.push(data[i]);
      }
        Array1[0]=path
        console.log(Array1)
        res.send(Array1)
  })
})


app.get("/commercial-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/image-html/commercial.html"));
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
});

app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/services.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});





}////MODULE END///////



  
 // app.get("/image", function(req,res){
 //  Array1=[];
 //   fs.readdir(test, function( err, data ) {
 //     var totalCalls = data.length;
 //     var callsCompleted = 0;
 //      for(i=0;i<data.length;i++){
 //          (function(i){
 //              var pathName= './public/images/'+data[i];
 //              var path='images/'+data[i]+'/';
 //                 fs.readdir(pathName, function( err, files) {
 //                    var img={
 //                        path:path,
 //                        file:files
 //                    }
 //                     Array1.push(img);
 //               callsCompleted++;
 //               //do not want to send until we completed all calls
 //                 if(callsCompleted >= totalCalls){
 //                    console.log(Array1)
 //                    res.send(Array1)
 //                 }
 //              })
 //          })(i)  
 //       }
 //    })
 // })




 // app.get("/remodel", function(req,res){
 //  Array1=[];
 //   fs.readdir(remodel, function( err, data ) {
 //     var totalCalls = data.length;
 //     var callsCompleted = 0;
 //      for(i=0;i<data.length;i++){
 //          (function(i){
 //              var pathName= './public/remodel/'+data[i];
 //              var path='remodel/'+data[i]+'/';
 //                 fs.readdir(pathName, function( err, files) {
 //                    var img={
 //                        path:path,
 //                        file:files
 //                    }
 //                     Array1.push(img);
 //               callsCompleted++;
 //               //do not want to send until we completed all calls
 //                 if(callsCompleted >= totalCalls){
 //                    console.log(Array1)
 //                    res.send(Array1)
 //                 }
 //              })
 //          })(i)  
 //       }
 //    })
 // })