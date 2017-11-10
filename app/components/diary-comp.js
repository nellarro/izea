import Component from '@ember/component';

export default Component.extend({
    text: '',
    keyphrase: '',
    encoded: '',
    actions: {
        handleSubmit(text, keyphrase, event) {
            event.preventDefault();
            this.set('encoded', this.vigenere(text, keyphrase))
        }
    },
    letterToKeyCode (letter) {
        return letter.charCodeAt(0) - 65;
    },
    
    // the actual cipher
    vigenere (text, keyword, decode) {
        let i = 0,
            b;
        keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");
        return text
            .toUpperCase()
            .replace(/[^A-Z]/g, "")
            .replace(/[A-Z]/g, letter => {
                b = keyword[i++ % keyword.length];
                return String.fromCharCode(
                    (this.letterToKeyCode(letter) +
                        (decode ? 26 - this.letterToKeyCode(b) : this.letterToKeyCode(b))) %
                        26 +
                        65
                )
            })
    }
     
});
