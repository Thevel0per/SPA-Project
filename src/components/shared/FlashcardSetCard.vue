<template>
  <div class="flashcard-set card bg-dark">
    <div class="card-body text-light">
      <div class="row">
        <div class="col-md-6 offset-md-1">
          <div class="row">{{ this.flashcardSet.name }}</div>
          <div class="row">
            <small>{{ this.flashcardSet.user.username }}</small>
          </div>
        </div>
        <div class="col-md-4 offset-md-1 text-center">
          <button @click="destroySet" v-if="owner">
            <i class="far fa-2x fa-trash-alt"></i>
          </button>
          <router-link
            v-if="owner"
            :to="{
              name: 'flashcard_set_edit_path',
              query: { prevName: this.flashcardSet.name },
              params: { set_id: this.flashcardSet.ref.id }
            }"
          >
            <i class="far fa-2x fa-edit"></i>
          </router-link>
          <router-link
            :to="{
              name: 'flashcard_set',
              params: { id: this.flashcardSet.ref.id }
            }"
          >
            <i class="far fa-2x fa-eye"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashcardSetCard",
  data: function() {
    return {
      owner: false
    };
  },
  props: {
    flashcardSet: Object
  },
  methods: {
    destroySet: function() {
      if (confirm("Are you sure?")) {
        this.$root.db.flashcardsSets.destroySet(
          this.flashcardSet.ref.id,
          () => {}
        );
        this.$emit("set-destroyed");
      }
    }
  },
  mounted: function() {
    this.$root.db.users.getFlashCardSetOwnerId(
      this.flashcardSet.ref.id,
      userId => {
        this.owner = this.$root.loggedUser.uid == userId;
      }
    );
  }
};
</script>

<style scoped>
button,
a {
  background: none;
  color: white;
  border: none;
  margin: 0 5px;
  width: 50px;
}
</style>
