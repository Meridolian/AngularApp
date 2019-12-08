import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Post } from '../../models/post.model';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	@Input() title: string;
	@Input() giftList: [
		{
			idea: string
		}
	];
	formValid: boolean = false;

	updateForm: FormGroup;
	errorMessage: string;

	constructor(private postService: PostService, private formbuilder: FormBuilder) { }

	ngOnInit() {
	}

	onAddIdea() {
		if (this.giftList == undefined) {
			this.giftList = [{ idea: '' }];
		}
		else {
			this.giftList.push({ idea: '' });
		}
	}

	onDeleteIdea(id) {
		this.giftList.splice(id, 1);
	}

	onFormValid() {
		if (this.title === '' || this.title === undefined) {
			if (this.giftList !== undefined) {
				if (this.giftList.length > 0) {
					let tempList = this.giftList;
					for (var i = 0; i < tempList.length; i++) {
						let currentGift = tempList[i];
						if (currentGift.idea === '') {
							this.errorMessage = "Veuillez rentrer votre prénom et au toutes vos idées !";
							break;
						}
					}
					if (this.errorMessage !== "Veuillez rentrer votre prénom et au toutes vos idées !") {
						this.errorMessage = "Veuillez rentrer votre prénom pour poster votre liste !";
					}
				}
				else {
					this.errorMessage = "Veuillez rentrer votre prénom et au moins une idée !";
				}
			}
			else {
				this.errorMessage = "Veuillez rentrer votre prénom et au moins une idée !";
			}
		}
		else {
			if(this.giftList !== undefined){
				if(this.giftList.length > 0){
					let tempList = this.giftList;
					for (var i = 0; i < tempList.length; i++) {
						let currentGift = tempList[i];
						if (currentGift.idea === '') {
							this.errorMessage = "Veuillez rentrer toutes vos idées !";
							break;
						}
					}
					if(this.errorMessage !== "Veuillez rentrer toutes vos idées !"){
						this.onCreateList();
					}
				}
				else {
					this.errorMessage = "Veuillez rentrer au moins une idée !";
				}
			}
			else {
				this.errorMessage = "Veuillez rentrer au moins une idée !";
			}
		}

		console.log(this.giftList)
	}

	deleteForm(){
		delete this.giftList;
		delete this.title;
	}

	onCreateList() {
		const title = this.title;
		const list = this.giftList;
		const date = new Date();
		const likes = 0;
		const dislikes = 0;
		const newPost = new Post(title, list, date, likes, dislikes);
		this.postService.createPost(newPost);
		delete this.giftList;
		delete this.title;
	}

}
