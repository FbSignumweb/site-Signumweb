$(document).ready(function(){

   
  var urls = [
    "https://www.youtube.com/embed/Df6Jd2lTJmI?playlist=Df6Jd2lTJmI",
    "https://www.youtube.com/embed/tpUv3iFtsMM?playlist=tpUv3iFtsMM",
    "https://www.youtube.com/embed/x1NSmjXeK_8?playlist=x1NSmjXeK_8",
    "https://www.youtube.com/embed/kbhxW_SK9pw?playlist=kbhxW_SK9pw",
    "https://www.youtube.com/embed/GFxKX20qpFU?playlist=GFxKX20qpFU",
    "https://www.youtube.com/embed/Bg2J4vyhrKU?playlist=Bg2J4vyhrKU",
    "https://www.youtube.com/embed/pLpWGSBvo4g?playlist=pLpWGSBvo4g"

    
    
    ];
    var titles = [
      "sua empresa home",
      "sua empresa home",
      "YouTube video player",
      "reconhecido home",
      "YouTube video player",
      "falam home",
      "nossos home"
  
      
      
      ];
    for (var i = 0; i < urls.length; i++) {
      var iframe = document.createElement("iframe");
      $(iframe).css("display", "none");
      $(iframe).attr("width", "150");
      $(iframe).attr("height", "150");
      $(iframe).attr("title", titles[i]);
      $(iframe).attr("frameborder", "0");
      $(iframe).attr("allow", "autoplay");
      
      $("div.iframeInterprete").append(iframe);
    }
    
    $("button.activate-iframe-js").click(function () {
      var num = $(this).val();
      $("iframe")[num].src = urls[num]+"&loop=1&autoplay=1&mute=1";
      $($("iframe")[num]).css("display", "inline-block");
      
      
      
    });
    
    


});
