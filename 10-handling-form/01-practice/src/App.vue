<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="email">Firstname</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.firstname">
                    </div>
                    <div class="form-group">
                        <label for="email">Lastname</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.lastname">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="user.password"
                                >
                    </div>
                </div>
            </div>            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button @click.prevent="submitted" class="btn btn-primary">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body" v-if="showResult">
                        <p>Full Name: {{ user.firstname }} {{ user.lastname }}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "Male"
      },
      showResult: false
    };
  },
  methods: {
    submitted() {
        this.showResult = true;
    }
  }
};
</script>

<style>

</style>
