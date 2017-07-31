$(function() {
    var hasProtectedContent = document.getElementsByClassName("protected");
    if (hasProtectedContent) {
        $('.protected').hide();

        $('body').prepend(
            '<div class="galleryContent galleryContent-text js-content" id="authentication" style="display: none;">' + 
                '<div class="galleryContentWrap js-galleryContentWrap">' +
                '<form action="" method="get" name="login" id="loginForm">' +
                    'Super Secret Password:' +
                    '<input class="js-loginInput" type="text" name="inputbox" value="">' +
                    '<input class="js-authenticate" type="button" name="button" value="click">' +
                '</form>' +
                '</div>' +
            '</div>'
        );
        
        $('.js-authenticate').on('click', function() {
            authenticate('#loginForm');
        });
        function authenticate(form) {
            var password = 'pass';
            var input = $('.js-loginInput').val();

            if(input == password) {
                showProtectedContent();
                $('#overlay').click();
                $('.js-trigger-authenticate').hide();
            }
        }
        function showProtectedContent() {
            let numItems = portfolio.length;
            for (var i = 0; i < numItems; ++i) {
                let thumb = '';
                let content = '';
                if ('thumbProtected' in portfolio[i]) {
                    thumb = 
                        '<img src="images/portfolio/' + 
                            portfolio[i].thumbProtected + 
                        '" />';
                    $('#' + triggerPrefix + i).html(thumb);
                }	
                if ('contentProtected' in portfolio[i]) {
                    content = portfolio[i].contentProtected;
                    $('#content-' + i + ' .galleryContentWrap').html(content);
                }	
            }
        } 
    }

});