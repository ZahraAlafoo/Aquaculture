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
            <h2>We Emailed You</h2>
            <br />
            Your code is on the way. To log in, enter the code we emailed you.
            It may take a minute to arrive
            <div class="tab-content pt-2">
              <div
                class="tab-pane fade show active profile-overview"
                id="profile-overview"
              >
                <br />
                <form v-on:submit.prevent>
                  <label for="code" class="col-md-4 col-lg-3 col-form-label"
                    ><b>Code</b></label
                  ><br />
                  <div class="row mb-3">
                    <div class="col-md-4 col-lg-5" style="margin-left: 28%">
                      <input
                        name="code"
                        type="code"
                        class="form-control"
                        id="code"
                        v-model="formValues.code"
                      />
                    </div>
                  </div>
                  <div class="text-center">
                    <button @click="submitForm" class="btn btn-primary">
                      Submit</button
                    ><br />
                    <button
                      id="resend"
                      style="
                        margin-top: 16px;
                        background-color: white;
                        color: #f14141;
                        border: 1px solid #ccd2d8;
                      "
                      @click="submitForm2"
                    >
                      Resend code</button
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
import postscribe from "postscribe";
import dashboard from "./dashboard.vue";
//alert(this.$route.params.id);
export default {
  name: "confirmPage",
  data() {
    return {
      formValues: {
        code: "",
      },
      uid: this.$route.params.email,
    };
  },
  methods: {
    async submitForm() {
    
      try {
        await Auth.confirmSignUp(this.uid, this.formValues.code);
        //const user = await Auth.signIn(this.uid, "Test123?");
      } catch (error) {
        var err = error.toString();
        console.log("error confirming sign up", err);
        let text = err;
        let result = text.includes("InvalidLambdaResponseException");
        if (result) {
          alert("Confirmed. You can successfully login now");
          this.$router.push("/Master");
        } else {
          alert("error confirming sign up", err);
        }
      }

      //const user = await Auth.signIn(this.uid.toString, this.pass.toString);
    },
    async submitForm2() {
      try {
        await Auth.resendSignUp(this.uid);
        alert("code resent successfully");
      } catch (err) {
        console.log("error resending code: ", err);
      }
    },
  },
};
</script>

<style>
.btn-primary:hover {
  background-color: red;
}
</style>