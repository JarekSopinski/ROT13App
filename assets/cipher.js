$(document).ready(function(){

    const $cipherInput = $('#cipher-input');
    const $cipherOutput = $('#cipher-output');
    const $button = $('#cipher-btn');

    function codeLetterInROT13(letter) {
        if (letter.match(/[\W_]/g) || letter.match(/\d+/g)) {
            return letter
        } else {
            let unicodeIndex = letter.charCodeAt(0);
            let newIndex;
            if (unicodeIndex <= 77) {
                newIndex = unicodeIndex + 13;
                return String.fromCharCode(newIndex);
            } else {
                newIndex = unicodeIndex - 13;
                return String.fromCharCode(newIndex)
            }
        }
    }

    function codeStringInROT13(str) {
        let array = str
            .toUpperCase()
            .split('');
        let codedArray = [];
        for (let i = 0; i < array.length; i++) {
            let newLetter;
            newLetter = codeLetterInROT13(array[i]);
            codedArray = codedArray.concat(newLetter);
        } // end of loop
        let codedString = codedArray.join('');
        return codedString
    }

    $button.on('click', function() {
        let inputValue = $cipherInput.val();
        let decodedString = codeStringInROT13(inputValue);
        $cipherOutput.text(decodedString)
    });

});