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
 * @typedef {function(!Firebase):!angularFire.FirebaseObject}
 */
angularFire.$firebaseObject;


/**
 * @param {(!Object|!function(new:angularFire.FirebaseObject, !Firebase))} propertiesOrConstructor
 * @return {!function(new:angularFire.FirebaseObject, !Firebase)}
 */
angularFire.$firebaseObject.$extend = function (propertiesOrConstructor) {};


/**
 * @constructor
 * @private
 */
angularFire.FirebaseObject = function () {};


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
 * @return {!angular.$q.Promise.<!angularFire.Firebase>}
 */
angularFire.FirebaseObject.prototype.$remove = function () {};


/**
 * @return {!angular.$q.Promise.<!angularFire.Firebase>}
 */
angularFire.FirebaseObject.prototype.$save = function () {};


/**
 * @param {!function(!angularFire.FirebaseObject)=} resolve
 * @param {!function(!Firebase.Error)=} reject
 * @return {!angular.$q.Promise.<!angularFire.FirebaseObject>}
 */
angularFire.FirebaseObject.prototype.$loaded = function (resolve, reject) {};


/**
 * @return {!Firebase}
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
 * @param {!Firebase.DataSnapshot} snapshot
 */
angularFire.FirebaseObject.prototype.$$updated = function (snapshot) {};


/**
 * @param {!Firebase.Error} error
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
 * @type {!Object.<string,Firebase.Value>}
 */
angularFire.FirebaseObject.prototype.$$defaults;




/**
 * @typedef {function((!Firebase|!Firebase.Query)):!angularFire.FirebaseArray}
 */
angularFire.$firebaseArray;


/**
 * @param {(!Object|!function(new:angularFire.FirebaseArray, !Firebase))} propertiesOrConstructor
 * @return {!function(new:angularFire.FirebaseArray, !Firebase)}
 */
angularFire.$firebaseArray.$extend = function (propertiesOrConstructor) {};


/**
 * @constructor
 * @extends {Array}
 * @private
 */
angularFire.FirebaseArray = function () {};


/**
 * @param {!Firebase.Value} newData
 * @return {!angular.$q.Promise.<!Firebase>}
 */
angularFire.FirebaseArray.prototype.$add = function (newData) {};


/**
 * @param {!angularFire.FirebaseObject|number} recordOrIndex
 * @return {!angular.$q.Promise.<!Firebase>}
 */
angularFire.FirebaseArray.prototype.$remove = function (recordOrIndex) {};


/**
 * @param {!angularFire.FirebaseObject|number} recordOrIndex
 * @return {!angular.$q.Promise.<!Firebase>}
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
 * @param {!function(!Firebase.Error)=} reject
 * @return {!angular.$q.Promise.<!angularFire.FirebaseArray>}
 */
angularFire.FirebaseArray.prototype.$loaded = function (resolve, reject) {};


/**
 * @return {!Firebase}
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
 * @param {!Firebase.DataSnapshot} snapshot
 * @param {?string} prevChild
 */
angularFire.FirebaseArray.prototype.$$added = function (snapshot, prevChild) {};


/**
 * @param {!Firebase.DataSnapshot} snapshot
 */
angularFire.FirebaseArray.prototype.$$updated = function (snapshot) {};


/**
 * @param {!Firebase.DataSnapshot} snapshot
 * @param {?string} prevChild
 */
angularFire.FirebaseArray.prototype.$$moved = function (snapshot, prevChild) {};


/**
 * @param {!Firebase.DataSnapshot} snapshot
 */
angularFire.FirebaseArray.prototype.$$removed = function (snapshot) {};


/**
 * @param {!Firebase.Error} error
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
 * @type {!Object.<string,Firebase.Value>}
 */
angularFire.FirebaseArray.prototype.$$defaults;




/**
 * @typedef {function(!Firebase):!angularFire.FirebaseAuth}
 */
angularFire.$firebaseAuth;


/**
 * @constructor
 * @private
 */
angularFire.FirebaseAuth = function () {};


/**
 * @param {string} authToken
 * @param {!Object=} options
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$authWithCustomToken = function (authToken, options) {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @param {!Object=} options
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$authWithPassword = function (credentials, options) {};


/**
 * @param {string} provider
 * @param {!Object=} options
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$authWithOAuthPopup = function (provider, options) {};


/**
 * @param {string} provider
 * @param {!Object=} options
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$authWithOAuthRedirect = function (provider, options) {};


/**
 * @param {string} provider
 * @param {string|!Object} credentials
 * @param {!Object=} options
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$authWithOAuthToken = function (provider, credentials, options) {};


/**
 * @return {Firebase.AuthCallbackData}
 * @nosideeffects
 */
angularFire.FirebaseAuth.prototype.$getAuth = function () {};


/**
 * @param {!function(Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} context
 * @return {!function()}
 */
angularFire.FirebaseAuth.prototype.$onAuth = function (onComplete, context) {};


/**
 * (No documentation necessary.)
 */
angularFire.FirebaseAuth.prototype.$unauth = function () {};


/**
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$waitForAuth = function () {};


/**
 * @return {!angular.$q.Promise.<!Firebase.AuthCallbackData, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.$requireAuth = function () {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @return {!angular.$q.Promise.<!{uid:string}, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.createUser = function (credentials) {};


/**
 * @param {!{email:string, oldPassword:string, newPassword:string}} credentials
 * @return {!angular.$q.Promise.<null, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.changePassword = function (credentials) {};


/**
 * @param {!{oldEmail:string, password:string, newEmail:string}} credentials
 * @return {!angular.$q.Promise.<null, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.changeEmail = function (credentials) {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @return {!angular.$q.Promise.<null, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.removeUser = function (credentials) {};


/**
 * @param {!{email:string}} credentials
 * @return {!angular.$q.Promise.<null, !Firebase.Error>}
 */
angularFire.FirebaseAuth.prototype.resetPassword = function (credentials) {};
