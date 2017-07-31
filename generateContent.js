function generateContent(portfolio) {

    // create gallery items
    for (let i = 0; i < portfolio.length; ++i) {
        let thumb = portfolio[i].thumbPublic;
        let content = portfolio[i].contentPublic;
        let loginTrigger = '';

        if('thumbProtected' in portfolio[i]) {
            loginTrigger = '<a class="js-trigger js-trigger-authenticate trigger-authenticate" content="authentication">login to view</a>';
        }
        
        $('.js-gallery').append(
            '<div class="galleryItem js-sliderItem">' +
                '<a class="thumb js-trigger">' +  
                    '<img src="images/portfolio/' +
                        thumb +
                    '" />' +
                '</a>' +
                loginTrigger +
            '</div>' + 
            '<div class="galleryContent js-content js-galleryContent">' + 
                content + 
            '</div>' 
        );
    }

    // create login form
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
    $('#loginForm').submit( function(e) {
        e.preventDefault();
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
                $('#trigger-' + i).html(thumb);
            }	
            if ('contentProtected' in portfolio[i]) {
                content = portfolio[i].contentProtected;
                $('#content-' + i + ' .galleryContentWrap').html(content);
            }	
        }
    } 
}