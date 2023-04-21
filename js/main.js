

let sceneCount = 0;
let scene = $("#scenes")
let start = $(".nederland");
let gesprekIntro = $(".gesprekIntro");



if (sceneCount==0){



}

start.click(function (){
    sceneCount = 1;
    if (sceneCount==1){
    // $("#scene3").hide();
    // $("#scene1").hide();
    $("#scene1").toggleClass('active');
    $("#scene2").toggleClass('active');
    $('video')[0].play();

    // scene switcher voor dialoog in de klik functie van de doorgaan knop!!!!
    //  $("#scene" + sceneCount).toggleClass('active');
    //  $("#scene" + sceneCount + 1).toggleClass('active');
    // sceneCount++;
    
    }

sceneCount++;
console.log(sceneCount);
})

document.querySelector('#intro').addEventListener('ended',function(){
    console.log('Video has ended!');
        $("#scene2").toggleClass('active');

        sceneCount = 3;

        if (sceneCount==3){
            $("#scene3").toggleClass('active');
            
            }
            console.log(sceneCount);
    
  }, false);


  $('.bel').click(function (){
    sceneCount++;


    var audioDeurbel = document.getElementById("audioDeurbel");
	audioDeurbel.play();


        $("#scene3").toggleClass('active');

        // const audio = new Audio();
        // audio.src = "./deurbel.mp3";
        $("#scene4").toggleClass('active');
    

console.log(sceneCount);

})


  
// $('.gesprekIntro').click(function(){

//     $("#scene" + sceneCount).toggleClass('active');
//     sceneCount++;
//     console.log(sceneCount);
// //  scene switcher voor dialoog in de klik functie van de doorgaan knop!!!!
//      $("#scene" + sceneCount).toggleClass('active');
//      console.log(sceneCount);
     




// })

// let scenes = [$("#scene1"), $("#scene2"), $("#scene3"), $("#scene4")];
// let sceneCount = 0;

// $.each(scenes, function(index, scene) {
//     let img = new Image();
//     img.src = scene.css('background-image').replace(/url\(|\)|"|'/ig, '');
// });

// $('.nederland').click(function() {
//     scenes[sceneCount].toggleClass('active');
//     sceneCount = 1;
//     scenes[sceneCount].toggleClass('active');
//     $('video')[0].play();
// });

// $('#intro').on('ended', function() {
//     scenes[sceneCount].toggleClass('active');
//     sceneCount = 2;
//     scenes[sceneCount].toggleClass('active');
// });

// $('.bel').click(function() {
//     scenes[sceneCount].toggleClass('active');
//     sceneCount = 3;
//     scenes[sceneCount].toggleClass('active');
//     var audioDeurbel = document.getElementById("audioDeurbel");
// 	audioDeurbel.play();
// });


// $('.gesprekIntro').click(function() {
//     scenes[sceneCount].toggleClass('active');
//     sceneCount = 4;
//     sceneCount++;
//     scenes[sceneCount].toggleClass('active');
// });


$('.gesprekIntro').click(function() {
    let currentScene = $("#scene" + sceneCount);
    let nextScene = $("#scene" + (sceneCount + 1));

    currentScene.fadeOut(300, function() {
        currentScene.toggleClass('active');
        nextScene.toggleClass('active');`z`
        nextScene.fadeIn(300);
    });

    sceneCount++;
});

// schaalvergroting storyline

$('#schaalvergroting-btn').click(function (){
    

   $("#scene14").toggleClass('active');
   $("#schaalvergroting-keuze").toggleClass('active');




});

$('#oma-schaalvergroting').click(function(){ 
$("#schaalvergroting-keuze").toggleClass('active');
$("#schaalvergroting-keuze-oma").toggleClass('active');
});

$('#opa-schaalvergroting').click(function(){
$("#schaalvergroting-keuze").toggleClass('active');
$("#schaalvergroting-keuze-opa").toggleClass('active');
});


$('#meerinfo-schaalvergroting-oma-knop').click(function(){ 

$("#schaalvergroting-keuze-oma").toggleClass('active');
$('#extra-infro-schaalvergroting-oma').toggleClass('active');

});

$('#meerinfo-schaalvergroting-opa-knop').click(function(){ 

$("#schaalvergroting-keuze-opa").toggleClass('active');
$('#extra-infro-schaalvergroting-opa').toggleClass('active');

});

