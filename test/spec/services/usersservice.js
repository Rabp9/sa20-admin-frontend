'use strict';

describe('Service: usersService', function () {

  // load the service's module
  beforeEach(module('sa20AdminFrontendApp'));

  // instantiate service
  var usersService;
  beforeEach(inject(function (_usersService_) {
    usersService = _usersService_;
  }));

  it('should do something', function () {
    expect(!!usersService).toBe(true);
  });

});
