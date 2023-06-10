<template>
    <span :id="'nick-'+id" :HavePaints="HavePaints" class="message-nick" :style="{color: color}">{{ nick }}: </span>
</template>

<script>

export default {
  name: 'MessageNick',

  data() {
    return {
      displayName: ""
    }
  },

  props: {
    HavePaints: Boolean,
    Login: String,
    Tags: Object,
    id: String,
    color: String,
  },

  created() {
    this.displayName = this.Tags["display-name"]
      if (this.Tags["display-name"] == undefined) {
        this.displayName = this.Login
      }
  },
  
  computed: {
    nick() {
      if (this.displayName.toLowerCase() != this.Login) return `${this.Login} (${this.displayName})`
      return this.displayName
    },
  },
  watch: {
    HavePaints() {
      document.getElementById("nick-"+this.id).setAttribute("HavePaints", this.HavePaints.toString())
    }
  }
}
</script>

<style>

</style>