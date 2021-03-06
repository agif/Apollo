function scTop() {
    // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    // $(".chat").scrollTop($(".chat")[0].scrollHeight);
    $('html,body').animate({ scrollTop: document.body.scrollHeight }, "slow");
}

function load_new_stuff() {
    localStorage['lpid'] = $(".msgs .msg:last").attr("title");
    $(".msgs").load("msgs.php", function() {
        if (localStorage['lpid'] != $(".msgs .msg:last").attr("title")) {
            scTop();
        }
    });
    $(".users").load("users.php");
}

$(document).ready(function() {
    $('.tab').click(function() {
        var dip = $(this).data('dip');
        if (dip == "chat") {
            $('.chat').css('display', 'block');
            $('.users').css('display', 'none');
        } else {
            $('.chat').css('display', 'none');
            $('.users').css('display', 'block');
        }
        return false;
    });
    scTop();
    $("#msg_form").on("submit", function() {
        t = $(this);
        val = $(this).find("input[type=text]").val();
        if (val != "") {
            $.post("send.php", { msg: val }, function() {
                load_new_stuff();
                t[0].reset();
            });
        }
        return false;
    });
});
setInterval(function() {
    load_new_stuff();
}, 500);
