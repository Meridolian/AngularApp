import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	createPostForm: FormGroup;
	updatePostForm: FormGroup;
	errorMessage: string;

	constructor(private postService: PostService, private router: Router, private formbuilder: FormBuilder) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(){
		this.createPostForm = this.formbuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}

	onCreatePost(){
		const title = this.createPostForm.get('title').value;
		const description = this.createPostForm.get('description').value;
		this.postService.createPost(title, description).then(
			() => {
				this.router.navigate(['/single-post']);
			},
			(error) => {
				this.errorMessage = error;
			}
		);
	}

}
