<template>
  <div>
    <!-- <app-header v-bind: 프롭스 속성 이름: "상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
    <!-- component 태그로 컴포넌트 등록 -->
    <!-- 컴포넌트 명명법 종류 3가지 -->
    <!-- <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppHeader from './components/AppFooter.vue'

// new Vue({
//   data: {
//     str: 'hi'
//   }
// })
// 위와 같음

export default {
  data: function() {
    return {
      str: 'Header Header Header'
    }
  },
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter

  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>