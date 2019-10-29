import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { PostComponent } from './blog/post/post.component';


const routes: Routes = [
	{ path: 'auth/sign-in', component: SignInComponent },
	{ path: 'auth/sign-up', component: SignUpComponent },
	{ path: 'auth', redirectTo: 'auth/sign-in' },
	{ path: 'home', canActivate: [AuthGuardService], component: HomeComponent },
	{ path: 'posts', canActivate: [AuthGuardService], redirectTo: 'home' },
	{ path: 'post', canActivate: [AuthGuardService], redirectTo: 'home' },
	{ path: 'posts/view/:id', canActivate: [AuthGuardService], component: PostComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'not-found', component: FourohfourComponent },
	{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
