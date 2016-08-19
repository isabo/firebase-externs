/**
 * Externs for AngularFire.
 *
 * Requires Firebase externs (./firebase-externs.js)
 * Requires Angular externs (https://github.com/google/closure-compiler/tree/master/contrib/externs)
 */

/**
 * @type {!Object}
 * @const
 */
var angularFire = {};


/**
 * @typedef {function(!firebase.database.Reference):!angularFire.FirebaseObject}
 */
angularFire.$firebaseObject;


/**
 * @param {(!Object|!function(new:angularFire.FirebaseObject, !firebase.database.Reference))} propertiesOrConstructor
 * @return {!function(new:angularFire.FirebaseObject, !firebase.database.Reference)}
 */
angularFire.$firebaseObject.$extend = function (propertiesOrConstructor) {};


/**
 * @constructor
 * @private
 */
angularFire.FirebaseObject = function (ref) {};


/**
 * @type {string}
 */
angularFire.FirebaseObject.prototype.$id;


/**
 * @type {(string|number|null)}
 */
angularFire.FirebaseObject.prototype.$priority;


/**
 * @type {(string|number|boolean|null)}
 */
angularFire.FirebaseObject.prototype.$value;


/**
 * @return {!angular.$q.Promise.<!angularFire.FirebaseObject>}
 */
angularFire.FirebaseObject.prototype.$remove = function () {};


/**
 * @return {!angular.$q.Promise.<!angularFire.FirebaseObject>}
 */
angularFire.FirebaseObject.prototype.$save = function () {};


/**
 * @param {!function(!angularFire.FirebaseObject)=} resolve
 * @param {!function(!firebase.FirebaseError)=} reject
 * @return {!angular.$q.Promise.<!angularFire.FirebaseObject>}
 */
angularFire.FirebaseObject.prototype.$loaded = function (resolve, reject) {};


/**
 * @return {!firebase.database.Reference}
 */
angularFire.FirebaseObject.prototype.$ref = function () {};


/**
 * @param {!angular.Scope} scope
 * @param {string} varName
 * @return {!angular.$q.Promise.<!function()>}
 */
angularFire.FirebaseObject.prototype.$bindTo = function (scope, varName) {};


/**
 * @param {!function()} callback
 * @param {!Object=} context
 * @return {!function()}
 */
angularFire.FirebaseObject.prototype.$watch = function (callback, context) {};


/**
 * (No annotations necessary).
 */
angularFire.FirebaseObject.prototype.$destroy = function () {};


/**
 * @param {!firebase.database.DataSnapshot} snapshot
 */
angularFire.FirebaseObject.prototype.$$updated = function (snapshot) {};


/**
 * @param {!firebase.FirebaseError} error
 */
angularFire.FirebaseObject.prototype.$$error = function (error) {};


/**
 * (No annotations necessary.)
 */
angularFire.FirebaseObject.prototype.$$notify = function () {};


/**
 * @return {!Object}
 */
angularFire.FirebaseObject.prototype.toJson = function () {};


/**
 * @type {!Object.<string,*>}
 */
angularFire.FirebaseObject.prototype.$$defaults;




/**
 * @typedef {function((firebase.database.Reference|!firebase.database.Query)):!angularFire.FirebaseArray}
 */
angularFire.$firebaseArray;


/**
 * @param {(!Object|!function(new:angularFire.FirebaseArray, !firebase.database.Reference))} propertiesOrConstructor
 * @return {!function(new:angularFire.FirebaseArray, !firebase.database.Reference)}
 */
angularFire.$firebaseArray.$extend = function (propertiesOrConstructor) {};


/**
 * @constructor
 * @extends {Array}
 * @private
 */
angularFire.FirebaseArray = function () {};


/**
 * @param {*} newData
 * @return {!angular.$q.Promise.<!firebase.database.Reference>}
 */
angularFire.FirebaseArray.prototype.$add = function (newData) {};


/**
 * @param {!angularFire.FirebaseObject|number} recordOrIndex
 * @return {!angular.$q.Promise.<!firebase.database.Reference>}
 */
