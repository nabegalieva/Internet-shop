$(document).ready(function () {
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"> > </button>',
        nextArrow: '<button type="button" class="slick-next"> < </button>',
    })
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').sublings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active')
    })
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault()
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
    })
    $('.catalog-item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault()
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
    })
    document.querySelectorAll('button[data-modal=consultation]').forEach(el => el.addEventListener('click', () => {
        document.querySelectorAll('overlay, #consultation').forEach(el => el.style.display = 'block')
    }))
    Array.from(document.querySelectorAll('modal_close')).forEach(el => el.addEventListener('click', () => {
        let modal = ['.overlay', '#consultation', '#order', '#thanks']
        modal.map(el => document.querySelectorAll(el).style.display = 'none')
    }))
    document.querySelectorAll('.button_submit').forEach(el => el.addEventListener('click',))
    document.querySelectorAll('.overlay,#order').forEach(el => el.style.display = 'block')
    })
    document.querySelectorAll('.button_submit').forEach(el => el.addEventListener('click',))
    document.querySelectorAll('.overlay, #thanks').forEach(el =>el.style.display='block')
    document.querySelectorAll('#order,#consultation').forEach(el => el.style.display='none')
    }))
    $(window).scroll(function () {
        if($(this).scrollTop() > 1000) {
                $('.pageup').fadeIn()
        }else{
                $('.pageup').fadeOut()
        }
    })
}