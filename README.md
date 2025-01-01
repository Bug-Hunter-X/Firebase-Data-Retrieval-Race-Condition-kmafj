# Firebase Data Retrieval Race Condition

This repository demonstrates a common error in Firebase applications where data is accessed from a query snapshot before the data has finished loading. This leads to unexpected behavior, often returning `undefined` or `null` values.

The `bug.js` file contains code that exhibits this issue.  The `bugSolution.js` file provides a corrected version that uses promises or async/await to handle the asynchronous nature of Firebase queries correctly.