angularFire.FirebaseArray.prototype.$remove = function (recordOrIndex) {};


/**
 * @param {!angularFire.FirebaseObject|number} recordOrIndex
 * @return {!angular.$q.Promise.<!firebase.database.Reference>}
 */
angularFire.FirebaseArray.prototype.$save = function (recordOrIndex) {};


/**
 * @param {string} key
 * @return {angularFire.FirebaseObject}
 */
angularFire.FirebaseArray.prototype.$getRecord = function (key) {};


/**
 * @param {!angularFire.FirebaseObject|number} recordOrIndex
 * @return {string}
 */
angularFire.FirebaseArray.prototype.$keyAt = function (recordOrIndex) {};


/**
 * @param {string} key
 * @return {number}
 */
angularFire.FirebaseArray.prototype.$indexFor = function (key) {};


/**
 * @param {!function(!angularFire.FirebaseArray)=} resolve
 * @param {!function(!firebase.FirebaseError)=} reject
 * @return {!angular.$q.Promise.<!angularFire.FirebaseArray>}
 */
angularFire.FirebaseArray.prototype.$loaded = function (resolve, reject) {};


/**
 * @return {!firebase.database.Reference}
 */
angularFire.FirebaseArray.prototype.$ref = function () {};


/**
 * @param {!function({event:string, key:string, prevChild: ?string})} callback
 * @param {!Object=} context
 * @return {!function()}
 */
angularFire.FirebaseArray.prototype.$watch = function (callback, context) {};


/**
 * (No annotations necessary).
 */
angularFire.FirebaseArray.prototype.$destroy = function () {};


/**
 * @param {!firebase.database.DataSnapshot} snapshot
 * @param {?string} prevChild
 */
angularFire.FirebaseArray.prototype.$$added = function (snapshot, prevChild) {};


/**
 * @param {!firebase.database.DataSnapshot} snapshot
 */
angularFire.FirebaseArray.prototype.$$updated = function (snapshot) {};


/**
 * @param {!firebase.database.DataSnapshot} snapshot
 * @param {?string} prevChild
 */
angularFire.FirebaseArray.prototype.$$moved = function (snapshot, prevChild) {};


/**
 * @param {!firebase.database.DataSnapshot} snapshot
 */
angularFire.FirebaseArray.prototype.$$removed = function (snapshot) {};


/**
 * @param {!firebase.FirebaseError} error
 */
angularFire.FirebaseArray.prototype.$$error = function (error) {};


/**
 * @param {!angularFire.FirebaseObject} record
 */
angularFire.FirebaseArray.prototype.$$getKey = function (record) {};


/**
 * @param {string} event
 * @param {string} key
 * @param {?string=} prevChild
 */
angularFire.FirebaseArray.prototype.$$notify = function (event, key, prevChild) {};


/**
 * @param {string} event
 * @param {string} key
 * @param {?string=} prevChild
 */
angularFire.FirebaseArray.prototype.$$process = function (event, key, prevChild) {};


/**
 * @type {!Object.<string,*>}
 */
angularFire.FirebaseArray.prototype.$$defaults;




/**
 * This factory returns an object allowing you to manage the client's authentication state.
 *
 * @typedef {function(!firebase.auth.Auth=):!angularFire.FirebaseAuth}
 */
angularFire.$firebaseAuth;


/**
 * @constructor
 * @private
 */
angularFire.FirebaseAuth = function () {};

