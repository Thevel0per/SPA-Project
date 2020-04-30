import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import FlashcardSets from "../components/flashcard_sets/FlashcardSets.vue";
import NewFlashcardSetForm from "../components/flashcard_sets/NewFlashcardSetForm.vue";
import RootComponent from "../components/RootComponent.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: RegisterForm },
  { path: "/login", component: LoginForm },
  { path: "/flashcard_sets", component: FlashcardSets },
  { path: "/flashcard_sets/new", component: NewFlashcardSetForm },
  { path: "/", component: RootComponent }
];

const router = new VueRouter({
  routes
});

export default router;
