import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Nama Restaurant</h4>
    <p>${restaurant.name}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    </div>

    <div class="restaurant-description">
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p> 
     
    <h4>Menu Makanan</h4>
    <ul>
    ${restaurant.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
  </ul>
  <h4>Menu Minuman</h4>
  <ul>
    ${restaurant.menus.foods.map((drinks) => `<li>${drinks.name}</li>`).join('')}
  </ul>
  </div>
  
  <div class="restaurant__overview">
    <h3>Ulasan Pengguna</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="review">
    <div class="review-header">
      <p class="review__name">${review.name}</p>
      <p class="review__date">${review.date}</p>
      </div>
      <p class="review__text">${review.review}</p>
    </div>
    
  `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurants.name}"
      data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class ="restaurant-item__content1" >
      <a  href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
