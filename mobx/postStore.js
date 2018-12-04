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
      console.log(`Already fetching more posts`);
      return;
    }

    this.mFeedFooter = true;

    // TODO: const newPost = await this.service.postItem(text);
    setTimeout(() => {
      this.mFeedFooter = false;

      this.posts[this.selectedFeed] = [
        ...this.posts[this.selectedFeed],
        {
          text: 'Add Post 1',
          score: 1,
          postId: 'pwmfi1',
          postTime: new Date(Date.now() - 0),
        },
        {
          text: 'Add Post 2',
          score: 0,
          postId: 'pwmfi2',
          postTime: new Date(Date.now() - 455450),
        },
        {
          text: 'Add Post 3',
          score: 1,
          postId: 'pwmfi3',
          postTime: new Date(Date.now() - 0),
        },
        {
          text: 'Add Post 4',
          score: 0,
          postId: 'pwmfi4',
          postTime: new Date(Date.now() - 455450),
        },
      ];
    }, 2000);
  };

  @action
  getPosts = async () => {
    this.mFeedLoading = true;

    // TODO: const newPost = await this.service.postItem(text);
    setTimeout(() => {
      this.mFeedLoading = false;

      this.posts[this.selectedFeed] = [
        {
          text: 'Watermelon is a food?',
          score: 99,
          postId: 'asdf1',
          postTime: new Date(),
          replyCount: 1,
          postType: 'text',
          voteType: 'down',
        },
        {
          text: `Those who survived the San Francisco earthquake said, "Thank God, I'm still alive." But, of course, those who died, their lives will never be the same again.`,
          score: 50,
          postId: 'lkj4',
          postTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
          voteType: 'down',
        },
        {
          text: 'Negative Post',
          score: -8,
          postId: 'gfbfg8',
          postTime: new Date(Date.now() - 546456),
          replyCount: 2,
        },
        {
          text: 'Overflow Post',
          score: 0,
          postId: 'weroiw9',
          postTime: new Date(Date.now() - 346457457),
        },
        {
          text: 'Overflow Post 1',
          score: 0,
          postId: 'weroiw6',
          postTime: new Date(Date.now() - 346457457),
        },
        {
          text: 'Overflow Post 2',
          score: 0,
          postId: 'weroiw5',
          postTime: new Date(Date.now() - 346457457),
        },
        {
          text: 'Overflow Post 3',
          score: 0,
          postId: 'weroiw4',
          postTime: new Date(Date.now() - 346457457),
        },
        {
          text: 'Overflow Post 4',
          score: 2,
          postId: 'weroiw3',
          postTime: new Date(Date.now() - 346457457),
        },
        {
          text: 'Overflow Post 5',
          score: 1,
          postId: 'weroiw2',
          postTime: new Date(Date.now() - 346457457),
        },
      ];
    }, 2000);
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
