
// Function to update the preview when the user types in the textarea
let text = document.getElementById("textArea");
text.addEventListener("input", () => {
  document.getElementById("content").innerHTML = marked.parse(text.value);
});

// Function to download the README.md file
document
  .getElementById("downloadButton")
  .addEventListener("click", () => {
    const markdownContent = text.value;
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "README.md";
    link.click();
  });
