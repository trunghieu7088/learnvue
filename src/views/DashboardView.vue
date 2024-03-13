<template>
    <h1>Dashboard nay ngon</h1>
    <input type="text" ref="addressInput">
  <button @click="getValue">Get Value</button>

  <div>
    <button class="calbtn" data-attribute="ss" @click="handleClick">Get Address</button>
    <button class="calbtn" data-attribute="aa" @click="handleClick">Get Address</button>
    <button class="calbtn" data-attribute="bb" @click="handleClick">Get Address</button>
  </div>

</template>

<script>

export default {
  
  methods: {
    getValue() {
      const addressInputValue = this.$refs.addressInput.value;
      console.log(addressInputValue);
      alert(addressInputValue);
    },

    handleClick(event) {
      const dataAttribute = event.target.getAttribute('data-attribute');
      console.log(dataAttribute);
      alert(dataAttribute);
    }

  }
};
</script>
