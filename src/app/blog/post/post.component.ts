import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	faThumbsUp = faThumbsUp;
	faThumbsDown = faThumbsDown;
	faPencilAlt = faPencilAlt;

	post: Post;
	modify: boolean = false;
	@Input() title: string;
	@Input() giftList: [
		{
		idea: string
		}
	];
	modifyPost: Post;
	errorMessage: string;

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

	onLike(post) {
		this.postService.updatePost(post, "singleLikes", 1);
	}

	onDislike(post) {
		this.postService.updatePost(post, "singleDislikes", 1);
	}

	onDelete(post) {
		this.postService.deletePost(post);
	}

	onModify() {
		this.title = this.post.title;
		this.giftList = this.post.list;
		this.modify = true;
	}

	onAddIdea(){
		let tempIdea = { idea: '' }
		this.giftList.push(tempIdea);
	}

	onModifyPost() {
		if (this.title !== '') {
			let tempList = this.giftList;
			for (var i = 0; i < tempList.length; i++) {
				let currentIdea = tempList[i];
				if (currentIdea.idea === '') {
					this.errorMessage = "Veuillez rentrer toutes vos idées pour modifier votre liste, ou appuyez sur ANNULER pour ne pas la modifier."
				}
			}
			if(this.errorMessage === '' || this.errorMessage === undefined){
				this.modifyPost = new Post(null, null, null, null, null);
				this.modifyPost = this.post;
				this.modifyPost.list = this.giftList;
				this.modifyPost.title = this.title;
				this.postService.modifyPost(this.post, this.modifyPost).then(
					() => {
						delete this.title;
						delete this.giftList;
						delete this.modifyPost;
						this.modify = false;
					},
					(error) => {
						this.errorMessage = error;
					}
				);
			}
		}
		else {
			this.errorMessage = "Veuillez rentrer votre prénom et toutes vos idées pour modifier votre liste, sinon appuyez sur ANNULER pour ne pas la modifer";
		} 
	}

	onDeleteIdea(id){
		this.giftList.splice(id, 1);
	}

	onCancel() {
		delete this.modifyPost;
		this.modify = false;
	}

	goBack() {
		this.router.navigate(['/home']);
	}

	//POURQUOI PAS IMPLEMENTER LE FAIT DE REPONDRE AU POST ?

}
