import { observable, action, computed } from 'mobx';

class PostStore {
  @observable
  posts = {};

  @observable
  postError = false;

  @observable
  postComplete = false;

  service;

  constructor(service) {
    this.service = service;
    this.reset = this.reset.bind(this);
    this.reset();
  }

  @action
  reset = () => {
    this.posts = {
      top: [],
      hot: [],
      new: [],
    };
  };

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
    this.postComplete = false;
    this.postError = false;
    const newPost = await this.service.postItem(text);
    if (newPost.error) {
      this.postError = true;
      this.postComplete = false;
      return;
    }
    this.postError = false;
    this.postComplete = true;
    this.posts.new.unshift(newPost);
  };

  @action
  postScreen = () => {
    this.postComplete = false;
    this.postError = false;
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
  getPosts = name => {
    return this.posts[name];
  };
}
export default PostStore;
