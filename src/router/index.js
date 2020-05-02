import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import FlashcardSets from "../components/flashcard_sets/FlashcardSets.vue";
import FlashcardSetForm from "../components/flashcard_sets/FlashcardSetForm.vue";
import LearnFlashcardSet from "../components/flashcard_sets/LearnFlashcardSet.vue";
import UserPanel from "../components/user_panel/UserPanel.vue";
import ChangePhoto from "../components/user_panel/ChangePhoto.vue";
import RootComponent from "../components/RootComponent.vue";
import FlashcardSet from "../components/flashcard_sets/FlashcardSet.vue";
import Quiz from "../components/flashcard_sets/Quiz.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/register", component: RegisterForm },
  { path: "/login", component: LoginForm },
  { path: "/flashcard_sets", component: FlashcardSets },
  {
    path: "/flashcard_set/:id",
    name: "flashcard_set",
    component: FlashcardSet
  },
  {
    path: "/flashcard_sets/new",
    component: FlashcardSetForm
  },
  {
    name: "flashcard_set_edit_path",
    path: "/flashcard_sets/edit/:set_id",
    component: FlashcardSetForm
  },
  { path: "/userPanel", component: UserPanel },
  { path: "/", component: RootComponent },
  {
    name: "learn_set_path",
    path: "/flashcard_sets/learn/:set_id",
    component: LearnFlashcardSet
  },
  {
    name: "quiz_path",
    path: "/flashcard_sets/quiz/:set_id",
    component: Quiz
  },

  { path: "/change_photo", component: ChangePhoto }
];

const router = new VueRouter({
  routes
});

export default router;
