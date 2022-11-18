interface NestedObject {
    rendered: string;
}

export interface Post {
    id: number;
    date: string;
    link: string;
    title: NestedObject;
    excerpt: NestedObject;
}
