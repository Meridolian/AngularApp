import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import DataSnapshot = firebase.database.DataSnapshot;
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

	constructor(private httpClient: HttpClient) {
		this.getPosts();
	}

	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	savePosts() {
		firebase.database().ref('/posts').set(this.posts).then(
			() => {
				console.log('Posts added to database !');
			},
			(error) => {
				console.log(error);
			}
		)
	}

	createPost(newPost: Post) {
		this.posts.push(newPost);
		this.savePosts();
		this.emitPosts();
	}

	getPosts() {
		firebase.database().ref('/posts').on(
			'value', (data: DataSnapshot) => {
				this.posts = data.val() ? data.val() : [];
				this.emitPosts();
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getSinglePost(id: number) {
		return new Promise(
			(resolve, reject) => {
				firebase.database().ref('posts/' + id).once('value').then(
					(data: DataSnapshot) => {
						resolve(data.val());
					},
					(error) => {
						reject(error)
						console.log(error);
					}
				);
			}
		);
	}
	modifyPost(oldPost: Post, newPost: Post){
		/* const id = this.posts.findIndex(post => post === oldPost);
		return new Promise(
			(resolve, reject) => {
				this.getSinglePost(id).then(
					() => {
						this.posts[id] = newPost;
						this.savePosts();
						this.emitPosts();
						resolve(true);
					},
					(error) => {
						reject(error);
					}
				)
			}
		); */
		// TO DO 
	}

	updatePost(id, updateType, data) {
		if(updateType === 'likes' || updateType === 'dislikes'){
			this.posts[id][updateType] += data;
		}
		else if(updateType === "singleLikes" || updateType === "singleDislikes") {
			for(var i = 0; i < this.posts.length; i++){
				let currentPost = this.posts[i];
				if(currentPost === id){
					if(updateType === "singleLikes"){
						this.posts[i].likes += data;
					}
					else if (updateType === "singlesDislikes"){
						this.posts[i].dislikes += data;
					}
				}
			}
		}
		/* else if(updateType === 'title' || updateType === 'content') {
			this.posts[id][updateType] = data;
		} */
		this.savePosts();
		this.emitPosts();
	}

	deletePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
			(postE1) => {
				if (postE1 === post) {
					return true;
				}
			}
		);
		this.posts.splice(postIndexToRemove, 1);
		this.savePosts();
		this.emitPosts();
	}

}
