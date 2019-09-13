import Vue from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import VueParse, { VueParseOptions } from "vue-parse";
import router from './router'

import "toastr/build/toastr.min.css";
import toastr from "toastr";
import vuetify from './plugins/vuetify';


toastr.options = {
    positionClass: "toast-bottom-right",
    timeOut: 2500,
    progressBar: true
};


Vue.config.productionTip = false;

Vue.use<VueParseOptions>(VueParse, {
    appId: 'andrews',
    key: 'RAAsdfasdf1234',
    serverURL: 'http://localhost:1337/parse',
    onerror: e => toastr.error(`Error while querying data: ${e.message}`)
});
console.log(Vue.$parse.user)
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
