const newRepository = new Repository();

function activityToHTML(Activity){
   const {id, title, description, imgUrl} = Activity;
   const elementoDiv = document.createElement("div");
   const elementoTitle = document.createElement("h3");
   const elementoDescription = document.createElement("p");
   const elementoImgUrl = document.createElement("img");
   const deleteButton = document.createElement("button");

   elementoDiv.appendChild(elementoTitle);
   elementoDiv.appendChild(elementoDescription);
   elementoDiv.appendChild(elementoImgUrl);
   elementoDiv.appendChild(deleteButton);

   elementoTitle.innerHTML = title;
   elementoDescription.innerHTML = description;
   elementoImgUrl.src = imgUrl;
   deleteButton.textContent = "Borrar";

   elementoDiv.classList.add("card");
   elementoTitle.classList.add("title");
   elementoDescription.classList.add("description");
   elementoImgUrl.classList.add("imgUrl");
   deleteButton.classList.add("deleteButton");

   deleteButton.addEventListener("click", function(){
    elementoDiv.remove();
    newRepository.deleteActivityById(id);
   });

   return elementoDiv;
}

function instActivityToElementHTML(){
    const contenedor = document.getElementById("contenedorDeProyectos");
    contenedor.innerHTML= "";
    const activityList = newRepository.getAllActivities();
    const elementosHTML = activityList.map(activityToHTML);
    elementosHTML.forEach(elemento => {
        contenedor.appendChild(elemento)       
    });
}

function handler(event){

    event.preventDefault();

    inputTitle = document.getElementById("title").value;
    inputDescription = document.getElementById("description").value;
    inputUrlImg = document.getElementById("urlImg").value;

    if(!inputTitle || !inputDescription || !inputUrlImg){
        alert("Debe completar todos los campos");
        return;
    }

    newRepository.createActivity(inputTitle, inputDescription,inputUrlImg);

    instActivityToElementHTML();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("urlImg").value = "";
}

document.getElementById("agregar").addEventListener("click", handler);