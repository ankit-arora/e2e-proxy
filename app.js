var express = require('express');
var proxy = require('express-http-proxy');

var app = express();

app.use(
    '/foo',
    proxy('my-test-hdfc-life-website-foo.s3-website.ap-south-1.amazonaws.com', {})
);

app.use(
    '/bar',
    proxy('my-test-hdfc-life-website-bar.s3-website.ap-south-1.amazonaws.com', {})
);

app.use(
    '/',
    proxy('my-test-hdfc-life-website-bar.s3-website.ap-south-1.amazonaws.com', {})
);

module.exports = app;
