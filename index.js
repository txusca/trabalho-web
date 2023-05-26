const dogImageDiv = document.querySelector(".dog-image");
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    if (data && data.status === "success") {
      dogImageDiv.src = `${data.message}`;
    } else {
      console.log("Não foi possível obter a imagem do cachorro.");
    }
  })
  .catch((error) => {
    console.log("Ocorreu um erro:", error);
  });
