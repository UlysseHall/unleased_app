$(function() {
    $('.link').click(function() {
        router.loadPage($(this).attr('data-page'));
    });

    router = {
        loadPage: function(page) {
            if(page) {
                $(".main-container").load(page, null, function() {
                    $('.link').click(function() {
                        router.loadPage($(this).attr('data-page'));
                    });
                });

            }
        }
    };

    if(localStorage.token) {
        router.loadPage("home.html");
    } else {
        router.loadPage("tuto-1.html");
    }
});