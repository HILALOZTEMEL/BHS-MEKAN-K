package bhs.Mekanik.api.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bhs.Mekanik.business.abstracts.ProductService;
import bhs.Mekanik.core.utilities.result.DataResult;
import bhs.Mekanik.core.utilities.result.Result;
import bhs.Mekanik.entities.concretes.Product;




@RestController
@RequestMapping("/api/Products")
@CrossOrigin
public class ProductsController {
	
	
	private ProductService productService;
	
	@Autowired
	public ProductsController(ProductService productService) {
		super();
		this.productService = productService;
	}


	@GetMapping("/getAll")
	public DataResult<List<Product>>  getAll(){
		return this.productService.getAll();
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody Product product) {
		return this.productService.add(product);
	}
	
	@GetMapping("/getByProductName")
	public DataResult<Product> getByProductName(@RequestParam String productName){
		return this.productService.getByProductName(productName);
	}
	
}
