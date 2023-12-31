const containerDiv = document.getElementById('ais-container');

const seeMore = document.getElementById('see-More');

const loader = document.getElementById('spinner');
const modalDialog = document.getElementsByClassName('modal-dialog')[0];

const btnSort = document.getElementById('sorting');
// console.log(modalDialog[0])

// console.log(loader)
let allData = [];
const loadData = () => {
    loadingSpinner(true)
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            displayData(data.data.tools)
            allData.push(data.data.tools)
            loadingSpinner(false);
        });

};

seeMore.addEventListener('click', () => {
    // loadingSpinner(true)
    allDataFunction(allData)
    // console.log('clicked');

    // loadingSpinner(false)
});
const allDataFunction = datas => {
    displayAllData(datas[0]);
}

const loadingSpinner = (isLoading) => {

    if (isLoading) {
        // console.log(isLoading);
        loader.classList.remove('d-none')
    }
    else {
        // console.log(isLoading);
        loader.classList.add('d-none')

    }
}

const displayAllData = (tools) => {
    containerDiv.textContent = '';
    // loadingSpinner(true)
    // console.log(tools);

    // display All data:
    tools.forEach(tool => {
        console.log(tool);

        const toolsDiv = document.createElement('div');
        toolsDiv.classList.add('col');

        toolsDiv.innerHTML = `
                    <div class="card h-100">
                                <img src=${tool.image} class="card-img-top" alt="...">
                    <div class="card-body">
                                <h5 class="card-title">${'features'}</h5>
                                <div>
                                        <ol>
                                                <li>${tool.features[0] ? tool.features[0] : "No Data Found"}</li>
                                                <li>${tool.features[1] ? tool.features[0] : "No Data Found"}</li>
                                                <li>${tool.features[2] ? tool.features[0] : "No Data Found"}</li>
                                        </ol>

                                </div>
                    </div>
                    <div class="card-footer d-flex gap-5">
                               <div>
                               <h5 class="card-title">${tool.name}</h5>
                               <small class="text-muted"><i class="fa-solid fa-calendar-days"></i>  ${tool.published_in}</small>
                               </div>
                              

                                <div class="justify-content-end align-self-end">
                               <button onclick="loadToolsDetails('${tool.id}')" href="#" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal"></button>
                               </div>

                               
                    </div>
                    </div>
 `;
        containerDiv.appendChild(toolsDiv);
    });
    // loadingSpinner(false)
}



const displayData = (tools) => {
    // console.log(tools);
    //   section display 06 tools only start:
    const seeMore = document.getElementById('see-More');
    if (tools.length > 6) {
        tools = tools.slice(0, 6);
        seeMore.classList.remove('d-none');
    }
    else {
        seeMore.classList.add('d-none');
    }
    // display All data:
    tools.forEach(tool => {
        // console.log(tool);

        const aisDiv = document.createElement('div');
        aisDiv.classList.add('col');

        aisDiv.innerHTML = `
                    <div class="card h-100">
                                <img src=${tool.image} class="card-img-top" alt="...">
                    <div class="card-body">
                                <h5 class="card-title">${'features'}</h5>
                                <div>
                                        <ol>
                                        <li>${tool.features[0] ? tool.features[0] : "No Data Found"}</li>
                                        <li>${tool.features[1] ? tool.features[0] : "No Data Found"}</li>
                                        <li>${tool.features[2] ? tool.features[0] : "No Data Found"}</li>
                                        </ol>

                                </div>
                    </div>
                    <div class="card-footer d-flex gap-5">
                               <div>
                               <h5 class="card-title">${tool.name}</h5>
                               <small class="text-muted"><i class="fa-solid fa-calendar-days"></i>${tool.published_in}</small>
                               </div>
                              

                                <div class="justify-content-end align-self-end">
                               <button onclick="loadToolsDetails('${tool.id}')" href="#" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal"></button>
                               </div>

                               
                    </div>
                    </div>
 `;
        containerDiv.appendChild(aisDiv);
    });

}

const loadToolsDetails = async id => {
    const URL = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(URL)
    const data = await res.json()
    showModalDetails(data.data);

}
const showModalDetails = (data) => {
    console.log(data)
    modalDialog.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="modal-content ">
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">X</button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
            <h1>${data.description}</h1>
            <div class="d-flex justify-content-between">
                    <div class="text-success">
                   ${data.pricing ? ` <p>${data.pricing[0].price}</p>
                   <p>${data.pricing[0].plan}</p></>` : "Data Not Found"}
                    </div>
                    <div class="text-warning"  >
                    ${data.pricing ? `<p>${data.pricing[1].price}</p>
                    <p>${data.pricing[1].plan}</p></>` : "Data Not Found"}
                    </div>
                    <div class="text-danger">
                    ${data.pricing ? `<p>${data.pricing[2].price}</p>
                    <p>${data.pricing[2].plan}</p></>` : "Data Not Found"}

                    </div>

            </div> 
            <div class ="d-flex justify-content-between ">
            <div>
            <h4>Features</h4>
               <ul>
               <li>${data.features[1].feature_name}</li>
               <li>${data.features[2].feature_name}</li>
               <li>${data.features[3].feature_name}</li>
               </ul>
            </div>

            <div>
            <h4>Integrations</h4>
               ${data.integrations ? `
               <ul>
               <li>${data.integrations[0] ? data.integrations[0] : "No Data Found"}</li>
               <li>${data.integrations[1] ? data.integrations[1] : "No Data Found"}</li>
               <li>${data.integrations[2] ? data.integrations[2] : "No Data Found"}</li>
               </ul>
               ` : "data Not found"}
            </div>
        
        </div> 
      </div>
        
    </div>
    <div class="col">
      <div class="card">
      <div class="modal-footer">
      ${data.accuracy?.score ? `<p class="btn btn-danger  btn-sm w-25">  ${data.accuracy?.score * 100}% accuracy </p>` : ""}
      </div>

        <img src="${data.image_link[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            ${data.input_output_examples ? `

            <h5 class="card-title">${data.input_output_examples[0].input ? data.input_output_examples[0].input : "Can you give any example?"}</h5>

            <p class="card-title">${data.input_output_examples[1].output ? data.input_output_examples[1].output : "No!not Yet! Take a break!"}</p>
            ` : "No!not Yet! Take a break!"}
       
        </div>
      </div>
    </div>
    </div>

    
</div>
    
    `;
    modalDialog.appendChild(div);
    // console.log(datas)
}

// sorting:
btnSort.addEventListener('click', () => {
    console.log('clicked')
})
loadData();
