import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/Products/getAll")
    }

    getByProductName(productName){
        return axios.get("http://localhost:8080/api/Products/getByProductName?productName="+ productName)
    }
}