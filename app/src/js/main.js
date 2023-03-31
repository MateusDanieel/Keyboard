(function() {
    'use strict';
    
    var keyboardKeys = document.querySelectorAll('.sec-main__keyboard__row__key');
    
    keyboardKeys.forEach((keyboardKey) => {
        
        if(keyboardKey.innerText.length > 3) {
            keyboardKey.setAttribute('style', 'font-size: 10px !important;');
        }

        document.addEventListener('keypress', function(e) {
            console.log(e.keyCode)

            if (keyboardKey.innerText == e.key || keyboardKey.dataset.keycode == e.keyCode) {

                if (keyboardKey.classList.contains('checked')) {
                    keyboardKey.classList.remove('checked');
                } else {
                    keyboardKey.classList.add('checked');
                }

            }

        });

    });
})();