'use strict';

describe('Controller: PostsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sa20AdminFrontendApp'));

  var PostsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsAddCtrl = $controller('PostsAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostsAddCtrl.awesomeThings.length).toBe(3);
  });
});
