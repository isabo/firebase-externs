# Google Closure Compiler Extern Definitions for Firebase

- Supports Firebase 2.2.x.
- Strongly typed in order to help uncover mistakes in your code.
- Includes `@deprecated` methods.
- Includes methods which have `@nosideeffects` :-)

## Annotate your code with these types

- `Firebase`
- `Firebase.Value`, i.e. `{(Object|string|number|boolean)}`
- `Firebase.Query`
- `Firebase.DataSnapshot` for values passed into your callbacks.

## AngularFire annotations:

```js
/**
 * @param {!angularFire.$firebaseObject} $firebaseObject
 * @param {!angularFire.$firebaseArray} $firebaseArray
 * @param {!angularFire.$firebaseAuth} $firebaseAuth
 * @ngInject
 */
function foo ($firebaseObject, $firebaseArray, $firebaseAuth) {

    var ref = new Firebase('https://<name>.firebaseio.com/');

    /**
     * @type {!angularFire.FirebaseObject}
     */
    var obj = $firebaseObject(ref);

    /**
     * @type {!angularFire.FirebaseArray}
     */
    var arr = $firebaseArray(ref);

    /**
     * @type {!angularFire.FirebaseAuth}
     */
    var auth = $firebaseAuth(ref);
}
```
