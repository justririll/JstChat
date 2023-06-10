<template>
    <div v-for="badge in Badges" :key="badge" class="Badge">
        <img :provider="badge.provider" :src="badge.Url">
    </div>
</template>

<script>
export default {
  name: 'MessageBadges',

  props: {
    Badges: Array,
  }
}
</script>

<style>

</style>