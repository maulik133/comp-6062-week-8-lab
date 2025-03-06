const app = Vue.createApp({
    data(){
        return{
            mainHeading: "Welcome to the Vue.js",
            message: "this message is displayed based onn a boolean property.",
            showMessage: true
        };
    }
});

app.mount('#app');