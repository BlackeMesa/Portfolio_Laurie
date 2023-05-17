// import { preloadImages } from './utils';
// import { Panel } from './panel';

// import { init } from './projectComponents/indexcomponent'

// import donnees from './data/data';
// import CategoryItem from './projectComponents/categoryComponent';






// const containerImg = document.querySelectorAll(".panel__item-img");
// const mainLayout = document.querySelector(".ici");
// const panelItem = document.querySelectorAll(".panel__item")
// containerImg.forEach((container) => {
//   const containerProject = document.querySelectorAll(".panel__item-title");
 
//   const dataName = container.getAttribute("data-name");
  
//   container.addEventListener("click", () => {


// containerProject.forEach((project)=> {

 
//   if(dataName === "Marketing"){
//     donnees.Marketing.forEach((item) => {
//       const categoryItem = new CategoryItem(item);
//       const category = categoryItem.getCategoryDOM();
//       project.appendChild(category);
      
//     });
//   }
//   else if (dataName === "Design") {
//      donnees.Design.forEach((item) => {
//        const categoryItem = new CategoryItem(item);
//        const category = categoryItem.getCategoryDOM();
//        project.appendChild(category);
//      });
//    }
//   else if (dataName === "Communication") {
//      donnees.Communication.forEach((item) => {
//        const categoryItem = new CategoryItem(item);
//        const category = categoryItem.getCategoryDOM();
//        project.appendChild(category);
//      });
//    }


//    panelItem.forEach((item) =>{
 
//      const closeBtn = item.querySelector(".panel__item-close");
     
//      closeBtn.addEventListener("click", () => {
//        project.innerHTML = "";
//        mainLayout.innerHTML = "";
//      });
//    })
   
// })


   
//    panels.forEach((panel) => new Panel(panel));
//    init();
    

    
     
//   });
// });

// // Preload all images
// preloadImages().then(() => {
//     // remove loader (loading class) 
//     document.body.classList.remove('loading');
//     panels.forEach(panel => new Panel(panel));

    
// });


