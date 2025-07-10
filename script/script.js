const button = document.getElementById("btnLoad");
const images = document.getElementsByClassName("bd-placeholder-img");
const button1 = document.getElementById("btnLoad2");

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