$('.afstandsbediening').click(function (){

$('#extra-infro-schaalvergroting-opa').removeClass('active');
$('#extra-infro-schaalvergroting-oma').removeClass('active');

$('#schaalvergroting-animatie').toggleClass('active');


});




$('.aanknop-afstandsbediening').click(function (){

   var schaalvergrotingFilmpje = document.getElementById("schaalvergroting-filmpje"); 
   schaalvergrotingFilmpje.play();

   $('.hightlight-aanknop-afstandsbediening').remove();


});








$('.terugmenu').click(function(){



$('#schaalvergroting-animatie').removeClass('active');
$('#schaalvergroting-keuze-oma').removeClass('active');
$('#schaalvergroting-keuze-opa').removeClass('active');
$("#scene14").addClass('active');

});


// einde schaalvergroting storyline

// ruilverkaveling storyline

 $('#ruilverkaveling-btn').click(function (){
    

         $("#scene14").toggleClass('active');
         $("#ruilverkaveling-keuze").toggleClass('active');


    

 });

 $('#oma-ruilverkaveling').click(function(){ 
    $("#ruilverkaveling-keuze").toggleClass('active');
    $("#ruilverkaveling-keuze-oma").toggleClass('active');
 });

 $('#opa-ruilverkaveling').click(function(){
    $("#ruilverkaveling-keuze").toggleClass('active');
    $("#ruilverkaveling-keuze-opa").toggleClass('active');
 });


 $('#meerinfo-ruilverkaveling-oma-knop').click(function(){ 

    $("#ruilverkaveling-keuze-oma").toggleClass('active');
    $('#extra-infro-ruilverkaveling-oma').toggleClass('active');

 });

 $('#meerinfo-ruilverkaveling-opa-knop').click(function(){ 

    $("#ruilverkaveling-keuze-opa").toggleClass('active');
    $('#extra-infro-ruilverkaveling-opa').toggleClass('active');

 });

 $('.krant').click(function (){

    $('#extra-infro-ruilverkaveling-opa').removeClass('active');
    $('#extra-infro-ruilverkaveling-oma').removeClass('active');

    $('#ruilverkaveling-animatie').toggleClass('active');


 });


 $('.terugmenu').click(function(){

    
    
    $('#ruilverkaveling-animatie').removeClass('active');
    $('#ruilverkaveling-keuze-oma').removeClass('active');
    $('#ruilverkaveling-keuze-opa').removeClass('active');
    $("#scene14").addClass('active');

 });


//  einde ruilverkaveling story


// europa storyline

$('#europa-btn').click(function (){
    

   $("#scene14").toggleClass('active');
   $("#europa-keuze").toggleClass('active');




});

$('#oma-europa').click(function(){ 
$("#europa-keuze").toggleClass('active');
$("#europa-keuze-oma").toggleClass('active');
});

$('#opa-europa').click(function(){
$("#europa-keuze").toggleClass('active');
$("#europa-keuze-opa").toggleClass('active');
});


$('#meerinfo-europa-oma-knop').click(function(){ 

$("#europa-keuze-oma").toggleClass('active');
$('#extra-infro-europa-oma').toggleClass('active');

});

$('#meerinfo-europa-opa-knop').click(function(){ 

$("#europa-keuze-opa").toggleClass('active');
$('#extra-infro-europa-opa').toggleClass('active');

});

$('.radio').click(function (){

$('#extra-infro-europa-opa').removeClass('active');
$('#extra-infro-europa-oma').removeClass('active');

$('#europa-animatie').toggleClass('active');


});


$('.terugmenu').click(function(){



$('#europa-animatie').removeClass('active');
$('#europa-keuze-oma').removeClass('active');
$('#europa-keuze-opa').removeClass('active');
$("#scene14").addClass('active');

});

// 


// exportschaamte storyline


$('#exportschaamte-btn').click(function (){
    

   $("#scene14").toggleClass('active');
   $("#exportschaamte-keuze").toggleClass('active');




});

$('#oma-exportschaamte').click(function(){ 
$("#exportschaamte-keuze").toggleClass('active');
$("#exportschaamte-keuze-oma").toggleClass('active');
});

$('#opa-exportschaamte').click(function(){
$("#exportschaamte-keuze").toggleClass('active');
$("#exportschaamte-keuze-opa").toggleClass('active');
});


$('#meerinfo-exportschaamte-oma-knop').click(function(){ 

$("#exportschaamte-keuze-oma").toggleClass('active');
$('#extra-infro-exportschaamte-oma').toggleClass('active');

});

