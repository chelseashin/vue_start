#### Vue - Instance

19-07-12



* 인스턴스와 생성자 함수

  ```javascript
  // 생성자 함수
  function Person(name, job) {
  	this.name = name;
  	this.job = job;
  }
  
  // 객체 생성
  var p = new Person('chelsea', 'developer');
  
  // p라는 객체가 생성됨
  Person {name: "chelsea", 'developer'}
  ```

  

  ```javascript
  // 생성자 함수 정의 - logText라는 함수 넣어놓음
  function Vue() {
      this.logText = function() {
          console.log('hello');
      }
  }
  
  // New Vue로 생성된 함수로 객체를 찍어낼 때마다
  var vm = new Vue();
  
  // 객체 안에는 logText라는 미리 정의된 함수를 사용 가능
  vm.logText();
  ```

  

* 인스턴스에서 사용할 수 있는 속성과 API

  ```javascript	
  <script>
          // 인스턴스 생성 - viewmodel의 약자
          var vm = new Vue({
              // app이라는 태그를 찾아서 인스턴스를 붙이겠다고 하는 의미
              el: '#app',
              data: {
                  message: 'hi'
              },
              methods: {
                  
              },
              created: function( {
                  
              })
          });
  </script>
  ```

  