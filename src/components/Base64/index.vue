<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="12"
          v-bind:order="inputOrder"
        >
          <v-textarea
            v-model="textValue"
            name="input-7-1"
            label="Encode"
            v-bind:readonly="type === 'decode'"
            outlined
          />
          <v-btn
            v-if="type === 'decode'"
            v-on:click="copyText(textValue)"
          >
            Copy
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
            v-model="base64Value"
            name="input-7-1"
            label="Decode"
            value="Test"
            v-bind:readonly="type === 'encode'"
            outlined
          />
          <v-btn
            v-if="type === 'encode'"
            v-on:click="copyText(base64Value)"
          >
            Copy
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Base64Api from '@/api/base64'

export default {
  name: 'Base64',
  components: {},
  props: {
    type: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      text: '',
      base64: '',
    }
  },
  computed: {
    inputOrder() {
      if (this.type === 'encode') {
        return 0
      }

      return 1
    },
    textValue: {
      get() {
        return this.text
      },
      async set(newValue) {
        this.text = newValue

        try {
          if (newValue !== '') {
            const { data } = await Base64Api.base64Encode(newValue)
            this.base64 = data.data.value
          } else {
            this.base64 = ''
          }
        } catch (error) {
          console.log(error.response.data.error)
        }
      },
    },
    base64Value: {
      get() {
        return this.base64
      },
      async set(newValue) {
        this.base64 = newValue
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
