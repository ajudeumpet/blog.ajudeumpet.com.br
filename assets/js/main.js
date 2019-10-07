var _results = {"posts":[{"title":"O que você precisa saber antes de resgatar um animal das ruas","slug":"como-fazer-um-resgate","tags":[{"id":"5c4f05c3dc4995000103dafc","name":"Resgate","slug":"resgate","description":"Entenda mais sobre o resgate de um animal lendo nossas postagens.","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Tags-19.png","visibility":"public","meta_title":"Resgate de animais","meta_description":"Entenda mais sobre o resgate de um animal lendo nossas postagens.","created_at":"2019-01-28T13:38:11.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-25T01:30:09.000Z","updated_by":"5d2500980a3a1b00010f90d8","parent":null},{"id":"5c4f05c3dc4995000103dafd","name":"Segurança","slug":"seguranca","description":"A segurança de nossos amiguinhos em primeiro lugar! Saiba como proteger seu animal e cuide sempre muito bem dele <3","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Tags-23.png","visibility":"public","meta_title":"Segurança para animais","meta_description":"A segurança de nossos amiguinhos em primeiro lugar! Saiba como proteger seu animal e cuide sempre muito bem dele <3","created_at":"2019-01-28T13:38:11.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-24T19:25:49.000Z","updated_by":"5c4afe76dc4995000103daf1","parent":null}]},{"title":"Do resgate à adoção: quais os passos para salvar um animal da rua?","slug":"do-resgate-a-adocao","tags":[{"id":"5c4f05c3dc4995000103dafc","name":"Resgate","slug":"resgate","description":"Entenda mais sobre o resgate de um animal lendo nossas postagens.","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Tags-19.png","visibility":"public","meta_title":"Resgate de animais","meta_description":"Entenda mais sobre o resgate de um animal lendo nossas postagens.","created_at":"2019-01-28T13:38:11.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-25T01:30:09.000Z","updated_by":"5d2500980a3a1b00010f90d8","parent":null},{"id":"5c50aeb5dc4995000103dbae","name":"Saúde","slug":"saude","description":"Nessas postagens trataremos de assuntos relacionados à saúde dos pets. Acompanhe com a gente!","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Tags-20.png","visibility":"public","meta_title":"Saúde dos pets","meta_description":"Nessas postagens trataremos de assuntos relacionados à saúde dos pets. Acompanhe com a gente!","created_at":"2019-01-29T19:51:17.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-24T19:25:49.000Z","updated_by":"5c4afe76dc4995000103daf1","parent":null},{"id":"5c50aeb5dc4995000103dbaf","name":"Adoção","slug":"adocao","description":"Veja aqui a lista de nossas postagens que abordam a adoção.","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Tags-17-1.png","visibility":"public","meta_title":"Adoção","meta_description":"Veja aqui a lista de nossas postagens que abordam a adoção.","created_at":"2019-01-29T19:51:17.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-24T19:25:49.000Z","updated_by":"5c4afe76dc4995000103daf1","parent":null},{"id":"5c50aeb5dc4995000103dbb0","name":"Guarda responsável","slug":"guarda-responsavel","description":"Ao longo dessas postagens você entenderá o que é a guarda responsável e por que ela é tão importante para o bem estar dos pets.","feature_image":"https://blog.ajudeumpet.com.br/content/images/2019/03/Posts-1-15-27-1.png","visibility":"public","meta_title":"Guarda responsável","meta_description":"Ao longo dessas postagens você entenderá o que é a guarda responsável e por que ela é tão importante para o bem estar dos pets.","created_at":"2019-01-29T19:51:17.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-07-24T19:25:49.000Z","updated_by":"5c4afe76dc4995000103daf1","parent":null}]},{"title":"Bem-vindos ao blog do Ajude Um Pet!","slug":"bem-vindos","tags":[{"id":"5c51004ddc4995000103dc7c","name":"Ajude Um Pet","slug":"ajude-um-pet","description":"Saiba mais sobre o Ajude Um Pet, esse projeto tão especial pensado e construído por vários voluntários!","feature_image":"/content/images/2019/03/Icon_wordpress--512x512--02-4.png","visibility":"public","meta_title":"Ajude Um Pet","meta_description":"Saiba mais sobre o Ajude Um Pet, esse projeto tão especial pensado e construído por vários voluntários!","created_at":"2019-01-30T01:39:25.000Z","created_by":"5c4afe76dc4995000103daf1","updated_at":"2019-04-29T20:54:51.000Z","updated_by":"5c4afe76dc4995000103daf1","parent":null}]}],"meta":{"pagination":{"page":1,"limit":3,"pages":9,"total":25,"next":2,"prev":null}}}
var DEBOUNCE = {};
var CURRENT_HOST = [location.protocol, '//', location.host].join('');
var LIMIT_TO_SHOW_BUTTON_BACK_TOP = 200
var DURANTIONS = {
    SHOW_BUTTON: 300
}
var STATE = {
    menuMobileIsOpened: false
}

onInit();

function onInit() {
    $('#search-field').keyup(onSearch);
    $('.search-icon').click(onClickSearch);
    $('.search-popover').click(stopPropagation);
    $('#back-top').click(onClickScrollTop);
    $('#menu-mobile').click(onClickMenuMobile);
    $('#drop-back').click(onClickMenuMobile);
    $('#drawer-button').click(onClickMenuMobile);
    $(window).scroll(onScroll)
}

function changeDropBack() {
    if (STATE.menuMobileIsOpened) {
        $('#drop-back').css({
            display: 'none'
        })
        return
    }

    $('#drop-back').css({
        display: 'block'
    })
}

function onClickMenuMobile() {
    console.log('onClickMenuMobile');
    var drawer = $('#drawer')

    if (STATE.menuMobileIsOpened) {
        drawer.removeClass('open-drawer')
    } else {
        drawer.addClass('open-drawer')
    }
    changeDropBack()
    STATE.menuMobileIsOpened = !STATE.menuMobileIsOpened;
}

function onScroll() {
    if ($(this).scrollTop() > LIMIT_TO_SHOW_BUTTON_BACK_TOP) {
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
    DEBOUNCE[key] = setTimeout(fn, m || 400)
}

function getGhostPostUrl() {
    return ghost.url.api('posts', {
        fields: ['title', 'slug'],
        include: ['tags'],
        order: 'published_at',
        limit: 'all',
    })
}

function searchInit() {
    var inputedSearch = $('#search-field').val()

    var url = getGhostPostUrl();

    $.ajax(url).then(function (res) {
        var fnMapperToRenderize = function(_post) {
            var _array = []
            _post.tags.map(function(_tag) {
                return _array.push(_tag.slug)
            })

            return ({
                tags: _array.join(','),
                title: _post.title
            })
        }
        var _posts = res.posts.map(fnMapperToRenderize)
        var results = fuzzysort.go(inputedSearch, _posts, {
            keys: [
                'title',
                'tags'
            ],
            limit: 6,
            allowTypo: false,
            threshold: -3500
        });

        for (var key in results) {
            if (key < results.length) {
                var result = results[key].obj;
                $('#search-box').css('display', 'block');
                $('#search-list').append('<li><a href="/' + result.slug + '/">' + result.title + '</a></li>');
            };
        }
    })

}
