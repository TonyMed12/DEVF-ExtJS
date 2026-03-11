const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const list = document.getElementById("commentList");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const text = input.value;

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const date = new Date().toLocaleString();

    commentDiv.innerHTML = `
        <p>${text}</p>
        <span class="date">${date}</span>
        <br>
        <button class="delete">Eliminar</button>
    `;

    const deleteBtn = commentDiv.querySelector(".delete");

    deleteBtn.addEventListener("click", function(){
        commentDiv.remove();
    });

    list.appendChild(commentDiv);

    input.value = "";
});