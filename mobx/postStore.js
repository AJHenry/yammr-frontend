import { observable, action, computed } from 'mobx';

class PostStore {
  @observable
  posts = {};

  service;

  constructor(service) {
    this.service = service;
    reset();
  }

  @action
  reset() {
    this.posts = {
      top: [],
      hot: [],
      new: [],
    };
  }

  /*@action deletePost = async (postID) => {
        // use service delete
        const post = await this.service.deletePost(postID);
        if (!post) return;

        this.posts.top = this.posts.top.filter(p => {
            return p.postID !== post.postID;
        });

        this.posts.hot = this.posts.hot.filter(p => {
            return p.postID !== post.postID;
        });
        this.posts.new = this.posts.new.filter(p => {
            return p.postID !== post.postID;
        });
    }*/

  @action
  addPost = async text => {
    const newPost = await this.service.postItem(text);
    if (!newPost) return;
    this.posts.new.unshift(newPost);
    console.log(this.posts);
  };

  /*@action loadPosts = async (name) => {
        // get posts (not actual call yet)
        const posts = await this.service.getPosts(name);
        if (!posts) return;

        posts.array.forEach(element => {
            this.posts[name].push(element);
        });
    }*/

  @computed
  posts = name => {
    return this.posts[name];
  };
}
export default PostStore;
