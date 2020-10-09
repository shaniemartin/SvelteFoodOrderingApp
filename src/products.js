import { writable} from "svelte/store";


export let products = writable( [
    {
        id: 1,
        category: 'american',
        title: 'The Classic Hamburger',
        description: 'Ground beef patty with cheese',
        price: 4.50
    },
    {
        id: 2,
        category: 'chinese',
        title: 'Sticky Pork Strips',
        description: 'Lovely pork strips in a sticky sauce',
        price: 6.99
    },
    {
        id: 3,
        category: 'indian',
        title: 'Chicken Tikka Massala',
        description: 'The UKs favourite curry!',
        price: 12.99
    },
    {
        id: 4,
        category: 'kebab',
        title: 'Lamb Doner Kebab',
        description: 'Specially prepared minced lamb roasted on an open spit',
        price: 10.99
    },
    {
        id: 5,
        category: 'kebab',
        title: 'Shish kebab',
        description: 'Marinated diced lamb, charcoal grilled on a skewer',
        price: 10.99
    },
    {
        id: 6,
        category: 'american',
        title: 'Deep South Stack',
        description: 'Ground beef patty, cheese, bacon and homemade BBQ sauce',
        price: 5.25
    },
    {
        id: 7,
        category: 'american',
        title: 'Classic Hot Dog',
        description: 'Classic dog with fried onions',
        price: 4.25
    },
    {
        id: 9,
        category: 'chinese',
        title: 'Egg Fried Rice',
        description: 'Egg fried rice',
        price: 3.20
    },
    {
        id: 10,
        category: 'chinese',
        title: 'Kung Po Chicken',
        description: 'Crispy coated meat parcels cooked with water chestnuts in a tangy garlic sauce',
        price: 6.10
    },
    {
        id: 11,
        category: 'chinese',
        title: 'Chicken Chow Mein',
        description: 'Cooked with bean sprouts and spring onions',
        price: 5.80
    },
    {
        id: 12,
        category: 'indian',
        title: 'Chicken Korma',
        description: 'Chicken cooked in a mild and creamy saucy',
        price: 8.50
    },
    {
        id: 13,
        category: 'indian',
        title: 'Plain Naan',
        description: 'Plain naan',
        price: 3.20
    },

])
