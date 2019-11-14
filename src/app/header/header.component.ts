import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	faUserCircle = faUserCircle;
	faHome = faHome;

	isAuth: boolean;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		firebase.auth().onAuthStateChanged(
			(user) => {
				if (user) {
					this.isAuth = true;
				}
				else {
					this.isAuth = false;
				}
			}
		);
	}


	onSignOut(){
		this.authService.signOutUser();
	}

}
