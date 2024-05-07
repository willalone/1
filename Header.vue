<template>
    <div class="header">
      <div class="conteiner">
        <Menu></Menu>
        <SimpleText></SimpleText>
        <Image></Image>
        <Container2></Container2>
        <Buttons></Buttons>
        <PageButton></PageButton>
      </div>
    </div>
  </template>
  
  <script>
  import Menu from './Menu.vue';
  import SimpleText from './SimpleText.vue';
  import Image from './Image.vue';
  import Container2 from './Container2.vue';
  import Buttons from './Buttons.vue';
  import PageButton from './PageButton.vue';
  
  export default {
    components: {
      Menu,
      SimpleText,
      Image,
      Container2,
      Buttons,
      PageButton
    }
  }
  </script>
  