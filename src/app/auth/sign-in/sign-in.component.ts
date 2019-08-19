import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

	signinForm: FormGroup;
	errorMessage: string;

	constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(){
		this.signinForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
		});
	}

	onSubmit(){
		const email = this.signinForm.get('email').value;
		const password = this.signinForm.get('password').value;
		this.authService.signInUser(email, password).then(
			() => {
				this.router.navigate(['/home']);
			},
			(error) => {
				this.errorMessage = error;
			}
		);
	}
	
}
