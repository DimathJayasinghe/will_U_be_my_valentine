      const yes_button = document.getElementById("yes_button");
      const no_button = document.getElementById("no_button");
      const heading = document.getElementById("heading");
      const image = document.getElementById("image");
      const phrases = [
        "Pretty please?",
        "sunshine!",
        "cutey wooty!",
        "Sweet pea!",
        "Snuggle bug!",
        "Pookiy pookiy!",
        "Dream date!",
        "Cutie pie!",
        "Love bug!",
        "Snuggle buddy?",
        "Heart stealer!",
        "Honey bunny!",
        "Sugar pie!",
        "Lovey dovey!",
        "Sweet cheeks!",
        "Heartthrob!",
        "Love muffin!",
        "Sweetheart!",
        "Cuddle time?",
        "Pinky promise?",
        "Pretty pwease with sugar on top?",
        "Wanna share my cookies?",
        "Besties forever plus more?",
        "I saved you the last piece of candy!",
        "No takesy-backsies!",
        "I drew you a heart!",
        "Wanna build a pillow fort together?",
        "Can I boop your nose?",
        "I picked flowers just for you!",
        "Wanna watch cartoons together?",
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
      const bubu_sad_images = [
        "https://media.tenor.com/lSgJHaor3IAAAAAi/bubu-onetwo.gif",
        "https://media.tenor.com/mxFUB2neXSQAAAAj/rabbits.gif",
        "https://media.tenor.com/qqRoBpnjOrIAAAAj/tkthao219-bubududu.gif",
      ]

      const bubu_happy_images = [
        "https://media.tenor.com/sOL-MDhw8W8AAAAj/happy-dance-cute.gif",
        "https://media.tenor.com/tnkZrHghTNEAAAAj/bubu-dudu-sseeyall.gif",
        "https://media.tenor.com/jq-K8XaaWb4AAAAj/peach-goma.gif"
      ]

      yes_button.addEventListener("click", () => {
        yes_button.removeEventListener("mouseover", randomHappyImage);
        yes_button.removeEventListener("mouseout", randomSadImage);
        heading.textContent ="Yay! I knew you would say yes!";
        heading.style.fontSize = "40px";
        image.src = "https://media.tenor.com/D1CAg1rBD6wAAAAi/tkthao219-bubududu.gif";
        yes_button.style.display = "none";
        no_button.style.display = "none";
      });

      function randomHappyImage() {
        image.src = bubu_happy_images[Math.floor(Math.random() * bubu_happy_images.length)];
      }
      function randomSadImage() {
        image.src = bubu_sad_images[Math.floor(Math.random() * bubu_sad_images.length)];
      }

      yes_button.addEventListener("mouseover", randomHappyImage);
      yes_button.addEventListener("mouseout", randomSadImage);

      no_button.addEventListener("click", () => {
        image.src = bubu_sad_images[Math.floor(Math.random() * bubu_sad_images.length)];
        heading.textContent = "Bubu is sad now!";
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