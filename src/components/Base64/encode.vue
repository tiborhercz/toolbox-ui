<template>
  <v-textarea
    v-model="inputValue"
    name="input-7-1"
    label="Encode"
    outlined
  />
</template>

<script>
import Base64Api from '@/api/base64'

export default {
  name: 'Base64Encode',
  components: {},
  data() {
    return {
      value: '',
      apiResponseValue: '',
      error: false,
      errorMessages: [],
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      async set(newValue) {
        this.value = newValue

        this.error = false
        this.errorMessages = []

        try {
          if (newValue !== '') {
            const { data } = await Base64Api.base64Encode(newValue)
            this.$emit('response', data.data.value)
          } else {
            this.$emit('response', '')
          }
        } catch (error) {
          this.$emit('error', 'Could not encode base64')
        }
      },
    },
  },
}
</script>
