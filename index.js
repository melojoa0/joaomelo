 
const cursor = document.getElementById("custom-cursor");

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Add hover effect on all links
const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("big");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("big");
  });
});

  


const previewImage = document.getElementById("preview-image");
  const projectItems = document.querySelectorAll(".project-list p");

  projectItems.forEach(item => {
    const imgArray = JSON.parse(item.getAttribute("data-imgs"));
    const imgSrc = imgArray[0];

    item.addEventListener("mouseenter", () => {
      previewImage.src = imgSrc;
    });
  });
