const containerDiv = document.getElementById('ais-container');

const seeMore = document.getElementById('see-More');

let allData = [];
const loadData = () => {
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            displayData(data.data.tools)
            allData.push(data.data.tools)
        });

};
seeMore.addEventListener('click', () => {

    allDataFunction(allData)
    console.log('clicked')
});
const allDataFunction = datas => {
    displayAllData(datas[0]);
}
const displayAllData = (tools) => {
    containerDiv.textContent = '';
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
                               <button onclick="loadToolsDetails('${tool.id}')" href="#" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#toolDetailsModal"></button>
                               </div>

                               
                    </div>
                    </div>
 `;
        containerDiv.appendChild(toolsDiv);
    });

}














const displayData = (tools) => {
    console.log(tools);
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
        console.log(tool);

        const aisDiv = document.createElement('div');
        aisDiv.classList.add('col');

        aisDiv.innerHTML = `
                    <div class="card h-100">
                                <img src=${tool.image} class="card-img-top" alt="...">
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
    const res= await fetch(URL)
    const data= await res.json()
    console.log(data.data);

}


loadData();
