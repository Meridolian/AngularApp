import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	createPostForm: FormGroup;
	updatePostForm: FormGroup;
	errorMessage: string;
	counter: number = -1;

	constructor(private postService: PostService, private formbuilder: FormBuilder) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(){
		this.createPostForm = this.formbuilder.group({
			id: this.counter++,
			title: ['', Validators.required],
			content: ['', Validators.required],
			date: new Date(),
			likes: 0,
			dislikes: 0
		});
	}

	onCreatePost(){
		const id = this.createPostForm.get('id').value;
		const title = this.createPostForm.get('title').value;
		const content = this.createPostForm.get('content').value;
		const date = this.createPostForm.get('date').value;
		const likes = this.createPostForm.get('likes').value;
		const dislikes = this.createPostForm.get('dislikes').value;
		const newPost = new Post(id, title, content, date, likes, dislikes);
		this.postService.createPost(newPost);
	}

}
