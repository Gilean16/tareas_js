function addComment() {
    let commentText = document.getElementById("commentInput").value;
    if (commentText.trim() === "") return;
    
    let commentSection = document.getElementById("commentSection");
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    let timeStamp = new Date().toLocaleString();
    commentDiv.innerHTML = `<p>${commentText}</p><small>${timeStamp}</small>`;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() { commentSection.removeChild(commentDiv); };
    
    commentDiv.appendChild(deleteBtn);
    commentSection.prepend(commentDiv);
    
    document.getElementById("commentInput").value = "";
}