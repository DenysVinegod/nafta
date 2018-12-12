window.onload = function() {

  const db = JSON.parse(localStorage.getItem('db')  || "[]");
  const updateDB = () => localStorage.setItem('db', JSON.stringify(db));

  const clearAllFields = () => {
    document.getElementById('nameInput').value = '';
    document.getElementById('descInput').value = '';
    document.getElementById('linkInput').value = '';
  }

  const createChildValuesNode = (htmlId, htmlName, htmlDesc, htmlLink) => `
    <div id="${htmlId}" class="bookmark">
        <div id="number">${htmlId}</div>
        <div id="name">${htmlName}</div>
        <div id="desc">${htmlDesc}</div>
        <div id="link">
          <a href="${htmlLink}"><button>Open site</button></a>
        </div>
      </div>
  `;

  const renderDB = () => {
    let childElement = '';
    db.forEach((value) => {
      childElement += createChildValuesNode(value.id, value.name, value.description, value.link);
      document.getElementById('root').innerHTML = childElement;
    });
  }

  renderDB();


  const createNewNode = (name, description, link) => {
    db.push({
      id: db.length,
      name,
      description,
      link,
    });
    updateDB();
    renderDB();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const link = document.getElementById('descInput').value;
    const description = document.getElementById('linkInput').value;

    const isValid = name.trim() && link.trim() && description.trim();

    if (isValid) {
      createNewNode(name, link, description);
      clearAllFields()
    }
  };

  const submit = document.getElementById("sendData");
  submit.addEventListener('click', onSubmit);


  const init = () => db.forEach((value) => {
    renderDB();
  });

  init();

}