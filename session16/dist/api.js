var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://dummyjson.com/products";
export function fetchAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(BASE_URL);
            const data = yield response.json();
            return data.products;
        }
        catch (error) {
            console.error(error);
        }
    });
}
export function fetchProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/${id}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
export function searchProduct(productName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/search?q=${productName}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
export function allCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/categories`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
export function getProductsByCategory(category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/category/${category}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
