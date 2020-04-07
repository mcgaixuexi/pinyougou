window.addEventListener('load', function() {
    var pre_img = document.querySelector('.pre_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    pre_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    pre_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    pre_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        mask_x = x - mask.offsetWidth / 2;
        mask_y = y - mask.offsetHeight / 2;
        maskMax = pre_img.offsetWidth - mask.offsetWidth;
        if (mask_x <= 0) {
            mask_x = 0;
        } else if (mask_x >= maskMax) {
            mask_x = maskMax;
        }
        if (mask_y <= 0) {
            mask_y = 0;
        } else if (mask_y >= maskMax) {
            mask_y = maskMax;
        }
        mask.style.left = mask_x + 'px';
        mask.style.top = mask_y + 'px';
        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var big_x = mask_x * bigMax / maskMax;
        var big_y = mask_y * bigMax / maskMax;
        bigImg.style.left = -big_x + 'px';
        bigImg.style.top = -big_y + 'px';

    })
})