export const getUniqueCities = data => data.reduce((prev, acc) => {
        prev[acc.address.city] = acc.address.city;
        return prev
}, {});

export const getUniqueCompanies = data => data.reduce((prev, acc) => {
        prev[acc.company.name] = acc.company.name;
        return prev
}, {});

const getUserById = (users, userId) => users.filter(user => parseInt(user.id,10) === parseInt(userId,10))[0];

export const joinPostWithUsers = (posts, users) => {
        return posts.map(post => {
            return {
                ...post,
                ...getUserById(users, post.userId),
                id: post.id,
            }
        })
};
const sortByCb = (criteria) => (a, b) => {
    let first;
    let second;
    switch (criteria) {
        case 'name':
            first = a.name;
            second = b.name;
            break;
        case 'city':
            first = a.address.city;
            second = b.address.city;
            break;
        case 'company':
            first = a.company.name;
            second = b.company.name;
            break;
        default:
            first = a.name;
            second = b.name;
    }
    first = first.toLowerCase();
    second = second.toLowerCase();
    if (first === second) {
        console.log('first === second');
        first = a.title;
        second = b.title;
    }
    if (first < second) {
        return -1;
    }
    if (first > second) {
        return 1;
    }
    return 0;
};
const filterByCityNameCb = cityName => post => !cityName || post.address.city === cityName;
const filterByCompanyNameCb = companyName =>  post => !companyName || post.company.name === companyName;
const filterByCityAndCompanyNamesCb = (cityName, companyName) => post => filterByCityNameCb(cityName)(post) && filterByCompanyNameCb(companyName)(post);
const filterByCityAndCompanyNames = (source, cityName, companyName) => (!cityName && !companyName) ? source : source.filter(filterByCityAndCompanyNamesCb(cityName, companyName));

export const getFilteredSortedPosts = ({source, filterByCity, filterByCompany, sortedBy}) => {
    let list = filterByCityAndCompanyNames(source, filterByCity, filterByCompany);
    if (sortedBy) {
        list = [...list].sort(sortByCb(sortedBy));
    }
    return list;
};