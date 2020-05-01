import usersManager from "./usersManager";
import flashcardsSetsManager from "./flashcardsSetsManager";
import flashcardsManager from "./flashcardsManager";

var database = {
  users: usersManager,
  flashcardsSets: flashcardsSetsManager,
  flashcards: flashcardsManager,
};

export default database;
