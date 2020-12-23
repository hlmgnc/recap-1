<template>
  <div class="user">
    <h1>
      {{ user.handle }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
