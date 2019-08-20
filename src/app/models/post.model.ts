export class Post {

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public date: Date,
        public liked: number,
        public unliked: number
    ) { }

}