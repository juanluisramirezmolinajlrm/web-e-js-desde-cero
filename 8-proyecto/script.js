document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
  
    if (commentText === '') return;
  
    const commentSection = document.getElementById('comments-section');
  
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
  
    const timestamp = new Date().toLocaleString();
  
    commentDiv.innerHTML = `
      <p>${commentText}</p>
      <small>Posted on: ${timestamp}</small>
      <button onclick="this.parentElement.remove()">Delete</button>
    `;
  
    commentSection.appendChild(commentDiv);
  
    commentInput.value = '';
  });
  
  