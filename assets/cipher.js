$(document).ready(function(){

    const $cipherInput = $('#cipher-input');
    const $cipherOutput = $('#cipher-output');
    const $cipherBtn = $('#cipher-btn');
    const $decipherInput = $('#decipher-input');
    const $decipherOutput = $('#decipher-output');
    const $decipherBtn = $('#decipher-btn');

    const codeOrDecodeLetter = (letter) => {

        if (letter.match(/[\W_]/g) || letter.match(/\d+/g)) {
            return letter
        } else {
            const unicodeIndex = letter.charCodeAt(0);
            let newIndex;
            if (unicodeIndex <= 77) {
                newIndex = unicodeIndex + 13;
                return String.fromCharCode(newIndex);
            } else {
                newIndex = unicodeIndex - 13;
                return String.fromCharCode(newIndex)
            }
        }

    };

    const codeOrDecodeString = (initialString) => {

        const initialArray = initialString
            .toUpperCase()
            .split('');

        const newArray = [];

        initialArray.forEach(letter => {
            const newLetter = codeOrDecodeLetter(letter);
            newArray.push(newLetter);
        });

        return newArray.join('');
    };

    const renderOutput = (input, output) => {
        const newString = codeOrDecodeString(input.val());
        output.text(newString)

    };

    $cipherBtn.on('click', () => renderOutput($cipherInput, $cipherOutput));
    $decipherBtn.on('click', () => renderOutput($decipherInput, $decipherOutput));

});