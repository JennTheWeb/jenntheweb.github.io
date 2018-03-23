//TODO: refactor this file

function generateContent(portfolio) {

    let loginTrigger = '';
    let loginForm = '';
    let caption = '';

    // create gallery items using portfolio object
    for (let i = 0; i < portfolio.length; ++i) {
        let thumb = portfolio[i].thumbPublic;
        let content = portfolio[i].contentPublic;

        if ('caption' in portfolio[i]) {
            caption =   '<div class="thumb_caption">' +
                            portfolio[i].caption +
                        '</div>';
        } else {
            caption = '';
        }
        
        if('thumbProtected' in portfolio[i]) {
            loginTrigger = '<a class="js-trigger js-loginTrigger trigger-authenticate" content="authentication"><span>login to view</span></a>';
        } else {
            loginTrigger = '';
        }
        
        $('.js-gallery').append(
            '<div class="galleryItem js-galleryItem">' +
                '<a class="thumb js-trigger">' +  
                    caption +
                    '<img src="images/portfolio/' +
                        thumb +
                    '" />' +
                '</a>' +
                loginTrigger +
            '</div>' + 
            '<div class="galleryContent js-content js-galleryContent js-lightwindowContent">' + 
                content + 
            '</div>' 
        );
    }

    // create login form lightwindow
    $('body').prepend(
        '<div class="galleryContent galleryContent-text js-content js-lightwindowContent" id="authentication">' + 
            '<div class="galleryContentWrap js-galleryContentWrap">' +
                '<form method="get" name="login" id="loginForm">' +
                    '<label for="loginBox">Super Secret Password:</label>' +
                    '<input class="js-loginInput" type="text" name="inputbox" value="" id="loginBox">' +
                    '<input class="js-authenticate" type="button" name="button" value="click">' +
                '</form>' +
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
            $('.js-loginTrigger').hide();
            $('#close').click();
        }
    }
    function showProtectedContent() {
        let numItems = portfolio.length;
        for (var i = 0; i < numItems; ++i) {
            let thumb = '';
            let content = '';

            let caption = '';
            if ('caption' in portfolio[i]) {
                caption =   '<div class="thumb_caption">' +
                                portfolio[i].caption +
                            '</div>';
            }

            if ('thumbProtected' in portfolio[i]) {
                thumb = caption +
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

    if( parseInt($(window).width()) < 900 ) {
        createSlider(1, width);
    } else if ( parseInt($(window).width()) > 1400 ) {
        createSlider(3, width);
    } else {
        createSlider(2, width);
    }
}