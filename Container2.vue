<template>
    <div class="conteiner2">
      <p v-show="view" v-html="message"></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'SimpleWine является прямым поставщиком и гарантирует <br> качество, подлинность, хранение и перевозку в <br> соответствии с мировыми стандартами',
        view: true
      }
    }
  }
  </script>  
