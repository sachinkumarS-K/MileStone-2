let data = [
    {
        title : "Blog Title :  Demo Article" ,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla",
        imgUrl : "./assets/tree.jpg",
        data : "Loremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla"
    },
    {
        title : "PwSkills - 4 Year Residentil Program" ,
        description: " Loremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla",
        imgUrl : "./assets/nature.jpg",
        data : "Loremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla"
    },
    {
        title : "THE AMAZING SPIDER-MAN" ,
        description: " Loremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla",
        imgUrl : "./assets/spider.jpg",
        data : "Loremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ullaLoremonsectetur adipisicing elit. Repellendus incidunt cum tempore quae ulla"
    }
] ;

const cardContainer = document.querySelector(".cardContainer") ;

function generateCards(){
    cardContainer.innerHTML = ``;
    data.forEach((e , index) => {
        cardContainer.innerHTML = cardContainer.innerHTML +` 
        <div class="card ${index}">
        <img src="${e.imgUrl}" alt="">
        <p class="content blog-title">${e.title}</p>
        <p class="desc content">
        ${e.description}
        </p>
        <button class = "btn" onclick = "showReadSection(event)">Read</button>
    </div> `;
    });
}
generateCards();

const addBtn = document.querySelector(".plusImg");
const wrapper = document.querySelector(".wrapper")
const form = document.querySelector(".addForm");
const cutBtn = document.querySelector(".cutBtn")

const formRender = () => {   
 
    wrapper.style.cssText = `opacity : 0.75; background: rgba(0, 0, 0, 0.5);`;
    form.style.cssText = `opacity : 1 ; background: rgba(0, 0, 0, 0) , z-index : 1 ; display : block`;

}


addBtn.addEventListener("click" , formRender)
cutBtn.addEventListener("click" , ()=> {

    form.style.display = "none";
    wrapper.style.cssText = `opacity : 1; background: rgba(0, 0, 0, 0);`;  

});

 function formSubmitHandler (event){
    event.preventDefault();
    const blogUrl = document.querySelector("#blogUrl");
    const blogTitle = document.querySelector("#blogTitle")
    const blogDesc = document.querySelector("#blogDesc")
    const content = document.querySelector("#data");

    const obj = {
        title : blogTitle.value,
        description: blogDesc.value,
        imgUrl : blogUrl.value,
        data : content.value
    }
    
    console.log(obj);
    data.push(obj);
     generateCards();

     form.style.display = "none";
     wrapper.style.cssText = `opacity : 1; background: rgba(0, 0, 0, 0);`; 
 }

 
 const mainCont = document.querySelector(".main");
 const readSection =  document.querySelector(".readSection")
function showReadSection (event){
   
    mainCont.style.display = "none" ;
    readSection.style.display = "block" ;
    addBtn.style.display = "none";
    let parent = event.target.parentNode.classList;
    // console.log(parent)
    parent = Object.values(parent);
    //console.log(parent)
    const id = parent[1]
    readSection.innerHTML = `
    <img src="./assets/arrow.png" alt="" class="arrowIcon">
    <div class="top-readSection">
          <div class="read-sectionData">
            <div  class="read-sectionTitle">
            ${data[id].title}
            </div>
            <div class="read-sectionDesc">
            ${data[id].description}
            </div>
          </div>
          <div class="read-sectionImg">
            <img src="${data[id].imgUrl}" alt="">
          </div>
        </div>
        <div class="readSection-down">
        ${data[id].data}
        </div>
    `
    const arrowIcon =  document.querySelector(".arrowIcon");

    arrowIcon.addEventListener("click" , ()=>{
    // alert("hello")
    mainCont.style.display = "block" ;
    readSection.style.display = "none" ;
    addBtn.style.display = "block"
});
}


// function()
 


   
