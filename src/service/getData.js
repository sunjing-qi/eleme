/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) => fetch('4/restaurants', {
    'extras[]': 'restaurant_activity',
    geohash,
    keyword,
    type: 'search'
});
