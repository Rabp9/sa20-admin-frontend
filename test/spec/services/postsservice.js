'use strict';

describe('Service: postsService', function () {

  // load the service's module
  beforeEach(module('sa20AdminFrontendApp'));

  // instantiate service
  var postsService;
  beforeEach(inject(function (_postsService_) {
    postsService = _postsService_;
  }));

  it('should do something', function () {
    expect(!!postsService).toBe(true);
  });

});
