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
            <h2>Reset you password</h2>

            <div class="tab-content pt-2">
              <div
                class="tab-pane fade show active profile-overview"
                id="profile-overview"
              >
                <br />
                <form v-on:submit.prevent>
                  <div class="row mb-3">
                    <label for="code" class="col-md-4 col-lg-3 col-form-label"
                      >Code</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="code"
                        type="number"
                        class="form-control"
                        id="code"
                        v-model="formValues.code"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="password"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Password</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="passowrd"
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="formValues.password"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="passwordc"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Password</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        id="passwordc"
                        v-model="formValues.passwordc"
                      />
                      <p
                        style="color: red; display: inline; font-size: 12px"
                        id="message"
                        v-if="formValues.password != formValues.passwordc"
                      >
                        *Password confirmation does not match
                      </p>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from "aws-amplify";
import postscribe from "postscribe";
import dashboard from "./dashboard.vue";
//alert(this.$route.params.id);
export default {
  name: "confirmPage",
  data() {
    return {
      formValues: {
        code: "",
        password: "",
        passwordc: "",
      },
      uid: this.$route.params.email,
    };
  },
  methods: {
    async submitForm() {
      try {
        Auth.forgotPasswordSubmit(
          this.uid,
          String(this.formValues.code),
          this.formValues.password
        )
          .then(
            (data) => console.log("data: " + data),
            alert("Password updated successfully")
          )
          .catch((err) => console.log("error: " + err));

        this.$router.push("/Login");
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    },
  },
};
</script>

<style></style>