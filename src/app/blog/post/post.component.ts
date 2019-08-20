import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() id: number;
	@Input() title: string;
	@Input() content: string;
	@Input() date: Date;
	@Input() liked: number;
	@Input() unliked: number;

	constructor(private postService: PostService) { }

	ngOnInit() {
	}

	onLike(){
		//to implement
	}

	onUnlike(){
		//to implement
	}

}
