export class Post {

    constructor(
		public title: string,
        public list: [ { idea: string } ],
        public date: Date,
        public likes: number,
        public dislikes: number
    ) { }

}
