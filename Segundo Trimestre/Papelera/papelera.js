document.querySelector('.trash').addEventListener('click', function() {
    this.style.display = 'none';   
    setTimeout(()=>alert("Papelera vacia"), 1);
  });