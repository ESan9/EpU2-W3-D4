// RIFERIMENTI NECESSARI

const button = document.getElementById("btnLoad");
const images = document.getElementsByClassName("bd-placeholder-img");
const button1 = document.getElementById("btnLoad2");
const button2 = document.getElementsByClassName("hide");
const cards = document.getElementsByClassName("card");

// EVENT LISTENER

// Uso sempre il metodo Array perché si tratta di collezioni di elementi

button.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    headers: {
      Authorization: "g4814mGADrvd5BcbkvnrE8llkbM6PNbWPXGAaxF13c4stE0XmagpA5Ea",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Array.from(images).forEach((img, index) => {
        if (data.photos[index]) {
          img.src = data.photos[index].src.medium;
          img.alt = data.photos[index].photographer;
        }
      });
    })
    .catch((error) => {
      console.error("Errore nel caricamento:", error);
    });
  Array.from(button2).forEach((btn) => {
    btn.innerText = "Hide";
  });
});

button1.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
    headers: {
      Authorization: "g4814mGADrvd5BcbkvnrE8llkbM6PNbWPXGAaxF13c4stE0XmagpA5Ea",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Array.from(images).forEach((img, index) => {
        if (data.photos[index]) {
          img.src = data.photos[index].src.medium;
          img.alt = data.photos[index].photographer;
        }
      });
    })
    .catch((error) => {
      console.error("Errore nel caricamento:", error);
    });
});

Array.from(button2).forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = cards[index];
    const currentlyHidden = card.style.display === "none";
    card.style.display = currentlyHidden ? "block" : "none";
  });
});
