/*
document.getElementById('trigger').onclick = function() {
    var herzchen = ' \u2764'
    var herzchenString = "";
    var anzahlHerzchen = document.getElementById('inputH').value;

    for (var j = 0; j < anzahlHerzchen; j++){
      herzchenString += herzchen;
    }
    var list = document.createElement("ul");
    document.getElementById("target").appendChild(list);
    list.innerText = herzchenString;
    list.appendChild(listItem);
    
    for (var i = 2; i < 10; i++) {
      var text = "Hallo Mona hier sind " + i + '';
      var listItem = document.createElement("li");
      listItem.innerText = text;
      list.appendChild(listItem);
    }
   
  }
   */

   var toggleImage = false;
   var showImage = false;

   $(document).ready(function() {
     $(".translucent").hide();
   })

   
   $(".acc-work-title").click(function() {
     let addon = "fa-spin";
     var icon = $(".fa-clock");
        var isSpinning = icon.html().contains(addon);
        if(isSpinning){
        icon.removeClass(addon);
        return;
      } else {
        icon.toggleClass(addon);
        return;
      }
     })

     $(".acc-motivation-title").click(function() {
      let addon = "fa-spin";
      var icon = $(".fa-lightbulb");
         var isSpinning = icon.html().contains(addon);
         if(isSpinning){
         icon.removeClass(addon);
         return;
       } else {
         icon.toggleClass(addon);
         return;
       }
      })
     

      $(".acc-resume-title").click(function() {
        let addon = "fa-spin";
        var icon = $(".fa-file-alt");
           var isSpinning = icon.html().contains(addon);
           if(isSpinning){
           icon.removeClass(addon);
           return;
         } else {
           icon.toggleClass(addon);
           return;
         }
        })

     /*
     $(".accordion-title").click(function() {
      let addon = "fa-spin";
      var icon = $(this).siblings("h2").firstChild;
      console.log(icon);
         var isSpinning = icon.html().contains(addon);
         if(isSpinning){
         icon.removeClass(addon);
         return;
       } else {
         icon.toggleClass(addon);
         return;
       }
      })
      */

     
    $(".trigger").click(function() {
      var img = $(".translucent");
      if (!showImage){
      img.show();
      showImage = true;
      }
      if(toggleImage){
        img.animate({height: '0', opacity: '0.4'}, "slow");
        img.animate({width: '100vw', opacity: '0.4'}, "slow");
        toggleImage =! toggleImage;
      } else {
        img.animate({height: '20vh', opacity: '0.3'}, "slow");
        img.animate({width: '100vw', opacity: '0.5'}, "slow");
        toggleImage =! toggleImage;
      }
    })
    
