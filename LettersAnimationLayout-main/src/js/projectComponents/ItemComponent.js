export default class ItemComponent {
  constructor(data) {
    const { name, photos } = data;

    this.photos = photos;

    this.name = name;
  }

  getItemDOM() {
    console.log("yepa");
    const div = document.createElement("div");
    const mainLayout = document.querySelector(".ici");
    mainLayout.classList.add("blur-layout")
    div.classList.add("project-item");
    div.innerHTML = `
    <section class="preview">
			<button class="preview__close unbutton">&#9587;</button>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">${this.name}</span></h2>
				<div class="section-cell">

        <div class='container-cell'>
					<div class="cell__img">
          <div class="cell__img-inner" >
          
          <img src=${this.photos[0]} alt="img"/>
          </div>
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
      </div>
           
		</section>
    
        `;

    return mainLayout.appendChild(div);
  }
}