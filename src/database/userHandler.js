import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const AUTH = firebase.auth;
const PASSWORD_SHOULD_BE_THE_SAME = "Passwords should be the same";

export default class UserHandler {
  static addListener(component) {
    AUTH().onAuthStateChanged(user => {
      if (!user) {
        console.log("wylogowany");
      }
      if (!component.$root.loggedUser) {
        component.$root.loggedUser = user;
      }
      return;
    });
  }

  static setValidationResult(message) {
    return { error: true, message };
  }

  static validateRegistration(password, passwordRepeat) {
    if (password !== passwordRepeat)
      return UserHandler.setValidationResult(PASSWORD_SHOULD_BE_THE_SAME);

    return { error: false };
  }

  static register(component, email, password, username, router) {
    AUTH()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const currUser = firebase.auth().currentUser;
        currUser.updateProfile({ displayName: username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .doc(currUser.uid)
            .set({
              email: currUser.email,
              username: currUser.displayName
            })
            .then(() => {
              component.$root.loggedUser = currUser;
              UserHandler.login(email, password, router);
            });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  static login(component, email, password, router) {
    AUTH()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        component.$root.loggedUser = u.user;
        router.replace("/flashcard_sets");
      })
      .catch(error => {
        console.error(error);
      });
  }

  static loginWithProvider(component, provider, router) {
    AUTH()
      .signInWithPopup(provider)
      .then(() => {
        const currUser = AUTH().currentUser;
        firebase
          .firestore()
          .collection("users")
          .doc(currUser.uid)
          .set({
            email: currUser.email,
            username: currUser.displayName
          })
          .then(() => {
            component.$root.loggedUser = currUser;
            router.replace("/flashcard_sets");
          });
      });
  }

  static logout(router) {
    AUTH()
      .signOut()
      .then(() => router.replace("/flashcard_sets"))
      .catch(e => console.error(e));
  }

  static changeEmail(newEmail, router) {
    const user = AUTH().currentUser;
    if (!user) return;
    user
      .updateEmail(newEmail)
      .then(() => {
        const currUser = AUTH().currentUser;
        firebase
          .firestore()
          .collection("users")
          .doc(currUser.uid)
          .set({
            email: currUser.email,
            username: currUser.displayName
          })
          .then(() => {
            router.replace("/flashcard_sets");
          });
      })
      .catch(error => {
        console.error(error);
      });
  }

  static changeUsername(username, router) {
    const user = AUTH().currentUser;
    if (!user) return;
    user
      .updateProfile({ displayName: username })
      .then(() => {
        const currUser = AUTH().currentUser;
        firebase
          .firestore()
          .collection("users")
          .doc(currUser.uid)
          .set({
            email: currUser.email,
            username: currUser.displayName
          })
          .then(() => {
            router.replace("/flashcard_sets");
          });
      })
      .catch(error => {
        console.error(error);
      });
  }

  static changePassword(password, passwordRepeat, router) {
    console.log(password);
    console.log(passwordRepeat);
    const user = AUTH().currentUser;
    if (!user) return;
    const result = UserHandler.validateRegistration(password, passwordRepeat);
    if (result.error) {
      console.log(result.message);
      return;
    }

    user
      .updatePassword(password)
      .then(() => router.replace("/login"))
      .catch(error => {
        console.error(error);
      });
  }
}
