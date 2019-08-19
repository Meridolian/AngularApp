import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(){
		const firebaseConfig = {
			apiKey: "AIzaSyCNdAWx2U6mrO0TWUAsucA0BnCmWkdIWJo",
			authDomain: "angularapp-a35cf.firebaseapp.com",
			databaseURL: "https://angularapp-a35cf.firebaseio.com",
			projectId: "angularapp-a35cf",
			storageBucket: "",
			messagingSenderId: "135990244777",
			appId: "1:135990244777:web:0a025e3be8675f1d"
		  };
		  firebase.initializeApp(firebaseConfig);
	}

}
