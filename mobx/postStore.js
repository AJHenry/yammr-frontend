import { observable, action, computed } from 'mobx';

class PostStore {
  // Main Feed
  @observable
  posts = {
    topFeed: [],
    hotFeed: [],
    newFeed: [],
  };

  @observable
  selectedFeed = null;

  @observable
  selectedPost = null;

  @observable
  mFeedFooter = false;

  @observable
  mFeedRefresh = false;

  @observable
  mFeedLoading = true;

  @observable
  postError = false;

  @observable
  postComplete = false;

  service;

  constructor(service) {
    this.service = service;
    this.reset = this.reset.bind(this);
    this.reset();

    this.selectedFeed = 'topFeed';
  }

  @action
  reset = () => {
    this.posts.topFeed = [];
    this.posts.hotFeed = [];
    this.posts.newFeed = [];
  };

  /*
    @action deletePost = async (postID) => {
          // use service delete
          const post = await this.service.deletePost(postID);
          if (!post) return;
  
          this.topFeed = this.topFeed.filter(p => {
              return p.postID !== post.postID;
          });
  
          this.hotFeed = this.hotFeed.filter(p => {
              return p.postID !== post.postID;
          });
          this.newFeed = this.newFeed.filter(p => {
              return p.postID !== post.postID;
          });
      }
      */

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
    this.posts.newFeed.unshift(newPost);
  };

  isFetchingPosts = false;

  @action
  getMorePosts = async () => {
    if (this.mFeedFooter) {
      return;
    }

    this.mFeedFooter = true;
    const index = this.posts[this.selectedFeed].length - 1;
    const lastID = this.posts[this.selectedFeed][index].postID;
    const newPosts = await this.service.getFeed(lastID);

    if (newPosts.error) {
      this.mFeedLoading = false;
      return;
    }
    const t = newPosts.map(post => post.postID);
    const newIDs = new Set(t);
    const filteredOld = this.posts[this.selectedFeed].filter(
      post => !newIDs.has(post.postID)
    );
    const temp = [...filteredOld, ...newPosts];
    this.posts[this.selectedFeed] = temp;
    this.mFeedFooter = false;
  };

  @action
  getPosts = async () => {
    this.mFeedLoading = true;
    let newPosts = await this.service.getFeedFresh();
    if (newPosts.error) {
      this.mFeedLoading = false;
      console.log(newPosts.error.response.status);
      return;
    }
    const t = newPosts.map(post => post.postID);
    const newIDs = new Set(t);
    const filteredOld = this.posts[this.selectedFeed].filter(
      post => !newIDs.has(post.postID)
    );
    const temp = [...newPosts, ...filteredOld];
    this.posts[this.selectedFeed] = temp;
    this.mFeedLoading = false;
  };

  @action
  getRefreshPosts = async () => {
    this.mFeedRefresh = true;
    const newPosts = await this.service.getFeedFresh();
    if (newPosts.error) {
      this.mFeedRefresh = false;
      return;
    }
    const temp = [...newPosts, ...this.posts[this.selectedFeed]];
    this.posts[this.selectedFeed] = temp;

    this.mFeedRefresh = false;
  };

  @action
  postScreen = () => {
    this.postComplete = false;
    this.postError = false;
  };

  @action
  getComments = postId => {
    comments = [
      {
        parentId: 'weroiw3',
        text: 'Comment',
        score: 34,
        postId: 'sdfsdf',
        postTime: new Date(),
        postType: 'comment',
        voteType: 'up',
      },
    ];

    var newPostData = [...this.posts[this.selectedFeed]];

    // TODO: Change this to a hashmap
    newPostData.forEach(post => {
      if (post.postId === postId) {
        if (!post.comments) {
          post.comments = comments;
        }
      }
    }, this);

    this.posts[this.selectedFeed] = newPostData;
  };

  @action
  updateCommentScore = (parentId, postId, type, score) => {
    console.log(
      `Called mobx: update comment score (${parentId}, ${postId}, ${type}, ${score})`
    );
    var newPostData = [...this.posts[this.selectedFeed]];

    // TODO: Change this to a hashmap
    newPostData.forEach(post => {
      if (post.postId === parentId) {
        post.comments.forEach(comment => {
          if (comment.postId === postId) {
            //console.log("Updated comment")
            comment.voteType = type;
            comment.score = score;
          }
        }, this);
      }
    }, this);

    //console.log(this.posts[this.selectedFeed]);

    this.posts[this.selectedFeed] = newPostData;
  };
  /*
    @action loadPosts = async (name) => {
          // get posts (not actual call yet)
          const posts = await this.service.getPosts(name);
          if (!posts) return;
  
          posts.forEach(element => {
              this.posts[name].push(element);
          });
      }
      */

  @action
  setFeed = name => {
    console.log(name);
    switch (name) {
      case 0:
        this.selectedFeed = 'newFeed';
        break;
      case 1:
        console.log('SEt feed to top');
        this.selectedFeed = 'topFeed';
        break;
      case 2:
        this.selectedFeed = 'hotFeed';
        break;
      default:
        console.log('Default');
        this.selectedFeed = 'newFeed';
    }
  };

  @computed
  get getFeed() {
    //console.log(this.posts[this.selectedFeed]);
    return this.posts[this.selectedFeed].slice();
  }

  @action
  setSelectedPost = parentPostId => {
    this.posts[this.selectedFeed].forEach(post => {
      if (post.postId === parentPostId) {
        this.selectedPost = post;
      }
    });
  };

  @computed
  get getPostById() {
    return parentPostId => {
      let p = null;
      this.posts[this.selectedFeed].forEach((post, index) => {
        if (post.postId === parentPostId) {
          console.log(`Found one at ${index}`);
          p = post;
        }
      });
      return p;
    };
  }

  @action
  updatePostVote = (postId, type, score) => {
    console.log(
      `Called mobx: updated post store (${postId}, ${type}, ${score})`
    );
    var newPostData = [...this.posts[this.selectedFeed]];

    // TODO: Change this to a hashmap
    newPostData.forEach(post => {
      if (post.postId === postId) {
        post.score = score;
        post.voteType = type;
      }
    });

    this.posts[this.selectedFeed] = newPostData;
  };

  /*
    getPostById = postId => {
      console.log(`Called mobx: search by postID: ${postId}`);
      // TODO: Change this to a hashmap
      this.posts[this.selectedFeed].forEach(post => {
        if (post.postId === postId) {
          return post;
        }
      });
      return null;
    };
    */
}
export default PostStore;
