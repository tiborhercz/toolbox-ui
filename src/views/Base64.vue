<template>
  <base64
    v-bind:type="type"
  />
</template>

<script>
import Base64 from '@/components/Base64'

export default {
  name: 'Home',
  components: {
    Base64,
  },
  props: {
    type: {
      default: '',
      type: String,
    },
  },
  mounted() {
    console.log(this.type)
    console.log(this.$route.params)
  },
}
</script>
