<script>
export default {
  props: {
    title: String,
    order: Number
  }
}
</script>
<template>
    <h3>{{order}} {{title}}</h3>
</template>
