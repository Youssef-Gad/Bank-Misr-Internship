const BASE_URL = "https://dummyjson.com/products";

export async function fetchAllProducts() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchProduct(productName) {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${productName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function allCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`${BASE_URL}/category/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
