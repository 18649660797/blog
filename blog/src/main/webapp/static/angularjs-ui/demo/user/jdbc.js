'use strict';
!(function (w, angular) {
    angular.module('db', []).service('jdbc', function ($http, $q) {
        var _self = this;
        var myDB = {
            name: 'roma',
            version: 1,
            db: null,
            schema: {
                2: function(db) {
                    // 初始化 用户
                    var customer = db.createObjectStore('customer', {keyPath:"id", autoIncrement: true});
                    customer.createIndex("customer_fName_index", "fName", {unique: true});
                }
            }
        };
        var defer = $q.defer();
        _self.onload = function(cb) {
            return defer.promise.then(cb);
        };
        var getDb = function(db) {
            var d = $q.defer();
            if (db) {
                d.resolve(db);
            }
            //打开数据库
            var result = window.indexedDB.open(myDB.name);
            result.onerror = function (e) {
                console.log("Open DB Error!");
                d.reject("error");
            };
            //正确打开
            result.onsuccess = function (e) {
                var db = e.target.result;
                myDB.db = db;
                d.resolve(db);
            };
            return d.promise;
        };
        _self.openDB = function (name, version, success, upgrade) {
            var d = $q.defer();
            var name = name || myDB.name;
            var version = version || myDB.version;
            //打开数据库
            var result = window.indexedDB.open(name, version);
            //错误
            result.onerror = function (e) {
                console.log("Open DB Error!");
                d.reject(e);
            };
            //正确打开
            result.onsuccess = function (e) {
                myDB.db = e.target.result;
                if (success) success(myDB.db);
                d.resolve(e);
            };
            //数据库版本变更
            result.onupgradeneeded = function (e) {
                myDB.db = e.target.result;
                if (upgrade) upgrade(myDB.db);
                d.resolve("upgradeneeded");
            };
            return d.promise;
        };
        var schema = function (schema) {
            var i = 0;
            angular.forEach(schema, function(upgrade, version, o) {
                _self.openDB(myDB.name, version, function() {
                    defer.resolve();
                }, function(db) {
                    upgrade(db);
                });
            })
        };
        schema(myDB.schema);
        _self.get = function (storeName, key) {
            var d = $q.defer();//promise
            getDb(myDB.db).then(function (db) {
                var transaction = db.transaction(storeName, 'readonly');
                var store = transaction.objectStore(storeName);
                var result = store.get(key);
                result.onsuccess = function (e) {
                    _self.result = e.target.result;
                    d.resolve();
                };
                result.onerror = function (e) {
                    d.reject();
                };
            });
            return d.promise;
        };
        _self.find = function (storeName, key, value) {
            var d = $q.defer();//promise
            getDb(myDB.db).then(function(db) {
                var transaction = db.transaction(storeName, 'readonly');
                var store = transaction.objectStore(storeName);
                var keyRange = IDBKeyRange.only(value);
                var result = store.index(key).openCursor(keyRange, "next");
                var results = [];
                result.onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        results.push(cursor.value);
                        cursor.continue();
                    } else {
                        d.resolve(results);
                    }
                };
                result.onerror = function (e) {
                    d.reject();
                };
            });
            return d.promise;
        };
        _self.put = function (storeName, value) {
            var d = $q.defer();
            var db = myDB.db || getDb();
            var transaction = db.transaction(storeName, 'readwrite');
            var store = transaction.objectStore(storeName);
            if (value !== null && value !== undefined) {
                store.put(value);
                d.resolve();
            } else {
                d.reject();
            }
            return d.promise;
        };
        _self.remove = function (storeName, value) {
            var d = $q.defer();//promise
            var db = myDB.db || getDb();
            var transaction = db.transaction(storeName, 'readwrite');
            var store = transaction.objectStore(storeName);
            var result = store.delete(value);
            result.onsuccess = function (e) {
                d.resolve();
            };
            result.onerror = function (e) {
                d.reject();
            };
            return d.promise;
        };
        _self.findAll = function (storeName) {
            var d = $q.defer();//promise
            getDb(myDB.db).then(function(db) {
                var transaction = db.transaction(storeName, 'readonly');
                var store = transaction.objectStore(storeName);
                var result = store.openCursor();
                var results = [];
                result.onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        results.push(cursor.value);
                        cursor.continue();
                    } else {
                        d.resolve(results);
                    }
                };
                result.onerror = function (e) {
                    d.reject();
                };
            });
            return d.promise;
        };
        return _self;
    });
}(window, window.angular));