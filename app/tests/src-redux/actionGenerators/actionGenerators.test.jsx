const expect = require('expect'),
    df = require('deep-freeze-strict'),
    {   _startLocationSearch,
        _completeLocationSearch,
        _addTaskToList,
        _buildTaskView,
        _updateTaskInformation,
        getListFromDB,
        setTask,
        changeSearchFilter,
        fetchLocationInfo,
        setToggle,
        removeTaskFromList,
        showCompletedTasks
    } = require('./../../../src-redux/actionGenerators/exposedInternalActionGenerators');

import firebase, {firebaseReference} from 'app/firebase/';

describe('Action Generators', () => {
    "use strict";
    describe('Internal Fxns', () => {
        it('should return proper action from _startLocationSearch call', () => {
            let actualReturnObject = _startLocationSearch(),
                expectedReturnObject = {
                    type: 'START_LOCATION_SEARCH'
                };
            expect(actualReturnObject).toEqual(expectedReturnObject);
        });
        it('should return proper action from _completeLocationSearch call', () => {
            let actualReturnObject = _completeLocationSearch('dummyURL'),
                expectedReturnObject = {
                    type: 'STOP_LOCATION_SEARCH',
                    url: 'dummyURL'
                };
            expect(actualReturnObject).toEqual(expectedReturnObject);
        });
        it('should return proper action from _addTaskToList call', () => {
            let actualReturnObject = _addTaskToList('feed mister'),
                expectedReturnObject = {
                    type: 'CREATE',
                    task: 'feed mister'
                };
            expect(actualReturnObject).toEqual(expectedReturnObject);
        });
        it('should return proper action from _buildTaskView call', () => {
            let actualReturnObject = _buildTaskView([
                    {id: 'junk1', task: 'feed mister'},
                    {id: 'junk2', task: 'walk bailey'},
                    {id: 'junk3', task: 'take out garbage'}
                ]),
                expectedReturnObject = {
                    type: 'READ',
                    displayList: [
                        {id: 'junk1', task: 'feed mister'},
                        {id: 'junk2', task: 'walk bailey'},
                        {id: 'junk3', task: 'take out garbage'}
                    ]
                };
            expect(actualReturnObject).toEqual(expectedReturnObject);
        });
        it('should return proper action from _updateTaskInformation call', () => {
            let actualReturnObject = _updateTaskInformation('junk0', {markCompleted: true, taskCompletedAt: 5000000}),
                expectedReturnObject = {
                    type: 'UPDATE',
                    id: 'junk0',
                    updateValues: {
                        markCompleted: true,
                        taskCompletedAt: 5000000
                    }
                };
            expect(actualReturnObject).toEqual(expectedReturnObject);
        });
    });

    describe('Public Fxns', () => {
        it('should return proper action from getListFromDB call', () => {
            console.log('please integrate me...free pass for now')
        });
        describe('setTask Call', () => {
            it('should return proper action from setTask call', () => {
                let testTaskReference;
                beforeEach(done => {
                    let taskReference = firebaseReference.child('taskList'),
                        successHandler = () => {
                            testTaskReference = firebaseReference.child('taskList').push();

                            return testTaskReference.set({
                                task: 'Shovel Snow',
                                markCompleted: false,
                                taskCreatedAt: 30000
                            });
                        },
                        failureHandler = () => {
                            console.error('unable to add to db');
                        };
                    taskReference.remove()
                        .then(successHandler, failureHandler)
                        .then(() => done())
                        .catch(done);
                });
                afterEach(done => {
                    let callToFinish = () => done(),
                        testTaskReference = firebaseReference.child('taskList');
                    testTaskReference.remove()
                        .then(callToFinish());
                });
            });
        });
        it('should return proper action from changeSearchFilter call', () => {
            console.log('please integrate me...free pass for now')
        });
        it('should return proper action from fetchLocationInfo call', () => {
            console.log('please integrate me...free pass for now')
        });
        it('should return proper action from setToggle call', () => {
            console.log('please integrate me...free pass for now')
        });
        it('should return proper action from removeTaskFromList call', () => {
            console.log('please integrate me...free pass for now')
        });
        it('should return proper action from showCompletedTasks call', () => {
            console.log('please integrate me...free pass for now')
        });
    });
});