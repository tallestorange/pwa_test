/* eslint-disable no-console */

import { register } from 'register-service-worker'
var UpdatedEvent = new CustomEvent('swUpdated', { detail: null })

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      // console.log(registration)
      // registration.update()
      // self.skipWaiting()
      // console.log("アップデート完了")
      UpdatedEvent.detail = registration
      document.dispatchEvent(UpdatedEvent)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
