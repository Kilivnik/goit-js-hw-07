import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
galleryContainerEl.insertAdjacentHTML(
  "beforeend",
  galleryItemsEl(galleryItems)
);
function galleryItemsEl(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
