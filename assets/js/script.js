// Function to filter gallery based on title
function searchProjects() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const projects = document.querySelectorAll(".card");

  // Filter all projects by title
  projects.forEach(project => {
    const titleElement = project.querySelector("h1");
    const title = titleElement ? titleElement.textContent.toLowerCase() : ""; 

    // Show or hide project based on title match
    if (title.length > 0) {
        if (title.includes(searchQuery)) {
        project.style.display = "flex";
        } else {
        project.style.display = "none";
        }
    }
  });
}

// Function to filter gallery based on tags
function filterByTags() {
  const tagSearchQuery = document.getElementById("tagSearchBar").value.toLowerCase();
  const projects = document.querySelectorAll(".card");

  // Filter all projects by tag
  projects.forEach(project => {
    const tags = project.querySelectorAll(".tags .tag");
    let matchFound = false;
    tags.forEach(tag => {
      if (tag.textContent.toLowerCase().includes(tagSearchQuery)) {
        matchFound = true;
      }
    });

    // Show or hide project based on tag match
    if (matchFound) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}