import * as firebase from "firebase/app";
import "firebase/auth";

const Providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

export default Providers;
