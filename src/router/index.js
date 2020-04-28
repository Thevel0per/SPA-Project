import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import FlashcardSets from "../components/flashcard_sets/FlashcardSets.vue";
import RootComponent from "../components/RootComponent.vue";
import FlashcardSet from "../components/flashcard_sets/FlashcardSet.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: RegisterForm },
  { path: "/login", component: LoginForm },
  { path: "/flashcard_sets", component: FlashcardSets },
  { path: "/", component: RootComponent },
  { path: "/flashcard_set/:setname", name: "flashcard_set", component: FlashcardSet },
];

const router = new VueRouter({
  routes
});

export default router;
