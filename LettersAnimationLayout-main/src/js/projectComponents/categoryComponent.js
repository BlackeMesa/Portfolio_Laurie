import { Panel } from "../panel";
import { PreviewItem } from "./previewItem";

export default class CategoryItem {
  constructor(data) {
    const { name, photos } = data;

    this.photos = photos;

    this.name = name;
  }

  getCategoryDOM() {
   
    const div = document.createElement("div");
    div.classList.add("project-container", "my-5");
    
    div.innerHTML = `
    <section >
         <div class="row">
      <div class="cell cell--text">
        <h2 class="cell__title oh"><span class="oh__inner">${this.name}</span></h2>
      </div>
      <div class="cell cell--images">
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[0]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[1]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner"><img src=${this.photos[2]} alt="img"/></div>
        </div>
        <div class="cell__img">
          <div class="cell__img-inner" ><img src=${this.photos[3]} alt="img"/></div>
        </div>
      </div>
    </div>
    </section>
    
        `;
       
    
    return div;
  }

  
}
