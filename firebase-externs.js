/**
 * @param {string} firebaseURL
 * @constructor
 */
var Firebase = function (firebaseURL) {};


/**
 * @param {string} authToken
 * @param {!function(Firebase.Error, {auth:Object, expires:number})=} onComplete
 * @param {!function(!Firebase.Error)=} onCancel
 * @deprecated
 */
Firebase.prototype.auth = function (authToken, onComplete, onCancel) {};


/**
 * @param {string} authToken
 * @param {!function(Firebase.Error, Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authWithCustomToken = function (authToken, onComplete, options) {};


/**
 * @param {!function(Firebase.Error, Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authAnonymously = function (onComplete, options) {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @param {!function(Firebase.Error, Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authWithPassword = function (credentials, onComplete, options) {};


/**
 * @param {string} provider
 * @param {!function(Firebase.Error, Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authWithOAuthPopup = function (provider, onComplete, options) {};


/**
 * @param {string} provider
 * @param {!function(!Firebase.Error)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authWithOAuthRedirect = function (provider, onComplete, options) {};


/**
 * @param {string} provider
 * @param {string|!Object} credentials
 * @param {!function(Firebase.Error, Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} options
 */
Firebase.prototype.authWithOAuthToken = function (provider, credentials, onComplete, options) {};


/**
 * @return {Firebase.AuthCallbackData}
 * @nosideeffects
 */
Firebase.prototype.getAuth = function () {};


/**
 * @param {!function(Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} context
 */
Firebase.prototype.onAuth = function (onComplete, context) {};


/**
 * @param {!function(Firebase.AuthCallbackData)} onComplete
 * @param {!Object=} context
 */
Firebase.prototype.offAuth = function (onComplete, context) {};


/**
 * (No documentation necessary.)
 */
Firebase.prototype.unauth = function () {};


/**
 * @param {string} childPath
 * @return {!Firebase}
 * @nosideeffects
 */
Firebase.prototype.child = function (childPath) {};


/**
 * @return {Firebase}
 * @nosideeffects
 */
Firebase.prototype.parent = function () {};


/**
 * @return {!Firebase}
 * @nosideeffects
 */
Firebase.prototype.root = function () {};


/**
 * @return {string}
 * @nosideeffects
 */
Firebase.prototype.key = function () {};


/**
 * @return {string}
 * @nosideeffects
 * @deprecated
 */
Firebase.prototype.name = function () {};


/**
 * @return {string}
 * @nosideeffects
 */
Firebase.prototype.toString = function () {};


/**
 * @param {Firebase.Value} value
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.prototype.set = function (value, onComplete) {};


/**
 * @param {!Object<string, Firebase.Value>} value
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.prototype.update = function (value, onComplete) {};


/**
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.prototype.remove = function (onComplete) {};


/**
 * @param {Firebase.Value=} value
 * @param {function(Firebase.Error)=} onComplete
 * @return {!Firebase}
 */
Firebase.prototype.push = function (value, onComplete) {};


/**
 * @param {Firebase.Value} value
 * @param {(string|number)} priority
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.prototype.setWithPriority = function (value, priority, onComplete) {};


/**
 * @param {(string|number)} priority
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.prototype.setPriority = function (priority, onComplete) {};


/**
 * @param {!Firebase.TransactionUpdateFunction} updateFunction
 * @param {!function(Firebase.Error, boolean, !Firebase.DataSnapshot)=} onComplete
 * @param {boolean=} applyLocally
 */
