const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoList = require('TodoList');

describe('TodoList', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoList).toExist();
    });
});