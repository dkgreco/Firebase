const expect = require('expect'),
    {   setTask,
        changeSearchFilter,
        fetchLocationInfo,
        setToggle,
        removeTaskFromList,
        showCompletedTasks
    } = require('./../../src-redux/actionGenerators/actionGenerators'),
    {   mapReducer, searchFilterReducer,
        showCompletedReducer, taskListReducer
    } = require('./../../src-redux/reducers/reducers'),
    {filterTasks} = require('./../../api/todoAPI');

//Application Test
describe('Web Application', () => {
    "use strict";
    it('should properly run tests.  Test 1=1', () => {
        "use strict";
        expect(1).toBe(1);
    });

    //Test all Component Renders
    describe('should render all necessary application components', () => {

        //APIs
        describe('APIs', () => {
            it('should exist: todoAPI', () => {
                expect(require('todoAPI')).toExist();
            });
            describe('API List', () => {
                it('fxn exists: filterTasks', () => {
                    expect(filterTasks).toExist();
                });
            });
        });

        //React Components
        describe('React Components', () => {
            it('should exist: TodoApp', () => {
                expect(require('TodoApp')).toExist();
            });
            it('should exist: TodoList', () => {
                expect(require('TodoList')).toExist();
            });
            it('should exist: Todo', () => {
                expect(require('Todo')).toExist();
            });
            it('should exist: AddTodo', () => {
                expect(require('AddTodo')).toExist();
            });
            it('should exist: TodoSearch', () => {
                expect(require('TodoSearch')).toExist();
            });
        });

        //Firebase
        describe('Firebase', () => {
            it('should exist: firebase', () => {
                expect(require('firebase')).toExist();
            });
        });

        //Redux
        describe('Redux', () => {
            it('Source File Exists: actionGenerators.jsx', () => {
                expect(require('./../../src-redux/actionGenerators/actionGenerators')).toExist();
            });
                describe('Action List', () => {
                    it('fxn exists: setTask', () => {
                        expect(setTask).toExist();
                    });
                    it('fxn exists: changeSearchFilter', () => {
                        expect(changeSearchFilter).toExist();
                    });
                    it('fxn exists: fetchLocationInfo', () => {
                        expect(fetchLocationInfo).toExist();
                    });
                    it('fxn exists: setToggle', () => {
                        expect(setToggle).toExist();
                    });
                    it('fxn exists: removeTaskFromList', () => {
                        expect(removeTaskFromList).toExist();
                    });
                    it('fxn exists: showCompletedTasks', () => {
                        expect(showCompletedTasks).toExist();
                    });
                });
            it('Source File Exists: reducers.jsx', () => {
                expect(require('./../../src-redux/reducers/reducers')).toExist();
            });
                describe('Reducer List', () => {
                    it('exists: mapReducer', () => {
                        expect(mapReducer).toExist();
                    });
                    it('exists: searchFilterReducer', () => {
                        expect(searchFilterReducer).toExist();
                    });
                    it('exists: showCompletedReducer', () => {
                        expect(showCompletedReducer).toExist();
                    });
                    it('exists: taskListReducer', () => {
                        expect(taskListReducer).toExist();
                    });
                });
            it('Source File Exists: configureStore.jsx', () => {
                expect(require('./../../src-redux/store/configureStore')).toExist();
            });
        });
    });
});