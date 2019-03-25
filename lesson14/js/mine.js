$(document).ready(() => { 
  $('.text-center:eq(5)').on('click', () => { 
    showModal();
  });
  $('.close').on('click', () => { 
    showModal();
  });
  $('.contact').on('click', () => { 
    showModal();
  });
  $('li a[href="#sheldure"]').on('click', () => { 
    showModal();
  });

let modalShow = false;
  function showModal () { 
    if (modalShow == false) { 
      $('.overlay').delay(100).fadeIn();
      $('.modal').slideDown(250);
      $('body').css({"overflow":"hidden"});
      modalShow = true;
    } else {
      $('.overlay').delay(100).fadeOut();
      $('.modal').slideUp(250);
      $('body').css({"overflow":""});
      modalShow = false; 
    }
  }
// form 

$('.from').submit(() => { 
    $.ajax({
        url: 'server.php', 
        type : "POST", 
        dataType : 'json',
        data : $(".form").serialize(), 
        success : function(result) {
            console.log(result);
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    }); 
});

});