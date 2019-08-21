import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

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
		//to implement
	}

	onUnlike() {
		//to implement
	}

}
