import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


	post: Post;

	constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.post = new Post(null, null, null, null, null);
		const id = this.route.snapshot.params['id'];
		this.postService.getSinglePost(+id).then(
			(post: Post) => {
				this.post = post;
			}
		);
	}

	onLike(id: number) {
		this.postService.updatePost(id, "likes", 1);
	}

	onDislike(id: number) {
		this.postService.updatePost(id, "dislikes", 1);
	}

	goBack(){
		this.router.navigate(['/home']);
	}

	//POURQUOI PAS IMPLEMENTER LE FAIT DE REPONDRE AU POST ?

}
