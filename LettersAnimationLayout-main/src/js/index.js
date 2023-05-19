import { preloadImages } from './utils';
import { Panel } from './panel';

import { init } from './projectComponents/indexcomponent'

import donnees from './data/data';
import CategoryItem from './projectComponents/categoryComponent';





const panels = [...document.querySelectorAll(".panel")];
;
const mainLayout = document.querySelector(".ici");
const panelItem = document.querySelectorAll(".panel__item")
panelItem.forEach((container) => {
  const containerProject = container.querySelector(".panel__item-title");
 const img = container.querySelector(".panel__item-img");
 const containerImg = container.querySelector(".panel__item-imgwrap");
  const dataName = container.getAttribute("data-name");
  
  img.addEventListener("click", () => {
let titleCategory = [];

containerImg.classList.add("pointer-events-none");
  if(dataName === "Marketing"){
    donnees.Marketing.forEach((item) => {
      
      const categoryItem = new CategoryItem(item);
      const category = categoryItem.getCategoryDOM();
      containerProject.appendChild(category);
        titleCategory.push(item);
    });
    
  
  }
  else if (dataName === "Design") {
     donnees.Design.forEach((item) => {
       const categoryItem = new CategoryItem(item);
       const category = categoryItem.getCategoryDOM();
       containerProject.appendChild(category);
       titleCategory.push(item);
     });
    
   }
  else if (dataName === "Communication") {
     donnees.Communication.forEach((item) => {
       const categoryItem = new CategoryItem(item);
       const category = categoryItem.getCategoryDOM();
       containerProject.appendChild(category);
       
     });
   }


   panelItem.forEach((item) =>{
 
     const closeBtn = item.querySelector(".panel__item-close");
     
     closeBtn.addEventListener("click", () => {
       containerProject.innerHTML = "";
       
       containerImg.classList.remove("pointer-events-none");
     });
   })

    
   



   
  panels.forEach((panel) => new Panel(panel));
  init(titleCategory);
   
    

    
     
  });
});

// Preload all images
preloadImages().then(() => {
    // remove loader (loading class) 
    document.body.classList.remove('loading');
    panels.forEach(panel => new Panel(panel));

    
});


