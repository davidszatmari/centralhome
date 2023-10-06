
function handleLinkClick(event) {
    event.preventDefault(); 
  

    const href = event.currentTarget.getAttribute("href");
  

    window.location.href = href;
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[onclick]");
    links.forEach(function (link) {
      link.addEventListener("click", handleLinkClick);
    });
  });
  