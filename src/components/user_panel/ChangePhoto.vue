<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div>
              <div>
                <p>Upload an image to Firebase:</p>
                <input type="file" @change="previewImage" accept="image/*" />
              </div>
              <div>
                <p>
                  Progress: {{ uploadValue.toFixed() + "%" }}
                  <progress
                    id="progress"
                    :value="uploadValue"
                    max="100"
                  ></progress>
                </p>
              </div>
              <div v-if="imageData != null">
                <img class="preview" :src="picture" />
                <br />
                <div class="form-part col-sm-12 col-md-3 center">
                  <button
                    class="btn btn-outline-success w-100 btn-change-photo"
                    @click="onUpload"
                  >
                    Upload
                  </button>
                </div>
                <br />
              </div>
              <br />
              <div class="form-part col-sm-12 col-md-3 center">
                <router-link
                  to="/userPanel"
                  tag="button"
                  class="btn btn-outline-success w-100 btn-change-photo"
                >
                  Go back
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/storage";

export default {
  name: "ChangePhoto",
  data: function() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;

      const storageRef = firebase
        .storage()
        .ref(`${this.$root.loggedUser.uid}/userPhoto`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    }
  }
};
</script>

<style scoped>
div.form-part {
  margin: 5px 0;
}
img.preview {
  width: 200px;
}
.center {
  margin: auto !important;
  margin-top: 10px !important;
  margin-bottom: 0px !important;
}
img {
  width: 150px;
  border-radius: 10px;
}
</style>
