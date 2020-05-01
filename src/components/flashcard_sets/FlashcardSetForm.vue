<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12 my-auto">
        <div class="card bg-dark text-center responsive-form w-50 mx-auto">
          <form class="card-body text-light">
            <div class="form-group row">
              <label for="name" class="col-sm-12 col-md-4 col-form-label">
                Set Name
              </label>

              <div class="col-sm-12 col-md-8">
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="name"
                  h-100
                  placeholder="Flashcard Set Name"
                  v-model="set_name"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <button
                  @click="createNewSet"
                  class="btn btn-outline-success w-25"
                  v-if="!edit"
                >
                  Create Set
                </button>
                <button
                  @click="createNewSet"
                  class="btn btn-outline-success w-25"
                  v-else
                >
                  Update Set
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashcardSetForm",
  data: () => {
    return {
      set_name: "",
      edit: false,
      flashcardSetId: ""
    };
  },
  methods: {
    createNewSet: function(e) {
      e.preventDefault();
      if (this.edit) {
        this.$root.db.flashcardsSets.updateSet(
          this.set_name,
          this.flashcardSetId,
          () => {
            this.$router.replace("/flashcard_sets");
          }
        );
      } else {
        this.$root.db.flashcardsSets.createSet(this.set_name, () => {
          this.$router.replace("/flashcard_sets");
        });
      }
    }
  },
  mounted: function() {
    this.flashcardSetId = this.$route.path.split("/").pop();
    this.set_name = this.$route.query.prevName;
    this.edit = this.$route.path.includes("/flashcard_sets/edit");
  }
};
</script>
