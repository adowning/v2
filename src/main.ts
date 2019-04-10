import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/main.css";
import VueParse, { VueParseOptions } from "vue-parse";
import locale from "element-ui/lib/locale/lang/en";

import "toastr/build/toastr.min.css";
import toastr from "toastr";

toastr.options = {
    positionClass: "toast-bottom-right",
    timeOut: 2500,
    progressBar: true
};

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Vue.use<VueParseOptions>(VueParse, {
    appId: "0rehSPD4qLQpaMruEdEwzqOyePFD9gzf79JlRX8H",
    key: "kARaPYFuVA3v8CF3AZXNdioPM16oiB0nsfhXhBMx",
    serverURL: "https://vue-parse-example.back4app.io",
    onerror: e => toastr.error(`Error while querying data: ${e.message}`)
});

new Vue({
    render: h => h(App)
}).$mount("#app");
