      const yes_button = document.getElementById("yes_button");
      const no_button = document.getElementById("no_button");
      const heading = document.getElementById("heading");
      const image = document.getElementById("image");
      const phrases = [
        "Pretty please?",
        "Be my sunshine!",
        "You're the one for me!",
        "My heart beats for you!",
        "Let's be cute together!",
        "Pookiy pookiy!",
        "Be mine?",
        "Dream date!",
        "Cutie pie!",
        "Sweet like honey!",
        "Heart eyes for you!",
        "My valentine forever!",
        "Butterflies in my tummy!",
        "Totally smitten!",
        "Love bug!",
        "Snuggle buddy?",
        "Heart stealer!",
        "Honey bunny!",
        "Sugar pie!",
        "Lovey dovey!",
        "Sweet cheeks!",
        "Heartthrob!",
        "Love muffin!",
        "You're magical!",
        "My everything!",
        "Love of my life!",
        "Sweetheart!",
        "Cuddle time?",
        "Pinky promise?",
        "Pretty pwease with sugar on top?",
        "Wanna share my cookies?",
        "Besties forever plus more?",
        "I saved you the last piece of candy!",
        "No takesy-backsies!",
        "You're the cheese to my macaroni!",
        "Will you hold my hand?",
        "I drew you a heart!",
        "Wanna build a pillow fort together?",
        "You're my favorite human!",
        "Can I boop your nose?",
        "Let's play together forever!",
        "I picked flowers just for you!",
        "You make my heart go zoom!",
        "Wanna trade friendship bracelets?",
        "You're the sprinkles on my ice cream!",
        "Can we be valentines? Circle yes or no!",
        "I saved you a seat next to me!",
        "Want to share my juice box?",
        "I like you a whole bunch!",
        "Wanna watch cartoons together?",
        "You're super duper cute!",
        "I wrote your name in my notebook!",
        "You're my favorite playmate!",
        "Can I have a hug?",
        "Will you be in my club?",
        "You're the star on my sticker chart!",
        "We can share my teddy bear!",
        "I'll give you half of my sandwich!",
        "You're my BFF plus infinity!",
        "I'll push you on the swings!",
        "Do you like me? Check yes or no!",
        "You make my heart do cartwheels!",
        "Wanna play tag? You're it!",
        "I saved you the sparkly crayon!",
        "Can we take silly pictures together?",
        "You're the yummy in my tummy!",
        "Let's have a playdate forever!"
      ];

      yes_button.addEventListener("click", () => {
        heading.textContent ="Yay! I knew you would say yes!";
        heading.style.fontSize = "40px";
        image.src = "https://media.tenor.com/UXLmgQdkDesAAAA1/robert-bri.webp";
        yes_button.style.display = "none";
        no_button.style.display = "none";
      });

      no_button.addEventListener("click", () => {
        image.src = "https://media1.tenor.com/m/DJc-cO3uGCEAAAAd/bubu-yier.gif";
        heading.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        heading.style.fontSize = "30px";
        heading.style.color = "red";

        const computedStyle = window.getComputedStyle(yes_button);
        const currentWidth = parseInt(computedStyle.width);
        const currentHeight = parseInt(computedStyle.height);
        const currentFontSize = parseInt(computedStyle.fontSize);

        var newWidth = currentWidth + 50;
        var newHeight = currentHeight + 50;

        yes_button.style.left = yes_button.offsetLeft + 50 + "px";
        yes_button.style.top = yes_button.offsetTop - 40 + "px";
        yes_button.style.width = newWidth + "px";
        yes_button.style.height = newHeight + "px";
        yes_button.style.fontSize = currentFontSize + 20 + "px";
      });