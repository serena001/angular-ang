import { TestBed, inject } from '@angular/core/testing';

import { KeycloakRestService } from './keycloak-rest.service';

describe('KeycloakRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeycloakRestService]
    });
  });

  it('should ...', inject([KeycloakRestService], (service: KeycloakRestService) => {
    expect(service).toBeTruthy();
  }));
});
