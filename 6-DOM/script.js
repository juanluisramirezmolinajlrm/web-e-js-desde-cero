document.getElementById("addComment").addEventListener("click", function() {
    const commentBox = document.getElementById("comment");
    const commentText = commentBox.value.trim();
    
    if (commentText !== "") {
        const commentsContainer = document.getElementById("comments");
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        
        const timestamp = new Date().toLocaleString();
        commentElement.innerHTML = `<p>${commentText}</p><small>${timestamp}</small>`;
        
        commentsContainer.appendChild(commentElement);
        commentBox.value = "";
    }
});