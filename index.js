// responsive toggle 
$(document).ready(function(){
      $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active");
      });
    });
//Top
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
    var y = $(document).scrollTop;
    console.log(y);
  });
});
/* Fix navbar */
$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 50){
        $(".navigation-menu").addClass("navbarfix");
      }
      else{
        $(".navigation-menu").removeClass("navbarfix");
      }
    })
})
/*Skill  */
var y = true;
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>1750 &&y){
      $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        })
      })
      y=false;
    }
  })
})
/* Effect fadein */
$(function(){
    $(".background-desc").addClass("fadeInLeft animated slow")
      $(".background-title").addClass("fadeInLeft animated slow")
   
})
$(window).scroll(function(){
    if ($(this).scrollTop()>700){
      $(".about-wrap").addClass("fadeInLeft animated slow d-block")
    }
  
})

