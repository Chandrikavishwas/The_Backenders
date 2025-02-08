import { useState, useEffect } from 'react';
import { ref, push, onValue, update, remove } from 'firebase/database';
import { db } from '../config/firebase';
import '../styles/comment.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const commentsPerPage = 4;

  // Fetch comments from Firebase
  useEffect(() => {
    const commentsRef = ref(db, 'comments');
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const commentsArray = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setComments(commentsArray);
    });

    return () => unsubscribe();
  }, []);

  // Add or update a comment
  const addComment = () => {
    if (!inputValue.trim()) return;

    if (editingComment) {
      // Update existing comment or reply
      const commentRef = ref(db, `comments/${editingComment}`);
      update(commentRef, { text: inputValue.trim() });
      setEditingComment(null);
    } else if (replyingTo) {
      // Add a reply
      const replyRef = ref(db, `comments/${replyingTo}/replies`);
      push(replyRef, { text: inputValue.trim(), timestamp: Date.now() });
      setReplyingTo(null);
    } else {
      // Add a new parent comment
      const commentsRef = ref(db, 'comments');
      push(commentsRef, { text: inputValue.trim(), timestamp: Date.now(), rating: 0 });
    }

    setInputValue('');
  };

  // Delete a comment or reply
  const deleteComment = (id, parentId = null) => {
    if (parentId) {
      const replyRef = ref(db, `comments/${parentId}/replies/${id}`);
      remove(replyRef);
    } else {
      const commentRef = ref(db, `comments/${id}`);
      remove(commentRef);
    }
  };

  // Set comment rating
  const setCommentRating = (id, value) => {
    const commentRef = ref(db, `comments/${id}`);
    update(commentRef, { rating: value });
  };

  // Render replies
  const renderReplies = (replies, parentId) => {
    return replies
      ? Object.entries(replies).map(([replyId, reply]) => (
          <div key={replyId} className="comment-section-reply">
            <p>{reply.text}</p>
            <p>
              <small>{new Date(reply.timestamp).toLocaleString()}</small>
            </p>
            <div className="comment-section-actions">
              <button
                className="comment-section-button"
                onClick={() => deleteComment(replyId, parentId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      : null;
  };

  // Render comments with pagination
  const renderComments = () => {
    const startIndex = (currentPage - 1) * commentsPerPage;
    const endIndex = startIndex + commentsPerPage;
    const commentsToRender = comments.slice(startIndex, endIndex);

    return commentsToRender.map((comment) => (
      <div key={comment.id} className="comment-section-comment">
        <p>
          <strong>Anonymous User :</strong> {comment.text}
        </p>
        <p>
          <small>{new Date(comment.timestamp).toLocaleString()}</small>
        </p>

        <div className="comment-section-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`star ${comment.rating > i ? 'filled' : ''}`}
              onClick={() => setCommentRating(comment.id, i + 1)}
            >
              ★
            </span>
          ))}
        </div>
          
        <div className="comment-section-actions">
          <button
            className="comment-section-button"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </button>
          <button
            className="comment-section-button"
            onClick={() => setReplyingTo(comment.id)}
          >
            Reply
          </button>
          <button
            className="comment-section-button"
            onClick={() => {
              setEditingComment(comment.id);
              setInputValue(comment.text);
            }}
          >
            Edit
          </button>
        </div>

        <div className="comment-section-replies">
          {renderReplies(comment.replies, comment.id)}
        </div>
      </div>
    ));
  };

  // Handle pagination button click
  const handlePageChange = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
    
      <div className="comment-section-container">
        <h2 className="comment-section-title">Feedbacks</h2>
        <textarea
          className="comment-section-textarea"
          placeholder={
            editingComment
              ? 'Editing comment...'
              : replyingTo
              ? 'Replying...'
              : 'Add a comment'
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              addComment();
            }
          }}
        ></textarea>
      </div>

      <div className="comment-section-comments">
        {comments.length > 0 ? renderComments() : <p>No comments available</p>}
      </div>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className = "currentPageNum">Page {currentPage}</span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange('next')}
          disabled={comments.length <= currentPage * commentsPerPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CommentSection;