$('#meerinfo-exportschaamte-opa-knop').click(function(){ 

$("#exportschaamte-keuze-opa").toggleClass('active');
$('#extra-infro-exportschaamte-opa').toggleClass('active');

});

$('.tablet').click(function (){

$('#extra-infro-exportschaamte-opa').removeClass('active');
$('#extra-infro-exportschaamte-oma').removeClass('active');

$('#exportschaamte-animatie').toggleClass('active');


});


$('.terugmenu').click(function(){



$('#exportschaamte-animatie').removeClass('active');
$('#exportschaamte-keuze-oma').removeClass('active');
$('#exportschaamte-keuze-opa').removeClass('active');
$("#scene14").addClass('active');

});



// einde sxport schaamte


// export record storyline


$('#exportrecord-btn').click(function (){
    

   $("#scene14").toggleClass('active');
   $("#exportrecord-keuze").toggleClass('active');




});

$('#oma-exportrecord').click(function(){ 
$("#exportrecord-keuze").toggleClass('active');
$("#exportrecord-keuze-oma").toggleClass('active');
});

$('#opa-exportrecord').click(function(){
$("#exportrecord-keuze").toggleClass('active');
$("#exportrecord-keuze-opa").toggleClass('active');
});


$('#meerinfo-exportrecord-oma-knop').click(function(){ 

$("#exportrecord-keuze-oma").toggleClass('active');
$('#extra-infro-exportrecord-oma').toggleClass('active');

});

$('#meerinfo-exportrecord-opa-knop').click(function(){ 

$("#exportrecord-keuze-opa").toggleClass('active');
$('#extra-infro-exportrecord-opa').toggleClass('active');

});

$('.dagboek-oma').click(function (){

$('#extra-infro-exportrecord-opa').removeClass('active');
$('#extra-infro-exportrecord-oma').removeClass('active');

$('#exportrecord-animatie-oma-pg1').addClass('active');


});


$('.dagboek-opa').click(function (){

   $('#extra-infro-exportrecord-opa').removeClass('active');
   $('#extra-infro-exportrecord-oma').removeClass('active');
   
   $('#exportrecord-animatie-opa-pg1').addClass('active');
   
   
   });
   
   $('.bladzijde-btn-oma.pg1').click(function(){



      $('#exportrecord-animatie-oma-pg1').removeClass('active');
      $('#exportrecord-animatie-oma-pg2').addClass('active');
      
      });


      $('.bladzijde-btn-oma.pg2').click(function(){



         $('#exportrecord-animatie-oma-pg2').removeClass('active');
         $('#exportrecord-animatie-oma-pg1').addClass('active');
         
         
         });
         
      


   $('.bladzijde-btn-opa.pg1').click(function(){



      $('#exportrecord-animatie-opa-pg1').removeClass('active');
      $('#exportrecord-animatie-opa-pg2').addClass('active');
      
      });


      $('.bladzijde-btn-opa.pg2').click(function(){



         $('#exportrecord-animatie-opa-pg2').removeClass('active');
         $('#exportrecord-animatie-opa-pg1').addClass('active');
         
         
         });
         
      




$('.terugmenu').click(function(){



$('#exportrecord-animatie').removeClass('active');
$('#exportrecord-keuze-oma').removeClass('active');
$('#exportrecord-keuze-opa').removeClass('active');
$('#exportrecord-animatie-opa-pg1').removeClass('active');
$('#exportrecord-animatie-opa-pg2').removeClass('active');
$('#exportrecord-animatie-oma-pg1').removeClass('active');
$('#exportrecord-animatie-oma-pg2').removeClass('active');
$("#scene14").addClass('active');

});


// inlever storyline

$('#inleveren-btn').click(function (){
    

   $("#scene14").toggleClass('active');
   $("#scene15").toggleClass('active');




});

$('.inlevergesprek.scene15').click(function() {

   $("#scene15").toggleClass('active');
   $("#scene16").toggleClass('active');
   
});
$('.inlevergesprek.scene16').click(function() {

   $("#scene16").toggleClass('active');
   $("#scene17").toggleClass('active');
   
   
});
$('.inlevergesprek.scene17').click(function() {

   $("#scene17").toggleClass('active');
   $("#scene18").toggleClass('active');
   
   
});


$('.terugmenu').click(function(){



   $("#scene15").removeClass('active');
   $("#scene14").addClass('active');
   
   });

   $('.werkstuk-btn').click(function(){

      location.reload();
      
      });

