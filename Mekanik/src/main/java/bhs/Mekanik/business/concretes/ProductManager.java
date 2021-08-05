package bhs.Mekanik.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bhs.Mekanik.business.abstracts.ProductService;
import bhs.Mekanik.core.utilities.result.DataResult;
import bhs.Mekanik.core.utilities.result.Result;
import bhs.Mekanik.core.utilities.result.SuccessDataResult;
import bhs.Mekanik.core.utilities.result.SuccessResult;
import bhs.Mekanik.dataAccess.abstracts.ProductDao;
import bhs.Mekanik.entities.concretes.Product;


@Service
public class ProductManager implements ProductService {
	
	private ProductDao productDao;
	
	@Autowired
	public ProductManager(ProductDao productDao) {
		super();
		this.productDao = productDao;
	}


	@Override
	public DataResult<List<Product>> getAll() {
		
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(),"Data Listelendi ");

     }
	
	


	@Override
	public Result add(Product product) {
		this.productDao.save(product);
		
		return new SuccessResult("data eklendi");
	}
	
	@Override
	public DataResult<Product> getByProductName(String productName) {
		return new SuccessDataResult<Product>
		(this.productDao.getByProductName(productName),"Data listelendi");	
	}

	
	
}
