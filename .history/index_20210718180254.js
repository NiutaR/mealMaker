let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers() {
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
    }
};

