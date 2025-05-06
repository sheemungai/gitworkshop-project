console.log("Hello, World!");
console.log("This is a test for branching!");

// Menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("#navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !navbar.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      navbar.classList.contains("active")
    ) {
      navbar.classList.remove("active");
    }
  });

  // Console logs for testing
  console.log("Library website loaded successfully!");

  // Book hover effect enhancement
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.addEventListener("mouseenter", () => {
      book.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
    });

    book.addEventListener("mouseleave", () => {
      book.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
  });
});

// Sample search functionality (to be expanded)
function searchBooks(query) {
  console.log(`Searching for: ${query}`);
  // This would eventually connect to a backend service
  return `Found results for: ${query}`;
}
