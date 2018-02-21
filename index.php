<!DOCTYPE html>
<html lang="en">
<head>
    <title>Klinik Sentosa</title>
    <meta name="language" content="en">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no">
    <!-- <link href="http://dakhoahoancau.vn/img/favicon.png" rel="shortcut icon" type="image/x-icon"> -->
    <meta name="geo.position" content="10.751806,106.684639">
    <meta name="geo.placename" content="TPHCM">
    <meta name="geo.region" content="VN-65">
    <meta name="robots" content="noodp,index,follow">
    <meta name="revisit-after" content="1 days">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta itemprop="name" content="">
    <meta itemprop="description" content="">
    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/mdb.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/demo.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.mmenu.all.min.css">
    <link rel="stylesheet" type="text/css" href="css.css">
    <link rel="stylesheet" type="text/css" href="css/JS5.css">
</head>
<body>
    
<?php include ('layouts/header.php'); ?>
<?php include ('layouts/banner.php'); ?>
<?php include ('layouts/content.php'); ?>
<?php include ('layouts/content2.php'); ?>
<?php include ('layouts/footer.php'); ?>

<script language="javascript" type="text/javascript" src="aspx/LsJS.aspx"></script>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/popper.min.js"></script>
<script type="text/javascript" src="js/request.js"></script>
<script type="text/javascript" src="js/mdb.min.js"></script>
<script type="text/javascript" src="js/jquery.mmenu.min.all.js"></script>
<script type="text/javascript" src="js/style.js"></script>
<script type="text/javascript">
$(function() {
    $('#menu').mmenu({
        extensions: ['effect-slide-menu', 'penyakithadow'],
        searchfield: false,
        counters: true,
        navbar: {
            title: '<a href=".">Klinik Sentosa</a>'
        },
        navbars: [{
            position: 'top',
            content: [
                'prev',
                'title',
                'close'
            ]
        }, {
            position: 'bottom',
            content: [
                ''
            ]
        }]
    });
    $('.changemap').click(function() {
        $('.address').fadeOut(500);
    });
    $('.changemap1').click(function() {
        $('.address').fadeIn(500);
    });
    $(".che1").hide();
    $(".playyoutube").click(function() {
        $(".che1").fadeIn(500);
        $(".lightboxright").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/naI8SbkGrmw?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $(document).keyup(function(e) {
            if (e.keyCode === 27) $('.hoancauclose').click(); // esc
        });
        return false;
    });
    $(".hoancauclose").click(function() {
        $(".lightboxright").html('');
        $(".che1").fadeOut(500);
        return false;
    });

    function debounce(wait, bool, func) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var executeFunction = function() {
                func.apply(context, args);
            };
            if (bool == false) {
                clearTimeout(timeout);
                timeout = setTimeout(executeFunction, wait);
            };
            if (bool == true) {
                func.apply(context, args);
            };
        }
    };
    var test = false;
    $(window).scroll(debounce(1000, true, function() {
        if (test == true) {
            $("#menuNAV").removeClass("fix-scroll").hide().fadeOut(500);
            $(".anhien").css("top", "0px");
        }
        console.log('dang lướt');
    }));
    $(window).scroll(debounce(1000, false, function() {
        if ($(this).scrollTop() > 300) {
            $("#menuNAV").hide().addClass("fix-scroll").fadeIn(500);
            $(".anhien").css("top", "35px");
            test = true;
        } else {
            $("#menuNAV").show().fadeIn(500);
            $(".anhien").css("top", "0px");
            test = true;
        }
        console.log('pause');
    }));
});
</script>
</body>
</html>
