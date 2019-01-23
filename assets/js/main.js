var DEBOUNCE = {};
var CURRENT_HOST = [location.protocol, '//', location.host].join('');
var LIMIT_TO_SHOW_BUTTON_BACK_TOP = 200
var DURANTIONS = {
    SHOW_BUTTON: 300
}

onInit();

function onInit() {
    $('#search-field').keyup(onSearch);
    $('.search-icon').click(onClickSearch);
    $('.search-popover').click(stopPropagation);
    $('#back-top').click(onClickScrollTop);
    $(window).scroll(onScroll)
}

function onScroll() {
    if($(this).scrollTop() > LIMIT_TO_SHOW_BUTTON_BACK_TOP) {
        $('#back-top').fadeIn(DURANTIONS.SHOW_BUTTON);
        return;
    }
    $('#back-top').fadeOut(DURANTIONS.SHOW_BUTTON);
}

function showButtonBackTop() {
    $()
}

function stopPropagation(event) {
    event.stopPropagation();
}

function onClickScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clearSearchPopover() {
    $('.search-popover').removeClass('search-popover--show')
}

function onClickSearch(event) {
    event.preventDefault();
    stopPropagation(event)
    $('.search-popover').addClass('search-popover--show')
    $('html').click(clearSearchPopover)
}

function onSearch() {
    debounce(searchInit)
}

function debounce(fn, m) {
    var key = fn.name;
    if (DEBOUNCE[key]) clearTimeout(DEBOUNCE[key])
    DEBOUNCE[key] = setTimeout(fn, m || 300)
}

function getGhostPostUrl() {
    return ghost.url.api('posts', {
        fields: ['title', 'slug', 'plaintext'],
        formats: 'plaintext'
    })
}

function searchInit() {
    var inputedSearch = $('#search-field').val()

    var url = getGhostPostUrl();

    $.ajax(url).then(function (res) {
        var results = fuzzysort.go(inputedSearch, res.posts, {
            keys: [
                'title',
                'plaintext'
            ],
            limit: 10,
            allowTypo: false,
            threshold: -3500
        });

        // for (var key in results) {
        //     if (key < results.length) {
        //         var result = results[key].obj;

        //         '<a href="' + url + '/' + result.slug + '/">' + result.title + '</a>'
        //     };
        // }
    })

}