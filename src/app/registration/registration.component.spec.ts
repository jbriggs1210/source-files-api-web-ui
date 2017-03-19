import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RegistrationComponent } from './registration.component';
import { SourceWebService } from '../services/source-web.service';
import { AuthService } from '../services/auth.service';
import { Config } from '../config';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [RegistrationComponent],
      providers: [SourceWebService,
                  AuthService,
                  Config]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkBoxTruthy should initialize to false', () => {
    expect(component.checkboxTruthy).toBeFalsy(false);
  });

  it('userLoggedIn should initialize to false', () => {
    expect(component.userLoggedIn).toBeFalsy(false);
  });

  it('should be able to check localStorage for userLoggedIn item', () => {
    // set user logged in localStorage item
    localStorage.setItem('userLoggedIn', Boolean(true).toString());

    component.ngOnInit();

    expect(localStorage.getItem('userLoggedIn')).toBeTruthy();
  });

  it('should toggle checkbox checkboxTruthy property correctly', () => {
    component.toggleCheckbox();
    expect(component.checkboxTruthy).toBeTruthy();

    component.toggleCheckbox();
    expect(component.checkboxTruthy).toBeFalsy();
  });
});
