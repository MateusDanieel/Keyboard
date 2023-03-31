(function() {
    'use strict';
    
    const keyboardKeys = document.querySelectorAll('.sec-main__keyboard__row__key');
    const keyboardFunctKeys = [44, 112, 114, 116, 117, 118, 121, 122, 123];
    
    keyboardKeys.forEach((keyboardKey) => {
        
        if(keyboardKey.innerText.length > 3) {
            keyboardKey.setAttribute('style', 'font-size: 10px !important;');
        }

        document.addEventListener('keydown', function(e) {
            let code = e.which || e.keyCode;

            keyboardFunctKeys.forEach((f) => {
                if (code == f) {
                    e.preventDefault();
                }
            })
            
            if (keyboardKey.innerText == e.key || keyboardKey.dataset.keycode == e.keyCode) {

                if (keyboardKey.classList.contains('checked')) {

                    keyboardKey.classList.remove('checked');

                } else {

                    keyboardKey.classList.add('checked');

                }

            }

        });

        // FIX - tecla 'print screen' por alguma razão não funciona com 'keydown'

        document.addEventListener('keyup', function(e) {
           
            if (keyboardKey.dataset.keycode == '44' && keyboardKey.dataset.keycode == e.keyCode) {

                if (keyboardKey.classList.contains('checked')) {
                    keyboardKey.classList.remove('checked');
                } else {
                    keyboardKey.classList.add('checked');
                }

            }

        });



    });
})();