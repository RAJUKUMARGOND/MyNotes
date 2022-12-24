// console.log("this is MyNotes Js");
ShowNotes();
let AddBtn = document.getElementById("AddBtn");
AddBtn.addEventListener("click", function (e) {

let AddText = document.getElementById("AddText");
let AddTitle =document.getElementById("AddTitle");
    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }

    let TextObj = {
        title:AddTitle.value,
        text:AddText.value
    }

    NotesObj.push(TextObj);
    localStorage.setItem("Notes", JSON.stringify(NotesObj));

    AddText.value = "";
    AddTitle.value="";
    console.log(NotesObj);
    ShowNotes();

});

// FUNCTION TO SHOW ELEMENTS FROM LOCAL STORAGE

function ShowNotes() {
    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }

    let html = "";
    NotesObj.forEach(function (element, index) {

        html += `  
         <div class="notecard  my-2 mx-2 " style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title"> ${element.title}</h5>
   <p class="card-text"> ${element.text}}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div> `;

    });

    let notesElm = document.getElementById("Notes");
    if (NotesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = "Nothing to show! Add your note first";
    }



}
// function to delete a note

function deleteNote(index) {
    // console.log("I am deleting",index)

    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }
    NotesObj.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(NotesObj));
    ShowNotes();
}

// search feature

let search = document.getElementById('searchTxt')
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();

    // console.log("input Event fired",inputVal);
    let Notecards = document.getElementsByClassName('notecard');
    Array.from(Notecards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }



    })


})