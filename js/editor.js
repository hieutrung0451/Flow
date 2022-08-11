// Open File
document.querySelector(".fileLoader").onchange = function () {
    let file = document.querySelector(".fileLoader").files[0];
    let fileReader = new FileReader();

    fileReader.onload = function (e) {
        let text = e.target.result;
        document.querySelector(".myText").value = text;
    }

    fileReader.readAsText(file, "UTF-8");
};

// Save file
function saveFile() {
    let saveText = document.querySelector(".myText").value;
    let textBLOB = new Blob([saveText], {type: "text/plain"});
    let fileName = prompt("Nhập tên file: ");
    
    let link = document.createElement("a");
    link.download = fileName;
    link.innerHTML = "Tải file";

    if (window.URL != null) {
        link.href = window.URL.createObjectURL(textBLOB);
    } else {
        link.href = window.URL.createObjectURL(textBLOB);
        link.onclick = destroy;
        link.style.display = "none";
        document.body.appendChild(link);
    }

    link.click();
}

function destroy(e) {
    document.body.removeChild(e.target);
}

function display() {
    let editor = document.querySelector(".editor-icon");
    let textEditor = document.querySelector(".text-editor");

    let display = textEditor.style.display = "none";

    editor.addEventListener("click", function () {
        if (display == "none") {
            editor.style.color = "#498374";
            display = textEditor.style.display = "block";
        } else {
            editor.style.color = "#000";
            display = textEditor.style.display = "none";
        }
    });

};

display();