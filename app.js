'use strict';
const request = require('request');
// require関数を使って、requestパッケージを取得。
request('http://www.google.com', (error, response, body) => {
    console.log(body);
});
// request関数に対して、リクエストのURLとリクエストのレスポンスを受け取った際の無名関数を渡す