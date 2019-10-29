import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { BlogComponent } from './blog/blog.component';
import { CreateUserFormComponent } from './user/create-user-form/create-user-form.component';
import { UserComponent } from './user/user.component';
import { PostFormComponent } from './blog/post-form/post-form.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostComponent } from './blog/post/post.component';

@NgModule({
	declarations: [
		AppComponent,
		SignInComponent,
		SignUpComponent,
		HeaderComponent,
		HomeComponent,
		FourohfourComponent,
		BlogComponent,
		CreateUserFormComponent,
		UserComponent,
		PostFormComponent,
		PostComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		AuthGuardService,
		AuthService,
		PostService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
