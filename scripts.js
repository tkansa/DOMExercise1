 function main() {

    // ● Add the "big" class to the "grow-me" paragraph.
    const growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    // ● Remove the "big" class to the "shrink-me" paragraph.
    const shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    // ● Find all the <li>s and log their text content to the console.
    const itemsToLog = document.querySelectorAll("li");
    for(let item of itemsToLog){
        console.log(item.innerHTML);
    }

    // ● Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
    const linkEl = document.querySelector(".link");
    linkEl.text = "somewhere";

    // ● Set the "display" CSS property of the "hide-me" paragraph to "none".
    const hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

    // ● Set the "display" CSS property of the "show-me" paragraph to "block".
    const showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    // ● Get the text that the user enters into the "name" input box 
    const name = document.getElementById("name").value;
    
    // and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
    const welcome = document.querySelector("h1");
    welcome.innerText = "Welcome " + name + " !"
    
}