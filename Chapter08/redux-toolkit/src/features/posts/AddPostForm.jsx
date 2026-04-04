import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Add a New Post
        </h2>

        <form className="space-y-5">
          {/* Post Title */}
          <div>
            <label
              htmlFor="postTitle"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Post Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
              placeholder="Enter your post title..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="postAuthor"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Author:{" "}
            </label>
            <select
              id="postAuthor"
              value={userId}
              onChange={onAuthorChanged}
              className="bg-white-700 border-1"
            >
              <option value=""></option>
              {usersOption}
            </select>
          </div>

          {/* Post Content */}
          <div>
            <label
              htmlFor="postContent"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Content
            </label>
            <textarea
              name="postContent"
              id="postContent"
              value={content}
              onChange={onContentChanged}
              placeholder="Write your post content here..."
              rows="4"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={onSavePostClicked}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition duration-300"
            disabled={!canSave}
          >
            Save Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPostForm;
