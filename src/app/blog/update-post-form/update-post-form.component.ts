import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-update-post-form',
	templateUrl: './update-post-form.component.html',
	styleUrls: ['./update-post-form.component.scss']
})
export class UpdatePostFormComponent implements OnInit {

	post: Post;
	errorMessage: string;
	updatePostForm: FormGroup

	constructor(private formBuilder: FormBuilder, private postService: PostService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.initPost();
	}

	initPost() {
		this.post = new Post(null, null, null, null, null);
		const id = this.route.snapshot.params['id'];
		this.postService.getSinglePost(+id).then(
			(post: Post)=> {
				this.post = post;
				this.initForm()
			}
		);
	}

	initForm(){
		this.updatePostForm = this.formBuilder.group({
			title: [this.post.title, Validators.required],
			/* content: [this.post.content, Validators.required] */
		});
	}

	onUpdateForm(){
		const id = this.route.snapshot.params['id'];
		const title = this.updatePostForm.get('title').value;
		const content = this.updatePostForm.get('content').value;
		this.postService.updatePost(id, 'title', title);
		this.postService.updatePost(id, 'content', content);
		this.updatePostForm.reset();
	}

}
