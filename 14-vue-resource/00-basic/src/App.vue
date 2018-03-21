<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button @click="fetchData" class="btn btn-primary">Get Data</button> <br> <br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users">{{ user.username }} - {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("", this.user)
        .then(res => {
          this.fetchData()
        });
    },
    fetchData(){
        this.$http.get('')
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.users = data;
        })
    }
  }
};
</script>

<style>

</style>
