const images = ["assets/fibonacci1.png", "assets/factorial.png", "assets/prime.png"];
let currentIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const updateButtons = () => {
  prevButton.disabled = currentIndex === 0;
};

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryImage.src = images[currentIndex];
    updateButtons();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    galleryImage.src = images[currentIndex];
    updateButtons();
  }
});

updateButtons();


// window.addEventListener("DOMContentLoaded", () => {
//     const imageElement = document.getElementById("gallery-image");
//     const smallTag = document.querySelector("small");
  
//     // Function to extract the file name without extension
//     const getFileNameWithoutExtension = (filePath) => {
//       const fileName = filePath.split('/').pop(); // Get the file name from path
//       return fileName.split('.')[0]; // Remove the extension
//     };
  
//     // Set the file name to the small tag
//     const fileName = getFileNameWithoutExtension(imageElement.src);
//     smallTag.innerHTML = `<strong>${fileName}</strong>`;
//   });
  



// const practiceFiles = document.getElementById("practice-files");
// const loadButton = document.getElementById("load-file");

// loadButton.addEventListener("click", () => {
//   const selectedFile = practiceFiles.value;
//   if (selectedFile) {
//     // Remove any previously loaded script
//     const existingScript = document.getElementById("practice-script");
//     if (existingScript) {
//       existingScript.remove();
//     }

//     // Create and append the new script
//     const script = document.createElement("script");
//     script.id = "practice-script";
//     script.src = `practice/${selectedFile}`;
//     document.body.appendChild(script);
//   } else {
//     alert("Please select a file to run.");
//   }
// });




