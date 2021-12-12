$(document).ready(function() {

    // navbar scroll fixed position
    $(document).scroll(function(){
        if ($(document).scrollTop() >= 100){
            $(".navbar").addClass('scrolled');
        }
        else{
            $(".navbar").removeClass('scrolled');
        }
    })

    // navbar toggle active
    $(".H-burger").click(function(){
        $(".navbar").toggleClass('active');
    })
})