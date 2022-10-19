let Terminal = document.getElementById("Terminal");
let PreviousLines = document.getElementById("PreviousLines");
let typeWriterSpeed = 500;




//setTimeout(addLine("Hello!!!How are you, Im very well thank you im just entring some Lorem Txt Lmao"),typeWriterSpeed);

//addLine("Hello!!!How are you, Im very well thank you im just entring some Lorem Txt Lmao");
//Terminal.innerHTML = Terminal.innerHTML+ "<p>Hello From JS</p>";

function addLine(text,Time){
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(() => {
    let next = document.createElement("p");
    next.innerHTML = t;
    //next.className = style;

    //document.getElementById('CurrentLine')
    PreviousLines.appendChild(next);
    window.scrollTo(0, document.body.offsetHeight);
  }, Time);

  

}

function loopLines(name) {
  name.forEach(function(item, index) {
    addLine(item,typeWriterSpeed * index);
  });
}

let header = [
  "C:\\Users\\Michael\\Website>Web.exe",
  //"<p class=\"AltText\"> > Michael@Clayson.Tech",
  "##     ## ####  ######  ##     ##    ###    ######## ##        #######   ######  ##          ###    ##    ##  ######   #######  ##    ##     ######## ########  ######  ##     ##",
  "###   ###  ##  ##    ## ##     ##   ## ##   ##       ##       ##     ## ##    ## ##         ## ##    ##  ##  ##    ## ##     ## ###   ##        ##    ##       ##    ## ##     ##",
  "#### ####  ##  ##       ##     ##  ##   ##  ##       ##       ## ### ## ##       ##        ##   ##    ####   ##       ##     ## ####  ##        ##    ##       ##       ##     ##",
  "## ### ##  ##  ##       ######### ##     ## ######   ##       ## ### ## ##       ##       ##     ##    ##     ######  ##     ## ## ## ##        ##    ######   ##       #########",
  "##     ##  ##  ##       ##     ## ######### ##       ##       ## #####  ##       ##       #########    ##          ## ##     ## ##  ####        ##    ##       ##       ##     ##",
  "##     ##  ##  ##    ## ##     ## ##     ## ##       ##       ##        ##    ## ##       ##     ##    ##    ##    ## ##     ## ##   ### ###    ##    ##       ##    ## ##     ##",
  "##     ## ####  ######  ##     ## ##     ## ######## ########  #######   ######  ######## ##     ##    ##     ######   #######  ##    ## ###    ##    ########  ######  ##     ##",
  //"Type 'Help' For a list of valid commands.",
  "C:\\Users\\Michael\\Website>",
  " ",
  "Languages",
  " > C#           [##############     ]",
  " > SQL          [###################]",
  " > JavaScript   [######             ]",
  " > Powershell   [#############      ]",
  " > Python       [######             ]",
  " ",
  "Contact",
  " > Michael@Clayson.Tech",
  " > <a href=\"https://www.linkedin.com/in/mwclayson/\">LinkedIn</a>",
  " > <a href=\"https://twitter.com/CIayson\">Twitter</a>",
  " > <a href=\"https://github.com/MWClayson\">GitHub</a>",
  " > <a href=\"https://www.codewars.com/users/Micy\">CodeWars</a>"
];

loopLines(header);

