<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-autocomplete
          v-model="value"
          v-bind:items="items"
          v-bind:search-input.sync="searchValue"
          placeholder="10.0.0.0/24"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validIpv4 } from '@/utils'

export default {
  name: 'Cidr',
  components: {},
  props: {},
  data() {
    return {
      ip: ['0', '0', '0', '0'],
      cidrValues: ['8', '16', '24'],
      items: ['0.0.0.0/8', '0.0.0.0/16', '0.0.0.0/24'],
      isValidCidrIp: false,
      value: null,
    }
  },
  computed: {
    searchValue: {
      get() {
        return this.value
      },
      set(newValue) {
        if ((this.isIpPartiallyValid(newValue)
          || validIpv4(newValue))
          && this.isCidrValid(newValue)
        ) {
          this.setIp(newValue)
          this.generateItems(newValue)
          this.items.push(newValue)
        }
      },
    },
  },
  methods: {
    isCidrValid(value) {
      const slashCount = (value.match(/\//g) || []).length
      if (slashCount > 1) {
        return false
      }

      return true
    },
    isIpPartiallyValid(value) {
      if (value === null) {
        return false
      }

      const dotCount = (value.match(/\./g) || []).length
      if (dotCount > 3) {
        return false
      }

      const parts = value.split('.')
      const lastIndex = parts.length - 1

      if (parts[lastIndex] === '') {
        parts.pop()
      }

      if (parts.length > 4) {
        return false
      }

      if (!parts.every(this.validIpPart)) {
        return false
      }

      return true
    },
    setIp(value) {
      const parts = value.split('.')

      const maxI = 3
      for (let i = 0; i < parts.length && i <= maxI; i++) {
        const part = parts[i]
        if (i === maxI && part.indexOf('/') > -1) {
          this.ip[i] = part.substring(0, part.indexOf('/'))
        } else {
          this.ip[i] = part
        }
      }
    },
    validIpPart(value) {
      if (value.length > 3 || value.length === 0) {
        return false
      }

      if (!value.match(/^\d+$/)) {
        return false
      }

      if (Number(value) < 0 || Number(value) > 255) {
        return false
      }

      return true
    },
    generateItems() {
      const items = []
      this.cidrValues.forEach((elm) => {
        const cidrIp = `${this.ip.join('.')}/${elm}`
        items.push(cidrIp)
      })

      this.items = items
    },
  },
}
</script>
