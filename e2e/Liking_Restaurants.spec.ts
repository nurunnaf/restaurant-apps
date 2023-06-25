/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({
    I,
}) => {
    I.amOnPage('#/favorite');
});

Scenario('liking one restaurant', async ({
    I,
}) => {
    I.amOnPage('/#/');

    I.waitForElement('.restaurant-item__content1 a', 10);

    const firstRestaurant = locate('.restaurant-item__content1 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content1');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({
    I,
}) => {
    I.amOnPage('/#/');

    I.waitForElement('.restaurant-item__content1 a');

    const firstRestaurant = locate('.restaurant-item__content1 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content1');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.waitForElement('.restaurant-item__content1 a');
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.dontSeeElement('.restaurant-item__content1 a');
});