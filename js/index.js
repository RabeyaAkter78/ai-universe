const loadToolsDetails=description=>{
   const title= document.getElementById('toolDetailsModalLabel');
  const body=  document.getElementById('modal-body');

  title.innerText=description ?description:'not found';
  body.innerHTML=`
  <h1>${tool.published_in}</h1>
  `


}
const loadData = () => {
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => displayData(data.data.tools));

};

const containerDiv = document.getElementById('ais-container');
const displayData = (tools) => {
    // console.log(tools);

//   section display 06 tools only start:
  const seeMore = document.getElementById('see-More');
  if (tools.length>6) {
      tools = tools.slice(0,6);
      seeMore.classList.remove('d-none');
  }
  else {
      seeMore.classList.add('d-none');
  }
//  section display 06 tools only end:

    // display All data:
    tools.forEach(tool => {
        console.log(tool);

        const aisDiv = document.createElement('div');
        aisDiv.classList.add('col');

        aisDiv.innerHTML = `
                    <div class="card h-100">
                                <img src=${tool.image
            } class="card-img-top" alt="...">
                    <div class="card-body">
                                <h5 class="card-title">${'features'}</h5>
                                <div>
                                        <ol>
                                            <li>${tool.features[0]}</li>
                                            <li>${tool.features[1]}</li>
                                            <li>${tool.features[2]}</li>
                                        </ol>

                                </div>
                    </div>
                    <div class="card-footer d-flex gap-5">
                               <div>
                               <h5 class="card-title">${tool.name}</h5>
                               <small class="text-muted"><i class="fa-solid fa-calendar-days"></i>  ${tool.published_in}</small>
                               </div>
                              

                                <div class="justify-content-end align-self-end">
                               <button onclick="loadToolsDetails('${tool.description}')" href="#" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal"></button>
                               </div>

                               
                    </div>
                    </div>
 `;
        containerDiv.appendChild(aisDiv);
    });
// modal body start:
// const modalDiv=document.createElement('div');
// modalDiv.classList.add('modal-header');
// modalDiv.innerHTML=`
//                             <h1 class="modal-title fs-5" id="toolDetailsModalLabel">modal title</h1>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// `;

// containerDiv.appendChild(modalDiv)

// modal body end








//     toggleSpinner(false);

// // stop spinner:
// document.getElementById('see-More').addEventListener('click',function(){
// toggleSpinner(true);

// })

//  const toggleSpinner=isLoading=>{
// const spinnerSection=document.getElementById('spinner');
// if(isLoading){
// spinnerSection.classList.remove('d-none');
// }
// else{
//     spinnerSection.classList.add('d-none');
// }

//  }





}

// const seeMoreButton=(item)=>{
//     toggleSpinner(true);
//     const seeMore=document.getElementById('see-More');
// }



// handle see more button:
// document.getElementById('see-More').addEventListener('click',function(){
// seeMoreButton(6);

// })




loadData();
