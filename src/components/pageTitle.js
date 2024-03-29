function pageTitle(title){
    const pageTitle = document.createElement('h2');
  pageTitle.classList.add('pageTitle');
  pageTitle.textContent = title;

  return pageTitle;
}

export default pageTitle;