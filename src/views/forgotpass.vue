<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import { Auth } from "aws-amplify";
import awsConfig from "../aws-exports";

Auth.configure(awsConfig);
</script>

<template>
  <section class="section profile">
    <div class="row">
      <div
        class="col align-self-center"
        style="margin-left: 20%; margin-right: 20%"
      >
        <div style="padding: var(--amplify-space-large); text-align: center">
          <img
            class="amplify-image"
            alt="Amplify logo"
            src="../../public/frontend/assets/img/Picture3.png"
          />
        </div>
        <div class="card">
          <div class="card-body pt-3">
            <h2>Reset your password</h2>

            <div class="tab-content pt-2">
              <div
                class="tab-pane fade show active profile-overview"
                id="profile-overview"
              >
                <br />
                <form v-on:submit.prevent>
                  <label for="code" class="col-md-4 col-lg-3 col-form-label"
                    ><b>Email</b></label
                  ><br />
                  <div class="row mb-3">
                    <div class="col-md-4 col-lg-5" style="margin-left: 28%">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="formValues.email"
                      />
                    </div>
                  </div>
                  <div class="text-center">
                    <button @click="submitForm" class="btn btn-primary">
                      Submit</button
                    ><!--<br><br>
                    <a href="#">Forgot your password?</a>-->
                  </div>
                </form>
              </div>
            </div>
          </div>
           <router-link to="/Login"
              ><a>Back to Sign In</a></router-link
            ><br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import postscribe from "postscribe";
import dashboard from "./dashboard.vue";
import { Auth } from "aws-amplify";

export default {
  name: "forgotpass",
  data() {
    return {
      formValues: {
        email: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Send confirmation code to user's email
        Auth.forgotPassword(this.formValues.email)
          .then(this.$router.push("/submitcode/" + this.formValues.email))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    },
  },
};
</script>

<style></style>