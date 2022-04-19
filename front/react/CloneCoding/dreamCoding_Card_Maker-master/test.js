const state = {
  posts: [
    {
      id: 1,
      title: "제목입니다.",
      body: "내용입니다.",
      comments: [
        {
          id: 1,
          text: "와 정말 잘 읽었습니다.",
        },
      ],
    },
    {
      id: 2,
      title: "제목입니다.",
      body: "내용입니다.",
      comments: [
        {
          id: 2,
          text: "또 다른 댓글 어쩌고 저쩌고",
        },
      ],
    },
  ],
  selectedId: 1,
};

let tmp = {
  ...state,
  posts: state.posts.map((post) =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({ id: 3, text: "새로운댓글" }),
        }
      : post
  ),
};

console.log(tmp);
