//class Categorie
export class Categorie {
    constructor(
        public id:string,
        public titre:string
    ){}
}

export class Theme {
    constructor(
        public id : string,
        public theme_title: string []
    ){}
}
export class Colors {
    constructor(
        public template_colors: string []
    ){}
}