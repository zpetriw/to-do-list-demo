var assert = require('assert');
var authController = require('./auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
chai.use(chaiAsPromised);
chai.should();

beforeEach(function settingUpRoles() {
    authController.setRoles(['user']);
});

describe('AuthController', function() {

    describe('isAuthorized', function () {
        var user = {};
        beforeEach(function () {
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
            sinon.spy(user, 'isAuthorized');
            authController.setUser(user);
        });

        it('Should return false if not authorized', function() {
            var isAuth = authController.isAuthorized('admin');
            console.log(user.isAuthorized);
            user.isAuthorized.calledOnce.should.be.true;
            expect(isAuth).to.be.false;
        });
        it('Should return true if authorized', function() {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('user');

            isAuth.should.be.true;
        });
        it('should not allow a get if not authorized');
        it('should allow a get if authorized');
    });

    describe('isAuthorizedAsync', function (){
        it('Should return false if not authorized', function(done) {
            authController.isAuthorizedAsync('admin',
                function(isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        });
    });

    describe.skip('skippable test', function (){
        it('Should skip this test because it\'s breaking things');
    });

    describe('skippable environment specific test', function () {
        it('Should skip this test if we\'re in the wrong environment. This doesn\'t quite work correctly.');
        // error: 'this.skip' is not a function. Yikes.

        // if (true) {
        //     this.skip();
        // }
    });

    describe('isAuthorizedPromised', function (){
        it('Should return false if not authorized', function() {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    });

    describe('getIndex', function () {
        var user = {};
        beforeEach(function () {
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
        });

        it('should render index', function() {
            var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            var req = {user: user};
            var res = {
                render: function(){}
            };
            var mock = sinon.mock(res);
            mock.expects('render').once().withExactArgs('index');

            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;
            
            mock.verify();
        });
    });



});