import Component from '@ember/component';

export default Component.extend({
    keyphrase: '',
    actions: {
        handleChange(keyphrase) {
            window.console.log("keyphrase: " + keyphrase)
        }
    } 
});
