<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
            v-model="inputValue"
            name="input-7-1"
            label="Output"
            v-bind:error="error"
            v-bind:error-messages="errorMessages"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>JWT Header</h2>
          <pre v-bind:ref="'prismJwtHeaderContent'">
<code
  class="language-json"
  v-text="jwtHeaderContent"
/>
</pre>
          <v-btn
            v-on:click="copyText(headerValue)"
          >
            Copy
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>JWT Payload</h2>
          <pre v-bind:ref="'prismJwtPayloadContent'">
<code
  class="language-json"
  v-text="jwtPayloadContent"
/>
</pre>
          <v-btn
            v-on:click="copyText(payloadValue)"
          >
            Copy
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import JwtApi from '@/api/jwt'

export default {
  name: 'Jwt',
  components: {},
  filters: {
    pretty(value) {
      let jsonString = ''
      try {
        jsonString = JSON.stringify(JSON.parse(value), null, 2)
      } catch (e) {
        console.log(e)
      }

      return jsonString
    },
  },
  props: {
    type: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      value: '',
      headerValue: '',
      payloadValue: '',
      error: false,
      errorMessages: [],
    }
  },
  computed: {
    jwtHeaderContent() {
      this.$nextTick(() => {
        Prism.highlightAllUnder(this.$refs.prismJwtHeaderContent)
      })

      return this.headerValue
    },
    jwtPayloadContent() {
      this.$nextTick(() => {
        Prism.highlightAllUnder(this.$refs.prismJwtPayloadContent)
      })

      return this.payloadValue
    },
    inputValue: {
      get() {
        return this.value
      },
      async set(newValue) {
        this.value = newValue
        this.headerValue = ''
        this.payloadValue = ''

        try {
          if (newValue !== '') {
            const { data } = await JwtApi.jwtDecode(newValue)
            this.error = false
            this.errorMessages = []

            this.headerValue = data.data.header
            this.payloadValue = data.data.payload
          }
        } catch (error) {
          this.error = true
          this.errorMessages.push('Invalid JWT token.')
        }
      },
    },
  },
  methods: {
    copyText(value) {
      navigator.clipboard.writeText(value)
    },
  },
}
</script>
