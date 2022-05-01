import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from 'aws-amplify'
import awsConfig from "./aws-exports"
import "@aws-amplify/ui-vue/styles.css"
import Vuelidate from 'vuelidate'
import Vue from 'vue';

Auth.configure(awsConfig)

createApp(App).use(store).use(router).mount('#app')
