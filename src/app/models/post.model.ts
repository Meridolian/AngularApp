export class Post {

    constructor(
		public title: string,
        public list: [object],
        public date: Date,
        public likes: number,
        public dislikes: number
    ) { }

}