/**
 * Authenticates the Firebase reference with a custom authentication token.
 *
 * @param {string} authToken An authentication token or a Firebase Secret. A Firebase Secret
 * should only be used for authenticating a server process and provides full read / write
 * access to the entire Firebase.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInWithCustomToken = function(authToken) {};

/**
 * Authenticates the Firebase reference anonymously.
 *
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInAnonymously = function() {};

/**
 * Authenticates the Firebase reference with an email/password user.
 *
 * @param {string} email An email address for the new user.
 * @param {string} password A password for the new email.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInWithEmailAndPassword = function(email, password) {};

/**
 * Authenticates the Firebase reference with the OAuth popup flow.
 *
 * @param {Object|string} provider A firebase.auth.AuthProvider or a unique provider ID like 'facebook'.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInWithPopup = function(provider) {};

/**
 * Authenticates the Firebase reference with the OAuth redirect flow.
 *
 * @param {Object|string} provider A firebase.auth.AuthProvider or a unique provider ID like 'facebook'.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInWithRedirect = function(provider) {};

/**
 * Authenticates the Firebase reference with an OAuth token.
 *
 * @param {firebase.auth.AuthCredential} credential The Firebase credential.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with an object containing authentication data.
 */
angularFire.FirebaseAuth.prototype.$signInWithCredential = function(credential) {};

/**
 * Unauthenticates the Firebase reference.
 */
angularFire.FirebaseAuth.prototype.$signOut = function() {};

/**
 * Asynchronously fires the provided callback with the current authentication data every time
 * the authentication data changes. It also fires as soon as the authentication data is
 * retrieved from the server.
 *
 * @param {function((Object|null))} callback A callback that fires when the client's authenticate state
 * changes. If authenticated, the callback will be passed an object containing authentication
 * data according to the provider used to authenticate. Otherwise, it will be passed null.
 * @param {!Object=} [context] If provided, this object will be used as this when calling your
 * callback.
 * @return {function()} A promised fulfilled with a function which can be used to
 * deregister the provided callback.
 */
angularFire.FirebaseAuth.prototype.$onAuthStateChanged = function(callback, context) {};

/**
 * Synchronously retrieves the current authentication data.
 *
 * @return {Object} The client's authentication data.
 * @nosideeffects
 */
angularFire.FirebaseAuth.prototype.$getAuth = function() {};

/**
 * Utility method which can be used in a route's resolve() method to require that a route has
 * a logged in client.
 *
 * @returns {!angular.$q.Promise<Object>} A promise fulfilled with the client's current authentication
 * state or rejected if the client is not authenticated.
 */
angularFire.FirebaseAuth.prototype.$requireSignIn = function() {};

/**
 * Utility method which can be used in a route's resolve() method to grab the current
 * authentication data.
 *
 * @returns {!angular.$q.Promise<Object|null>} A promise fulfilled with the client's current authentication
 * state, which will be null if the client is not authenticated.
 */
angularFire.FirebaseAuth.prototype.$waitForSignIn = function() {};

/**
 * Creates a new email/password user. Note that this function only creates the user, if you
 * wish to log in as the newly created user, call $authWithPassword() after the promise for
 * this method has been resolved.
 *
 * @param {string} email An email for this user.
 * @param {string} password A password for this user.
 * @return {!angular.$q.Promise<Object>} A promise fulfilled with the user object, which contains the
 * uid of the created user.
 */
angularFire.FirebaseAuth.prototype.$createUserWithEmailAndPassword = function(email, password) {};

/**
 * Changes the password for an email/password user.
 *
 * @param {string} password A new password for the current user.
 * @return {!angular.$q.Promise} An empty promise fulfilled once the password change is complete.
 */
angularFire.FirebaseAuth.prototype.$updatePassword = function(password) {};

/**
 * Changes the email for an email/password user.
 *
 * @param {string} email The new email for the currently logged in user.
 * @return {!angular.$q.Promise} An empty promise fulfilled once the email change is complete.
 */
angularFire.FirebaseAuth.prototype.$updateEmail = function(email) {};

/**
 * Deletes the currently logged in user.
 *
 * @return {!angular.$q.Promise} An empty promise fulfilled once the user is removed.
 */
angularFire.FirebaseAuth.prototype.$deleteUser = function() {};


/**
 * Sends a password reset email to an email/password user.
 *
 * @param {string} email An email address to send a password reset to.
 * @return {!angular.$q.Promise} An empty promise fulfilled once the reset password email is sent.
 */
angularFire.FirebaseAuth.prototype.$sendPasswordResetEmail = function(email) {};
