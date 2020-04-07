window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var focus_arrow_left = document.querySelector('.focus_arrow_left');
    var focus_arrow_right = document.querySelector('.focus_arrow_right');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        focus_arrow_left.style.display = 'block';
        focus_arrow_right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        focus_arrow_left.style.display = 'none';
        focus_arrow_right.style.display = 'none';
        timer = setInterval(function() {
            focus_arrow_right.click();
        }, 4000)
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                this.className = 'current';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                animate(ul, -index * focusWidth);
            }

        )
    }
    ol.children[0].className = 'current';
    var last = ul.children[0].cloneNode(true);
    ul.appendChild(last);
    // 无缝滚动
    var num = 0;
    var circle = 0;
    var flag = true;
    focus_arrow_right.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            for (var i = 0; i < ol.children.length; i++) {
                if (circle == ol.children.length) {
                    circle = 0;
                }
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }

    })
    focus_arrow_left.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * focusWidth + 'px';
                }
                num--;
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                circle--;
                for (var i = 0; i < ol.children.length; i++) {
                    if (circle < 0) {
                        circle = ol.children.length - 1;
                    }
                    ol.children[i].className = '';
                }
                ol.children[circle].className = 'current';

            }

        })
        // 设置定时器
    timer = setInterval(function() {
        focus_arrow_right.click();
    }, 4000)
    $(function() {
        var toolTop = $(".recommend").offset().top;
        $(window).scroll(function() {
            if ($(document).scrollTop >= toolTop) {
                $(".fixedtool").fadeIn();
            } else {
                $(".fixedtool").fadeOut();
            }
        })
    })
})