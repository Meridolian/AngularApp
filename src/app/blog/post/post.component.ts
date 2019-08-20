import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, Post {

	post: {
		id: number;
		title: string;
		description: string;
		date: Date;
		liked: number;
		unliked: number;
	}

	constructor(private postService: PostService) {
	}

	ngOnInit() {

	}

}
