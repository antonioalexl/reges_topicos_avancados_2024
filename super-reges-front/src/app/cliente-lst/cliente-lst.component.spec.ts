import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLstComponent } from './cliente-lst.component';

describe('ClienteLstComponent', () => {
  let component: ClienteLstComponent;
  let fixture: ComponentFixture<ClienteLstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteLstComponent]
    });
    fixture = TestBed.createComponent(ClienteLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
