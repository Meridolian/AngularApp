import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


	post: Post;

	constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.post = new Post(null, null, null, null, null, null);
		const id = this.route.snapshot.params['id'];
		this.postService.getSinglePost(+id).then(
			(post: Post) => {
				this.post = post;
			}
		);
	}

	onLike() {
		const id = this.route.snapshot.params['id'];
		this.postService.getSinglePost(+id).then(
			(post: Post) => {
				post.likes++;
			}
		);
		this.postService.savePosts();
		this.postService.emitPosts();
	}

	onUnlike() {
		const id = this.route.snapshot.params['id'];
		this.postService.getSinglePost(+id).then(
			(post: Post) => {
				post.dislikes++;
			}
		);
		this.postService.savePosts();
		this.postService.emitPosts();
	}

	onBack() {
		this.router.navigate(['/Home'])
	}

}
