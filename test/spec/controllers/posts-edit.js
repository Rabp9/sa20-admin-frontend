'use strict';

describe('Controller: PostsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('sa20AdminFrontendApp'));

  var PostsEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsEditCtrl = $controller('PostsEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostsEditCtrl.awesomeThings.length).toBe(3);
  });
});
