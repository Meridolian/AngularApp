export class Post {

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public date: Date,
        public liked: number,
        public unliked: number
    ) { }

}