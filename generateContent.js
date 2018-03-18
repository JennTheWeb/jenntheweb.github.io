function generateContent(portfolio) {

    let loginTrigger = '';
    let loginForm = '';

    // create gallery items using portfolio object
    for (let i = 0; i < portfolio.length; ++i) {
        let thumb = portfolio[i].thumbPublic;
        let content = portfolio[i].contentPublic;

        if('thumbProtected' in portfolio[i]) {

            loginTrigger = '<a class="js-trigger trigger-authenticate" content="authentication">login to view</a>';

            loginForm = 
            '<form method="get" name="login" id="loginForm">' +
                'Super Secret Password:' +
                '<input class="js-loginInput" type="text" name="inputbox" value="">' +
                '<input class="js-authenticate" type="button" name="button" value="click">' +
            '</form>';
        }
        
        $('.js-gallery').append(
            '<div class="galleryItem js-galleryItem">' +
                '<a class="thumb js-trigger">' +  
                    '<img src="images/portfolio/' +
                        thumb +
                    '" />' +
                '</a>' +
                loginTrigger +
            '</div>' + 
            '<div class="galleryContent js-content js-galleryContent js-lightwindowContent">' + 
                content + 
                loginForm +
            '</div>' 
        );
    }

    // create login form lightwindow
    $('body').prepend(
        '<div class="galleryContent galleryContent-text js-content js-lightwindowContent" id="authentication">' + 
            '<div class="galleryContentWrap js-galleryContentWrap">' +
            loginForm +
            '</div>' +
        '</div>'
    );

    portfolioAuthentication();
}

function portfolioAuthentication() {


    createLightwindow('.js-trigger', '.js-content');
    
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
            $('#close').click();
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

function createGallerySlider() {
    createGallery();
    
    $('.js-slider.js-gallery').find('.js-galleryItem').addClass('js-sliderItem');

    var width = 
    $('.js-slider').innerWidth() - 
    parseInt($('.js-slider').css('padding-left')) - 
    parseInt($('.js-slider').css('padding-right'));
    
    createSlider(2, width);
}