Firebase.prototype.transaction = function (updateFunction, onComplete, applyLocally) {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @param {!function(Firebase.Error, {uid:string})} onComplete
 */
Firebase.prototype.createUser = function (credentials, onComplete) {};


/**
 * @param {!{oldEmail:string, password:string, newEmail:string}} credentials
 * @param {!function(Firebase.Error)} onComplete
 */
Firebase.prototype.changeEmail = function (credentials, onComplete) {};


/**
 * @param {!{email:string, oldPassword:string, newPassword:string}} credentials
 * @param {!function(Firebase.Error)} onComplete
 */
Firebase.prototype.changePassword = function (credentials, onComplete) {};


/**
 * @param {!Firebase.AuthPasswordCredentials} credentials
 * @param {!function(Firebase.Error)} onComplete
 */
Firebase.prototype.removeUser = function (credentials, onComplete) {};


/**
 * @param {!{email:string}} credentials
 * @param {!function(Firebase.Error)} onComplete
 */
Firebase.prototype.resetPassword = function (credentials, onComplete) {};


/**
 * (No documentation necessary.)
 */
Firebase.prototype.goOnline = function () {};


/**
 * (No documentation necessary.)
 */
Firebase.prototype.goOffline = function () {};


/**
 * @param {string} eventType
 * @param {!Firebase.EventCallback} callback
 * @param {!function(!Firebase.Error)=} cancelCallback
 * @param {!Object=} context
 * @return {!function(!Firebase.DataSnapshot, ?string=)}
 */
Firebase.prototype.on = function (eventType, callback, cancelCallback, context) {};


/**
 * @param {string=} eventType
 * @param {!Firebase.EventCallback=} callback
 * @param {!Object=} context
 */
Firebase.prototype.off = function (eventType, callback, context) {};


/**
 * @param {string} eventType
 * @param {!Firebase.EventCallback} successCallback
 * @param {!function(!Firebase.Error)=} failureCallback
 * @param {!Object=} context
 */
Firebase.prototype.once = function (eventType, successCallback, failureCallback, context) {};


/**
 * @param {string} key
 * @return {!Firebase.Query}
 */
Firebase.prototype.orderByChild = function (key) {};


/**
 * @return {!Firebase.Query}
 */
Firebase.prototype.orderByKey = function () {};


/**
 * @return {!Firebase.Query}
 */
Firebase.prototype.orderByValue = function () {};


/**
 * @return {!Firebase.Query}
 */
Firebase.prototype.orderByPriority = function () {};


/**
 * @return {!Firebase.OnDisconnect}
 */
Firebase.prototype.onDisconnect = function () {};




/**
 * @constructor
 */
Firebase.Query = function () {};


/**
 * @param {string} eventType
 * @param {!Firebase.EventCallback} callback
 * @param {!function(!Firebase.Error)=} cancelCallback
 * @param {!Object=} context
 * @return {!function(!Firebase.DataSnapshot, ?string=)}
 */
Firebase.Query.prototype.on = function (eventType, callback, cancelCallback, context) {};


/**
 * @param {string=} eventType
 * @param {!Firebase.EventCallback=} callback
 * @param {!Object=} context
 */
Firebase.Query.prototype.off = function (eventType, callback, context) {};


/**
 * @param {string} eventType
 * @param {!Firebase.EventCallback} successCallback
 * @param {!function(!Firebase.Error)=} failureCallback
 * @param {!Object=} context
 */
Firebase.Query.prototype.once = function (eventType, successCallback, failureCallback, context) {};


/**
 * @param {string} key
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.orderByChild = function (key) {};


/**
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.orderByKey = function () {};


/**
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.orderByValue = function () {};


/**
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.orderByPriority = function () {};


/**
 * @param {(string|number|boolean|null)} value
 * @param {string=} key
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.startAt = function (value, key) {};


/**
 * @param {(string|number|boolean|null)} value
 * @param {string=} key
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.endAt = function (value, key) {};


/**
 * @param {(string|number|boolean|null)} value
 * @param {string=} key
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.equalTo = function (value, key) {};


/**
 * @param {number} limit
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.limitToFirst = function (limit) {};


/**
 * @param {number} limit
 * @return {!Firebase.Query}
 */
Firebase.Query.prototype.limitToLast = function (limit) {};


/**
 * @param {number} limit
 * @return {!Firebase.Query}
 * @deprecated
 */
Firebase.Query.prototype.limit = function (limit) {};


/**
 * @return {!Firebase}
 */
Firebase.Query.prototype.ref = function () {};




/**
 * @constructor
 */
Firebase.OnDisconnect = function () {};


/**
 * @param {Firebase.Value} value
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.OnDisconnect.prototype.set = function (value, onComplete) {};


/**
 * @param {!Object<string, Firebase.Value>} value
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.OnDisconnect.prototype.update = function (value, onComplete) {};


/**
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.OnDisconnect.prototype.remove = function (onComplete) {};


/**
 * @param {Firebase.Value} value
 * @param {(string|number)} priority
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.OnDisconnect.prototype.setWithPriority = function (value, priority, onComplete) {};


/**
 * @param {!function(Firebase.Error)=} onComplete
 */
Firebase.OnDisconnect.prototype.cancel = function (onComplete) {};




/**
 * @enum {number}
 */
Firebase.ServerValue = {
    TIMESTAMP: 0
};




/**
 * @constructor
 */
Firebase.DataSnapshot = function () {};


/**
 * @return {boolean}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.exists = function () {};


/**
 * @return {Firebase.Value}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.val = function () {};


/**
 * @param {string} childPath
 * @return {Firebase.DataSnapshot}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.child = function (childPath) {};


/**
 * @param {!function(Firebase.DataSnapshot):(boolean|undefined)} childAction
 * @return {(boolean|undefined)}
 */
Firebase.DataSnapshot.prototype.forEach = function (childAction) {};


/**
 * @param {string} childPath
 * @return {boolean}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.hasChild = function (childPath) {};


/**
 * @return {boolean}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.hasChildren = function () {};


/**
 * @return {string}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.key = function () {};


/**
 * @return {string}
 * @nosideeffects
 * @deprecated
 */
Firebase.DataSnapshot.prototype.name = function () {};


/**
 * @return {number}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.numChildren = function () {};


/**
 * @return {!Firebase}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.ref = function () {};


/**
 * @return {(string|number|null)}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.getPriority = function () {};


/**
 * @return {!Object}
 * @nosideeffects
 */
Firebase.DataSnapshot.prototype.exportVal = function () {};




/**
 * @typedef {(Object|string|number|boolean)}
 */
Firebase.Value;


/**
 * @typedef {function(Firebase.Value):(Firebase.Value|undefined)}
 */
Firebase.TransactionUpdateFunction;


/**
 * @typedef {{uid:string, provider:string, auth:!Object, expires:number}}
 */
Firebase.AuthCallbackData;


/**
 * @typedef {{email:string, password:string}}
 */
Firebase.AuthPasswordCredentials;


/**
 * @typedef {(function(!Firebase.DataSnapshot, ?string)|function(!Firebase.DataSnapshot))}
 */
Firebase.EventCallback;




/**
 * @constructor
 * @extends {Error}
 */
Firebase.Error = function () {};


/**
 * @type {string}
 */
Firebase.Error.prototype.code;
