import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createHead } from "@vueuse/head"

import twemoji from 'twemoji';
import emotes from './utils/emotes';

const app = createApp(App)
const head = createHead()

app.use(head)

app.directive('emoji', {
    mounted (el) {
      el.innerHTML = twemoji.parse(el.innerHTML)
    }
  })

app.directive('emotes', {
    mounted (el, binding) {
        el.innerHTML = emotes.ParseExtensions(el.innerHTML, binding.value)
    }
})

app.directive('twitch-emotes', {
    mounted (el, binding) {
        el.innerHTML = emotes.ParseTwitch(el.innerHTML, binding.value)
    }
})

app.directive('personal-emotes', {
    mounted (el, binding) {
        el.innerHTML = emotes.ParsePersonal(el.innerHTML, binding.value)
    }
})

app.use(router).mount('#app')