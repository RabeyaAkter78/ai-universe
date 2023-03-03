
const loadData = () => {
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    // console.log(url);
    fetch(URL)
        .then(res => res.json())
        .then(data =>displayData(data.data.tools));

};

const containerDiv = document.getElementById('ais-container');
const displayData = (tools) => {
    // console.log(tools);

    // display All data:
    tools.forEach(tool => {
        console.log(tool);
        const aisDiv = document.createElement('div');
        aisDiv.classList.add('col');

        aisDiv.innerHTML = `
                    <div class="card h-100">
                                <img src="${tool.image
                                }" class="card-img-top" alt="...">
                    <div class="card-body">
                                <h5 class="card-title">${'features'}</h5>
                                <p class="card-text">${tool.features
                                }</p>
                    </div>
                    <div class="card-footer">
                                <h5 class="card-title">${tool.name}</h5>
                                <small class="text-muted"><i class="fa-solid fa-calendar-days"></i>  ${tool.published_in
                                }</small>
                    </div>
                    </div>
 
 `;

        containerDiv.appendChild(aisDiv);
    });

}
loadData();
