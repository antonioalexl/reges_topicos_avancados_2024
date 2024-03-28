import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFrmComponent } from './cliente-frm.component';

describe('ClienteFrmComponent', () => {
  let component: ClienteFrmComponent;
  let fixture: ComponentFixture<ClienteFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteFrmComponent]
    });
    fixture = TestBed.createComponent(ClienteFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
