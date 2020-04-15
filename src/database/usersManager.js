import db from "./db";

var usersManager = {
  getAllUsers: callback => {
    db()
      .collection("users")
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
      .collection("users")
      .where(db.FieldPath.documentId(), "in", references)
      .get()
      .then(snapshot => {
        let users = [];
        snapshot.forEach(doc => {
          users.push(doc.data());
        });
        callback(users);
      });
  }
};

export default usersManager;
