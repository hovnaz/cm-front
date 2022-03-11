import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderService } from '@services/header.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userInfoIsOpened!: boolean;
  @Output() infoIsOpened: EventEmitter<boolean> = new EventEmitter();
  showSideNav = false;

  headerTitle: string | undefined;
  resizedWindow!: boolean;
  @Output() sideNavEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public headerService: HeaderService,
    public authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.headerService.headerSubject.subscribe((data) => {
      this.headerTitle = data;
    });
  }
  hideAndShowNavbar(): void{
    this.showSideNav = !this.showSideNav;
    this.sideNavEmitter.emit(this.showSideNav);
  }
  openInfo(): void{
    if (this.userInfoIsOpened){
      const popup = document.querySelector('#user_info');
      popup!.classList.remove('user_info_display');
      this.userInfoIsOpened = false;
      this.infoIsOpened.emit(this.userInfoIsOpened);
    } else {
      const popup = document.querySelector('#user_info');
      popup!.classList.add('user_info_display');
      this.userInfoIsOpened = true;
      this.infoIsOpened.emit(this.userInfoIsOpened);
    }
  }
  logout(): void{
    this.authService.logout().subscribe(response => {
      if (response.success === true){
        this.router.navigate(['']);
      }
    });
  }
}
