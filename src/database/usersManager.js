import db from "./db";

const usersCollection = "users";

var usersManager = {
  getAllUsers: callback => {
    db()
      .collection(usersCollection)
      .get()
      .then(snapshot => {
        let users = [];
        snapshot.forEach(doc => {
          users.push(doc.data());
        });
        callback(users);
      });
  },
  getUsersByIds: (callback, references) => {
    db()
      .collection(usersCollection)
      .where(db.FieldPath.documentId(), "in", references)
      .get()
      .then(snapshot => {
        let users = [];
        snapshot.forEach(doc => {
          users.push(doc.data());
        });
        callback(users);
      });
  },
  getUserById: (id, callback) => {
    db()
      .collection(usersCollection)
      .doc(id)
      .get()
      .then(doc => {
        callback(doc.ref);
      });
  }
};

export default usersManager;
