const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    "use strict";
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
});