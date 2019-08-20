import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

	posts: Post[];
	postsSubscription: Subscription;

	constructor(private postService: PostService, private router: Router) { }

	ngOnInit() {
		this.postsSubscription = this.postService.postsSubject.subscribe(
			(posts: Post[]) => {
				this.posts = posts;
			}
		);
		this.postService.emitPosts();
	}

	onNewPost(){
		this.router.navigate(['/posts', 'new']);
	}

	onDeletePost(post: Post){
		this.postService.deletePost(post);
	}

	onSinglePost(id: number){
		this.router.navigate(['/posts', 'view', id]);
	}

	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}
}
