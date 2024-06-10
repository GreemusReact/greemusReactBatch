document.getElementById("toggleButton").addEventListener("click", function () {
  var contentParagraph = document.getElementById("contentParagraph");
  if (contentParagraph.style.display === "none") {
    contentParagraph.style.display = "block";
  } else {
    contentParagraph.style.display = "none";
  }
});
