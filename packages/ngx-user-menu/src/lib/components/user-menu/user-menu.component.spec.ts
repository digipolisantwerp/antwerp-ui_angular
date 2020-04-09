import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserMenu, UserMenuComponent} from '@acpaas-ui/ngx-user-menu';
import {CommonModule} from '@angular/common';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';
import * as sinon from 'sinon';
import {first, tap} from 'rxjs/operators';

describe('User Menu Test', () => {

  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let mockUser: UserMenu.IUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserMenuComponent,
      ],
      imports: [
        CommonModule,
        FlyoutModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    mockUser = {
      avatarUrl: 'http://some.url',
      firstName: 'John',
      lastName: 'Doe',
    };
  });

  describe('Loggin In', () => {
    it('should initialize a button showing login functionality', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
      const loginButton = fixture.debugElement.nativeElement.querySelector('.a-button-login');
      expect(loginButton).not.toBeNull();
    });
    it('should trigger the output event when user clicks the login button', async () => {
      fixture.detectChanges();
      const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.a-button-login');
      expect(button).not.toBeNull();
      const spyOnLogin = sinon.stub();
      component.login$.pipe(
        first(),
        tap(spyOnLogin)
      ).subscribe();

      button.click();
      return fixture.whenStable().then(() => {
        expect(spyOnLogin.calledOnce).toBe(true);
      });
    });
  });

  describe('Loggin Out', () => {
    it('should display a user avatar button if the user is logged in', () => {
      component.user = mockUser;
      fixture.detectChanges();
      const userAvatar = fixture.debugElement.nativeElement.querySelector('.a-button-avatar');
      expect(userAvatar).not.toBeNull();
    });
    it('should trigger the output event when the user clicks the logout button', () => {
      component.user = mockUser;
      fixture.detectChanges();
      const logoutButton = fixture.debugElement.nativeElement.querySelector('.a-button-logout');
      const spyOnLogout = sinon.stub();
      component.logout$.pipe(
        first(),
        tap(spyOnLogout)
      ).subscribe();
      logoutButton.click();

      return fixture.whenStable().then(() => {
        expect(spyOnLogout.calledOnce).toBe(true);
      });
    });
    it('should not display the logout button if setting is set so', () => {
      component.showLogoutButton = false;
      component.user = mockUser;
      fixture.detectChanges();

      const logoutButton = fixture.debugElement.nativeElement.querySelector('.a-button.logout');
      expect(logoutButton).toBeNull();
    });
  });
});
