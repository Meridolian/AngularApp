import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { PostComponent } from './blog/post/post.component';
import { BlogComponent } from './blog/blog.component';
import { CreateUserFormComponent } from './user/create-user-form/create-user-form.component';
import { UserComponent } from './user/user.component';
import { PostFormComponent } from './blog/post-form/post-form.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@NgModule({
	declarations: [
		AppComponent,
		SignInComponent,
		SignUpComponent,
		HeaderComponent,
		HomeViewComponent,
		FourohfourComponent,
		PostComponent,
		BlogComponent,
		CreateUserFormComponent,
		UserComponent,
		PostFormComponent
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
