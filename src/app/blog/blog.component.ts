import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

	faThumbsUp = faThumbsUp;
	faThumbsDown = faThumbsDown;
	faPencilAlt = faPencilAlt;

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

	onDelete(post: Post) {
		this.postService.deletePost(post);
	}

	onLike(id: number) {
		this.postService.updatePost(id, "likes", 1);
	}

	onDislike(id: number) {
		this.postService.updatePost(id, "dislikes", 1);
	}

	onViewSinglePost(id: number) {
		this.router.navigate(['/posts', 'view', id]);
	}

	onUpdateModal(id){

	}

	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}
}
