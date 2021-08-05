package bhs.Mekanik.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import bhs.Mekanik.entities.concretes.Product;

public interface ProductDao extends JpaRepository<Product, Integer>{
	Product getByProductName (String productName);
}
