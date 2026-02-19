function setCityImage(urlImage, altImage, cityImage) {
  const img = document.createElement("img");
  img.src = urlImage;
  img.alt = altImage;
  cityImage.replaceChildren(img);
}