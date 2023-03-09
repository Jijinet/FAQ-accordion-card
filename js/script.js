const subtitleContent = document.querySelectorAll(".hidden-content");
const subtitleContainer = document.querySelectorAll(".subtitle-container");
const subtitleText = document.querySelectorAll(".subtitle li");
const subtitleImg = document.querySelectorAll(".subtitle img");

subtitleContainer.forEach((listItem) => {
  listItem.addEventListener("click", function (e) {
    if (listItem.classList.contains("active")) {
      listItem.classList.remove("active");
    } else {
      const activeItems = document.querySelectorAll(".active");
      activeItems.forEach((activeItem) => {
        activeItem.classList.remove("active");
      });

      listItem.classList.add("active");
    }
  });
});

