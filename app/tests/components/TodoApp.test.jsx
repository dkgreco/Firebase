const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
});