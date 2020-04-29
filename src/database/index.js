import usersManager from "./usersManager";
import flashcardsSetsManager from "./flashcardsSetsManager";
import flashcardsManager from "./flashcardsManager";
import flashcardManager from "./flashcardManager";

var database = {
  users: usersManager,
  flashcardsSets: flashcardsSetsManager,
  flashcards: flashcardsManager,
  flashcard: flashcardManager
};

export default database;
