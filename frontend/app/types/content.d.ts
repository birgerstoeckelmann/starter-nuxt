interface Image {
  url: string;
  alt: string;
}

interface Page {
  id: number;
  uri: string;
  title: string;
  pageSubheading: string;
  pageContent: string;
  image: Image;
  slug: string;
}

interface Post extends Page {
  postDate: string;
  // blog post
  authorName?: string;
  authorId?: number;
  category?: Category;
  // guestbook post
  textBlock?: string;
}
