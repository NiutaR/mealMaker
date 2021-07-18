let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        /*set appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        set mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts() {
            return this._desserts;
        },
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
        name: dishName,
        price: dishPrice, 
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const  appetizer = this.getRandomDishFromCourse('appetizer');
        const main = this.getRandomDishFromCourse('main');
        const dessert = this.getRandomDishFromCourse('dessert');
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'SHRIMP CEVICHE', 12.34);
menu.addDishToCourse('appetizers', 'PUMPKIN PIE DIP', 2.98);


menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);


