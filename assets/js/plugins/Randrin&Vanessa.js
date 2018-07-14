$(document).ready(function(){
    <!-- START: Login Page -->
    $('#submit').click(function(){
        var id = $("#identifiant");
        var pdw = $("#motDePasse");

        //Id et Mot de Passe du Groupe Progres
        var idProgress = "VanessaAndRandrin";
        var pdwProgress = "22.12.2018";
        if(id.val() == idProgress && pdw.val() == pdwProgress){
            return true;
        }else if (id.val() == idProgress && pdw.val() != pdwProgress){
            $('#incorrectAccess').html("<strong>Mot de Passe incorrect.</strong>");
            $('#incorrectAccess').css('color', '#ff0000');
            $('input[type="password"]').css({'background-color':' #ff0000', 'border-top-left-radius': '1em', 'border-top-right-radius': '1em'});
            return false;
        }else if (id.val() != idProgress && pdw.val() == pdwProgress){
            $('#incorrectAccess').html("<strong>Identifiant incorrect.</strong>");
            $('#incorrectAccess').css('color', '#ff0000');
            $('input[type="text"]').css({'background-color':' #ff0000', 'border-top-left-radius': '1em', 'border-top-right-radius': '1em'});
            return false;     
        }else{
            $('#incorrectAccess').html("<strong>Identifiant e/ou Mot de Passe incorrects.</strong>");
            $('#incorrectAccess').css('color', '#ff0000');
            $('input[type="text"], input[type="password"]').css({'background-color':' #ff0000', 'border-top-left-radius': '1em', 'border-top-right-radius': '1em'});
            return false; 
        }
    });

    //Refresh input pour une seconde et n-ième saisie de Id et Mdp
    $('input[type="text"], input[type="password"]').bind('focus blur', function(){
        $(this).css('background-color', '');
        $('#incorrectAccess').empty();
    });
    <!-- END: Login Page -->

    <!-- START: FANCYBOX -->
    $(".fancybox").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600, 
        'speedOut'		:	200, 
        'overlayShow'	:	false
    });
    <!-- END: FANCYBOX -->

    <!-- START: VIDEO -->
    /*
    * This is the plugin
    */
    (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal" role="dialog">';html+='<div class="modal-dialog modal-lg">';html+='<div class="modal-content">';html+='<div class="modal-header" style="background-color: #9c27b0;">';if(b.title.length>0){html+='<h3 class="modal-title">'+b.title+"</h3>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){
    html+='<button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-close fa-fw"></i> <strong>Fermer</strong></button>'}
    html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

    /*
    * Here is how you use it
    */  
    $('.video').on('click',function(){
        var video_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="'+video_link+'"></iframe></div>'
        $.createModal({
            title:'<img src="../img/Logos/Logo_blanc.png" width="25%" style="float: left;"/><p style="font-size:20px;"><i class="material-icons">favorite</i> <b>Romance De Printemps - Milano 2018</b></p>',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    }); 
    <!-- END: VIDEO -->

    <!-- START: Formatation Nar bar -->
    console.log("Dimension Device: " +$(window).width()+ " px");
    if ($(window).width() > 1349) {
        $(this).removeClass('narBarMedium').addClass('narBarLarge');
    }
    <!-- END: Formatation Nar bar -->

    <!-- START: formulaire RSVP -->
    $('#oui').on('click', function(event){
        var nom = $('#firstname').val();
        var prenom = $('#lastname').val();

        if (nom == '' || prenom == ''){
            if (nom == ''){
                $('input[type="text"]').first().css({'background-color':' #ff0000', 'border-top-left-radius': '1em', 'border-top-right-radius': '1em'});
            }
            if (prenom == ''){
                $('input[type="text"]').last().css({'background-color':' #ff0000', 'border-top-left-radius': '1em', 'border-top-right-radius': '1em'});
            }
        } else {
            var htmlMessage = '<div class="alert alert-success" role="alert"><h4><b>Merci, <em style="color:red;">' +nom+ ' ' +prenom+ ' </em> de votre présence en ce jour mémorable pour nous.</b></h4></div>';
            $('.alert-message').prepend(htmlMessage);
            $(".alert-message").fadeIn(200).delay(7000).fadeOut(1000, function() {
                $(this).remove(); 
            });
            document.getElementById('rsvpModal').style.display='none';
        }
    });

    $('#non').on('click', function(event){
        var htmlMessage = '<div class="alert alert-success" role="alert"><h4><b>Merci tout de même.</b></h4></div>';
        $('.alert-message').prepend(htmlMessage);
        $(".alert-message").fadeIn(200).delay(4000).fadeOut(1000, function() {
            $(this).remove(); 
        });
        document.getElementById('rsvpModal').style.display='none';
    });
    $('#plusTard').on('click', function(){
        $('#rsvpModal').hide();
    });
    <!-- END: formulaire RSVP -->

    <!-- START: Show carousel -->
    if ($(window).width() >= 320 && $(window).width() <= 640) {
        $('#smallDevice').show();
        $('#smallDeviceText').show();
        $('#largeDevice').hide();
        $('#largeDeviceText').hide();
    } else {
        $('#smallDevice').hide();
        $('#smallDeviceText').hide();
        $('#largeDevice').show();
        $('#largeDeviceText').show();
    }
    <!-- END: Show carousel -->
});





