const { createApp } = Vue;
createApp({
    // ************ VARIABILI ************
    data() {
        return {
            //STRINGHE
            centerChilds: 'd-flex justify-content-center align-items-center text-center flex-wrap',
            img: 'img/04.webp',
            txt:'Hello World!'
        };
    }
}).mount('#my-app');