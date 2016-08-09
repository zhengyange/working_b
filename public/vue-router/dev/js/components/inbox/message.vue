<template>
  <div>
    <div v-if="$loadingRouteData">Loading data...</div>
    <div v-if="!$loadingRouteData">message #{{message.id}}: {{message.text}}</div>
  </div>
</template>

<script>
// var messagesService = require('../../services/messages')
import messagesService from '../../services/messages.js';

export default {
  route: {
    data ({ to, next }) {
      // "this" is available
      var params = {
        id: to.params.messageId
      }

      // callback based
      messagesService.get(params, (err, message) => {
        if (err) {
          // handle error, e.g. display a warning
        } else {
          next({
            message: message
          })
        }
      })

      // or promise based (with ES6 sugar)
      // return messagesService
      //   .get(params)
      //   .then(message => ({ message }))
    }
  },

  // default state
  data () {
    return {
      message: {}
    }
  }
}
</script>
