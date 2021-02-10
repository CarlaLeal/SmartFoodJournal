<template>
  <div class="Login">
      <h1>  Welcome </h1>
          <input class="field" type="text" v-model="email" placeholder="e-mail">
          <input class="field" type="password" v-model="password" placeholder="password">
          <button  @click="login"> Login </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
    data: function() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            const formData = {
                "email": this.email,
                "password": this.password
            }
            this.$store.dispatch('login', formData)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Login {
	  display: flex;
	  flex-direction: column;
}
h1 {
    font-size: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.field {
    margin: 10px 10px 10px 10px;
    height: 35px;
    width: 350px;
	  margin-left: auto;
	  margin-right: auto;
    font-size: 15px;
}

button {
    width: 350px;
	  margin-left: auto;
	  margin-right: auto;
}

</style>
