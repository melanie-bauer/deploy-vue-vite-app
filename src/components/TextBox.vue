<script>
export default{
  name: 'TextBox',
  props:{
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<template>
  <div class="box medium-mb hover">
    <h4 class="colored-bot-b">{{title}}</h4>
    <div id="text-container" class="text">
      <slot ></slot>
    </div>
  </div>
</template>

<style scoped>
#text-container{
  display: flex;
  align-content: center;
  padding: 5px;
}
.colored-bot-b {
  padding-bottom: 5px;
  border-bottom: 1.5px var(--primary) solid;
  font-weight: var(--font-weight-heading) !important;
}
.box{
  min-width: 90%;
  max-height: max-content;
  border: var(--primary) 2px solid;
  border-radius: 20px;
  padding: 20px;
}


@media(min-width: 992px)
{
  .box{
    min-width: auto;
    margin: 38px 0;
  }
}
</style>