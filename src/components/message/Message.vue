<template>
    <span :id="'mes-'+id" class="message-text" :action="Action" :HavePaints="HavePaints"
     v-emotes="Emotes" v-twitch-emotes="twEmotes" v-personal-emotes="pEmotes">
          {{ Parameters }}
    </span>
</template>

<script>
export default {
  name: 'MessageText',

  data() {
    return {
      interpolateSize: this.$route.query.interpbs != "0",
      font_size: this.$route.query.font_size || "18",
    }
  },

  props: {
    HavePaints: String,
    Emotes: Object,
    pEmotes: Array,
    twEmotes: Object,
    Parameters: String,
    Action: Boolean,
    color: String,
    id: String,
  },

  computed: {
    emoteSize() {
      if (this.interpolateSize == "1" && parseInt(this.font_size)) {
        return (parseInt(this.font_size) + 14).toString() + "px"
      }
      return "32px"
    },
    Font_Size() {
        return `${this.font_size}px`
    },
  },
  watch: {
    HavePaints() {
      document.getElementById("mes-"+this.id).setAttribute("HavePaints", this.HavePaints)
    }
  }
}
</script>

<style>
  .message-text img[ZeroWidth="true"] {
    position: absolute;
		z-index: 1;
		transform: translateX(-100%);
  }

  .message-text[action="true"][HavePaints="false"] {
    color: v-bind('color')
  }
  .message-text img[ZeroWidth="true"] {
    position: absolute;
		z-index: 1;
		transform: translateX(-100%);
  }
  .message-text {
    bottom: 5px;
    margin-right: 13px;
    filter: v-bind('filterText');
  }

  .message-text img, .emoji {
    height: v-bind(emoteSize);
    vertical-align: middle;
    filter: unset;
    padding-right: 8px;
  }

</style>