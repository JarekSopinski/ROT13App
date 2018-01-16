$(document).ready(function(){

    const $decipherInput = $('#decipher-input');
    const $decipherOutput = $('#decipher-output');
    const $button = $('#decipher-btn');

    function decodeLetterInROT13(letter) {
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

    function decodeStringInROT13(str) {
        let codedArray = str
            .toUpperCase()
            .split('');
        let decodedArray = [];
        for (let i = 0; i < codedArray.length; i++) {
            let newLetter;
            newLetter = decodeLetterInROT13(codedArray[i]);
            decodedArray = decodedArray.concat(newLetter);
        } // end of loop
        let decodedString = decodedArray.join('');
        return decodedString
    }

    $button.on('click', function() {
        let inputValue = $decipherInput.val();
        let decodedString = decodeStringInROT13(inputValue);
        $decipherOutput.text(decodedString)
    });

});