const configration = 'https://api.douban.com'
const apis = {
        'hot':configration + '/v2/movie/in_theaters',
        'comingsoon':configration + '/v2/movie/coming_soon',
        'top250':configration + '/v2/movie/top250',
        'new':configration + '/v2/movie/new_movies',
        'usbox':configration + '/v2/movie/us_box',
        'detail':configration + '/v2/movie/subject/'
}

export default apis;