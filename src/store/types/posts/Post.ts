interface NestedObject {
    rendered: string;
}

export interface Post {
    id: number;
    date: string;
    guid: NestedObject;
    title: NestedObject;
    excerpt: NestedObject;
}
