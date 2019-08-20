import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { BlogComponent } from './blog/blog.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';


const routes: Routes = [
	{ path: 'auth/sign-in', component: SignInComponent },
	{ path: 'auth/sign-up', component: SignUpComponent },
	{ path: 'auth', redirectTo: 'auth/sign-in' },
	{ path: 'home', canActivate: [AuthGuardService], component: HomeViewComponent },
	{ path: 'posts', canActivate: [AuthGuardService], component: BlogComponent },
	{ path: 'posts/view/:id', canActivate: [AuthGuardService], component: SinglePostComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'not-found', component: FourohfourComponent },
	{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
