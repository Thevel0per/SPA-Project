<template>
  <div class="container">
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            target="_self"
            tabindex="-1"
            aria-disabled="true"
            href="#"
            class="nav-link disabled"
          >
            Correct: {{ correctAnswers }}/{{ totalAnswers }}
          </a>
        </li>
      </ul>
    </div>
    <div class="jumbotron">
      <div id="question" align="center">{{ currentQuestion }}</div>
      <hr class="my-4" />

      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click="selectAnswer(index)"
          :class="answerClass(index)"
          v-html="answer"
        ></li>
      </ul>

      <button
        class="btn btn-outline-success"
        @click="submitAnswer"
        :disabled="selectedAnswer == null || answered"
      >
        Submit
      </button>
      <button class="btn btn-outline-secondary" @click="next" v-show="answered">
        Next
      </button>
      <router-link
        :to="{
          name: 'flashcard_set',
          params: { id: this.$route.params.set_id }
        }"
        class="btn btn-outline-secondary"
      >
        Go Back
      </router-link>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Quiz",
  data: function() {
    return {
      selectedAnswer: null,
      shuffledAnswers: [],
      answered: false,
      correctAnswer: null,
      questionText: "",
      flashcards: [],
      correctAnswers: 0,
      totalAnswers: 0,
      currentQuestion: "No flashcards found. Go back",
      currentQuestionId: 0,
      allTranslations: []
    };
  },
  methods: {
    selectAnswer: function(index) {
      if (!this.answered) {
        this.selectedAnswer = index;
      }
    },
    shuffleAnswers: function() {
      let shuffledTranslations = _.shuffle(this.allTranslations);
      let correctAnswerIndex = shuffledTranslations.indexOf(
        this.flashcards[this.currentQuestionId].translated_word
      );
      shuffledTranslations.splice(correctAnswerIndex, 1);
      let answers = [
        ...shuffledTranslations.slice(0, 3),
        this.flashcards[this.currentQuestionId].translated_word
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctAnswer = this.shuffledAnswers.indexOf(
        this.flashcards[this.currentQuestionId].translated_word
      );
    },
    submitAnswer: function() {
      if (this.selectedAnswer === this.correctAnswer) {
        this.correctAnswers++;
      }
      this.answered = true;
    },
    answerClass: function(index) {
      let answerClass = "";

      if (!this.answered && this.selectedAnswer === index) {
        answerClass = "selected-answer";
      } else if (this.answered && this.correctAnswer === index) {
        answerClass = "correct-answer";
      } else if (
        this.answered &&
        this.selectedAnswer === index &&
        this.correctAnswer !== index
      ) {
        answerClass = "incorrect-answer";
      }
      return answerClass;
    },
    next: function() {
      if (this.currentQuestionId < this.flashcards.length - 1) {
        this.currentQuestionId++;
        this.currentQuestion = this.flashcards[this.currentQuestionId].word;
        this.answered = false;
        this.selectedAnswer = null;
        this.shuffleAnswers();
        this.questionText = `<strong>${this.currentQuestion}</strong>`;
      }
    }
  },
  mounted: function() {
    this.$root.db.flashcardsSets.getSetById(this.$route.params.set_id, set => {
      this.$root.db.flashcards.getFlashcardsForSet(set.ref, i => {
        this.flashcards = _.shuffle(i);
        this.currentQuestion = this.flashcards[this.currentQuestionId].word;
        this.allTranslations = i.map(flashcard => {
          return flashcard.translated_word;
        });
        this.questionText = `<strong>${this.currentQuestion}</strong>`;
        this.shuffleAnswers();
        this.totalAnswers = this.flashcards.length;
      });
    });
  }
};
</script>

<style scoped>
#question {
  font-size: 2em;
}

.list-group-item {
  margin: 1% 0;
}

.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.btn:disabled {
  background-color: gray;
  border-color: gray;
}

.selected-answer {
  background-color: rgba(0, 183, 255, 0.993);
}

.correct-answer {
  background-color: chartreuse;
}

.incorrect-answer {
  background-color: rgba(220, 20, 60, 0.801);
}
</style>
