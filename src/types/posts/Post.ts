export enum PostTag {
    SCIENCE = 'Наука',
    WRITERS = 'Писатели',
    ART = 'Искусство',
}

export interface Post {
    id: string;
    image: string;
    title: string;
    createdAt: string;
    tags: PostTag[];
    text: string;
}
