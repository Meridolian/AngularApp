import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Post } from '../../models/post.model';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	giftListForm: FormGroup;
	giftArray: { content : string }[];

	updateForm: FormGroup;
	errorMessage: string;

	constructor(private postService: PostService, private formbuilder: FormBuilder) {
		this.giftListForm = this.formbuilder.group({
			title: ['', Validators.required],
			giftList: this.formbuilder.array([])
		});
	}

	ngOnInit(){
		this.giftArray = [];
	}

	get giftList() {
		return this.giftListForm.get('giftList') as FormArray;
	}

	addGift(item) {
		this.giftArray.push(item);
		this.giftList.push(this.formbuilder.control(false));
	}

	deleteGift(id){
		this.giftList.removeAt(id);
	}

	onCreateList(){
		const title = this.giftListForm.get('title').value;
		const list = this.giftListForm.get('gifts').value;
		const date = new Date();
		const likes = 0;
		const dislikes = 0;
		const newPost = new Post(title, list, date, likes, dislikes);
		this.postService.createPost(newPost);
		this.giftListForm.reset();
	}

}
