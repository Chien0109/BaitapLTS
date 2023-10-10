const menu = [
    {
        id: 1,
        title: "special raw coffee",
        category: "chocolate ; greantea ; blacktea",
        price: 4.8,
        img: "assets/images/menu/img_02.png",
        desc: `The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an `,
    },
    {
        id: 2,
        title: "indian pure tea",
        category: "sandwiches ; sweets",
        price: 1.6,
        img: "assets/images/menu/img_03.png",
        desc: `The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an `,
    },
    {
        id: 3,
        title: "Bangladeshi green tea",
        category: "sandwiches ; sweets",
        price: 9.3,
        img: "assets/images/menu/img_04.png",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 4,
        title: "egg attackRolatina Sweets cafe house",
        category: "coffee ; blacktea",
        price: 0.8,
        img: "assets/images/menu/img_05.png",
        desc: ` The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an  `,
    },
    {
        id: 5,
        title: "oreo dreamspecial raw coffee",
        category: "coffee",
        price: 4.8,
        img: "assets/images/menu/img_02.png",
        desc: `The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an `,
    },
        {
        id: 6,
        title: "americano Super hot coffee",
        category: "chocolate; greantea",
        price: '$3.5',
        img: "assets/images/menu/img_01.png",
        desc: `The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an  `,
    },
    
    
    
];
let render = function (list){
    let html = list.map((item,index)=>{
        return `
            <div class="col-xl-6 item col-12">
                    <div class="row">
                        <div class="col-md-5 col-12">
                            <img src="${item.img}" class="">
                        </div>
                        <div class="col-md-7 col-12">
                            <ul class="nav justify-content-between">
                                <li class="nav-item title">${item.title}</li>
                                <li class="nav-item price">$${item.price}</li>
                            </ul>
                            <p class="des mt-2">
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                   
            </div>
            
        `
    }).join("");
    document.getElementById("list-item").innerHTML = html;
}
let getData = function (type){
    const list = menu.filter((item,index)=>{
        return item.category.includes(type);
    })
    render(list);
}

getData('');

let category = document.querySelectorAll('button');
category.forEach((item)=>{
    item.onclick = function (){
        getData(item.dataset.id);
    }
})
