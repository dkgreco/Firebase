const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Todo = require('Todo');

describe('Todo', () => {
    "use strict";
    it('should exist', () => {
        expect(Todo).toExist();
    });
});