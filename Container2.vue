<template>
    <div class="conteiner2">
      <p v-show="view" v-text="message"></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'SimpleWine является прямым поставщиком и гарантирует качество, подлинность, хранение и перевозку\nв соответствии с мировыми стандартами',
        view: true
      }
    }
  }
  </script>  