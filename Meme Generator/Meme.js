document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#fForm");
    const imgInput = document.querySelector("#imgLink");
    const resultSection = document.getElementById("resultsection");
	let topText1 = document.querySelector("#topText");
	let btmText1 = document.querySelector("#btmText");

 function makeMeme() {
	const newImg = document.createElement("img");
	newImg.classList.add("thumbsy");
	newImg.setAttribute('src', imgInput.value);
	return(newImg);
	
  }


 form.addEventListener("submit", function(event) {
	event.preventDefault();
	const logo = makeMeme(imgInput.value);

	let removeButton = document.createElement("button");
	removeButton.innerText = "deleteMe";
	removeButton.classList.add("eraseMe");
	
	let topTextDiv = document.createElement("div");
	let btmTextDiv = document.createElement("div");
	topTextDiv.classList.add("topTextCss");
	btmTextDiv.classList.add("btmTextCss");
	topTextDiv.append(topText1.value);
	btmTextDiv.append(btmText1.value);

	

	
	let textDiv = document.createElement("div");
	textDiv.classList.add("textDivCss");
	textDiv.append(topTextDiv, btmTextDiv, logo);

	
	removeButton.append(textDiv);
	resultSection.appendChild(removeButton);
	
form.reset();

  
  });

 resultSection.addEventListener("click", function(e) {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();
     if (targetTagToLowerCase === "button") {
      e.target.remove();
    }
  });
});


 
















