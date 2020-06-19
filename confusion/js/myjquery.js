 $(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle')
    });

    $('.loginClose').click(function(){
        $('#loginModal').modal('hide')
    });

    $('.booktableClose').click(function() {
        $('#booktable').modal('hide')
    });

    $('#booktableButton').click(function () {
        $('#booktable').modal('toggle')
    });
    
    // $('#smokeButton').click(function () {
    //     if ($('#smokeButton').hasClass('btn-success')) {
    //         $('#smokeButton').removeClass('btn-success');
    //         $('#smokeButton').addClass('btn-danger');
    //         $('#smoke').removeClass('d-none');
    //         $('#nsmoke').addClass('d-none');
    //     }
    //     else {
    //         $('#smokeButton').removeClass('btn-danger');
    //         $('#smokeButton').addClass('btn-success');
    //         $('#nsmoke').removeClass('d-none');
    //         $('#smoke').addClass('d-none');
    //     }
    // });

     $('#smokeButton').click(function () {
        if ($('#smokeButton').hasClass('btn-success')) {
            $('#smokeButton').removeClass('btn-success');
            $('#smokeButton').addClass('btn-danger');
            $('#smoke').removeClass('d-none');
            $('#nsmoke').addClass('d-none');
        }
        else {
            $('#smokeButton').removeClass('btn-danger');
            $('#smokeButton').addClass('btn-success');
            $('#nsmoke').removeClass('d-none');
            $('#smoke').addClass('d-none');
        }
    });

});