package bhs.Mekanik.business.abstracts;

import java.util.List;

import bhs.Mekanik.core.utilities.result.DataResult;
import bhs.Mekanik.core.utilities.result.Result;
import bhs.Mekanik.entities.concretes.Product;

public interface ProductService {
	DataResult <List<Product>> getAll();
	Result add(Product product);
	DataResult<Product> getByProductName (String productName);
}
