import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormTestComponent } from './template-drive-form-test.component';

describe('TemplateDriveFormTestComponent', () => {
  let component: TemplateDriveFormTestComponent;
  let fixture: ComponentFixture<TemplateDriveFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDriveFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriveFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});