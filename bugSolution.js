The corrected version utilizes the `.then()` method to ensure data is accessed only after the promise resolves. This ensures that the data is available before attempting to use it.

```javascript
// bugSolution.js

const db = firebase.firestore();

db.collection('users').doc('someUser').get()
.then(doc => {
  if(doc.exists){
    console.log("Data: ", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch(error => {
  console.error("Error getting document: ", error);
});
```