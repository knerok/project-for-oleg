  export const renderNewRssFlow = ({ rssFlows }) => {
    const table = document.getElementById('table');
    let s = '<tr><th>№</th><th>Title</th><th>Description</th></tr>';
    const newRssList = rssFlows.reduce((acc, el, i) => acc + `<tr><td>${i+1}</td><td>${el.title}</td><td>${el.description}</td></tr>`, s);
    table.innerHTML = newRssList;
  };

  export const renderNewArticles = ({ articles }) => {
    const ul = document.getElementById('list');
    const newTable = articles.reduce((acc, el, i) => acc +
      `<li class="list-group-item list-group-item-success">
         <div class="row">
           <div class="col">
             <a href="${el.link}">${el.title}</a>
           </div>
         <div>
           <div class="col">
             <button type="button" class="btn btn-primary btn-info btn-sm" data-toggle="modal" data-target="#exampleModal${i}">
               Описание статьи
             </button>
             <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="${i}Label" aria-hidden="true">
               <div class="modal-dialog" role="document">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title" id="${i}Label">${el.title}</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="modal-body">
                     ${el.description}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </li>`, '');
    ul.innerHTML = newTable;
  };

  export const renderForm = ({ formStatus }) => {
    const inputRssForm = document.getElementById('form');
    const inputRssElement = document.getElementById('inputRssFlow');
    const submitBotton = document.getElementById('submitBotton');
    const notificationSection = document.querySelector('.notification');
    switch (formStatus) {
      case ('invalid'): {
        notificationSection.innerHTML = '';
        inputRssElement.classList.remove('is-valid');
        inputRssElement.classList.add('is-invalid');
        submitBotton.disabled = true;
        break;
      }
      case ('valid'): {
        notificationSection.innerHTML = '';
        inputRssElement.classList.remove('is-invalid');
        inputRssElement.classList.add('is-valid');
        submitBotton.disabled = false;
        break;
      }
      case ('loading'): {
        submitBotton.disabled = true;
        submitBotton.textContent = 'Загрузка...';
        break;
      }
      case ('loaded'): {
        inputRssForm.reset();
        submitBotton.disabled = false;
        submitBotton.textContent = 'Добавить RSS';
        break;
      }
      case ('error'): {
        submitBotton.disabled = true;
        submitBotton.textContent = 'Добавить RSS';
        inputRssElement.classList.remove('is-valid');
        inputRssElement.classList.add('is-invalid');
        notificationSection.innerHTML = `<div class="alert alert-warning alert-dismissible fade show my-0" role="alert">
          <strong>Error!</strong> Wrong URL.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span></button></div>`;
        break;
      }
    }
  }
