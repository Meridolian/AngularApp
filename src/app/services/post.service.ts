import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	private post: Post;

	count: number = -1;

	constructor(private httpClient: HttpClient) { }

	createPost(title: string, description: string) {
		this.post = new Post({
			id: this.count++,
			title: title,
			description: description,
			date: new Date(),
			liked: 0,
			unliked: 0
		})
		return new Promise(
			(resolve, reject) => {
				firebase.database().ref().child('posts').push().key.then(
					() => {
						resolve();
						
					},
					(error) => {
						reject(error);
					}
				);
			}
		);
	}

	getPost() {

	}

	updatePost() {

	}

	deletePost() {

	}

}	
