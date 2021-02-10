const React = require('react');
const Layout = require('./src/layout/Layout').default;

exports.wrapPageElement = function ({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
};
