import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { faThumbsUp }  from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

	faThumbsUp = faThumbsUp;

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

	onDeletePost(post: Post){
		this.postService.deletePost(post);
	}

	onSinglePost(id: number){
		this.router.navigate(['/posts', 'view', id]);
	}

	onLike(id) {
		this.postService.updatePost(id, "like", 1);
	}

	onDislike(id) {
		this.postService.updatePost(id, "dislike", 1);
	}

	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}
}
