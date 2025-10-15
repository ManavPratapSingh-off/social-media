import React from 'react'

function Postcard({post}) {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-sm max-w-md mx-auto my-6">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src={post.author?.profile_img ? post.author.profile_img : ""}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover border border-[var(--color-border)]"
        />
        <div className="ml-3 flex-1">
          <span className="font-semibold text-[var(--color-text)]">{post.author?.user_name ? post.author.user_name : "user name"}</span>
          <span className="block text-xs text-[var(--color-muted)]">{post.updatedAt ? Date.now()-post.updatedAt : "2 hour ago"}</span>
        </div>
        <button className="text-[var(--color-muted)] text-xl">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
      {/* Post Image */}
      <div className="w-full max-w-full bg-black">
        <img
          src={post.media_url?post.media_url : ""}
          alt="Post"
          className="w-full h-auto  object-contain"
        />
      </div>
      {/* Post Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex space-x-4 text-2xl text-[var(--color-text)]">
          <button><i className="far fa-heart hover:text-[var(--color-primary)]"></i></button>
          <button><i className="far fa-comment hover:text-[var(--color-primary)]"></i></button>
          <button><i className="far fa-paper-plane hover:text-[var(--color-primary)]"></i></button>
        </div>
        <button className="text-xl text-[var(--color-text)]">
          <i className="far fa-bookmark"></i>
        </button>
      </div>
      {/* Post Likes */}
      <div className="px-4 text-sm font-semibold text-[var(--color-text)]">
        {post.likes?post.likes.length : "0 likes"}
      </div>
      {/* Post Caption */}
      <div className="px-4 py-2 text-[var(--color-text)]">
        <span className="font-semibold">{post.author?.user_name ? post.author.user_name : "user name"}</span> {post.caption && post.caption}
      </div>
      {/* View all comments */}
      <div className="px-4 pb-2 text-[var(--color-muted)] text-sm cursor-pointer">
        {post.comments ? `View all ${post.comments.length} comments` : "No comments yet"}
      </div>
      {/* Add a comment */}
      <div className="flex items-center border-t border-[var(--color-border)] px-4 py-2">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-transparent outline-none text-[var(--color-text)]"
        />
        <button className="text-[var(--color-primary)] font-semibold ml-2">Post</button>
      </div>
    </div>
  )
}

export default Postcard