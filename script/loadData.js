import { getData } from './getData.js';

const wishList = ['idd003', 'idd023', 'idd053', 'idd074', 'idd088'];
const cartList = [
    {
        id: 'idd032',
        count: 3
    },
    {
        id: 'idd052',
        count: 3
    },
    {
        id: 'idd027',
        count: 3
    }
];

export const loadData = () => {




    if (location.search) {
        const search = decodeURI(location.search);
        // console.log(search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];
        // console.log('prop: ', prop);
        // console.log('value: ', value);

        if (prop === 's') {
            // console.log(value);
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log(data));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data))
        }
    }
    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }
    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }
    getData.catalog((data) => console.log(data));
    getData.subCatalog('Декор', (data) => console.log(data));
};
