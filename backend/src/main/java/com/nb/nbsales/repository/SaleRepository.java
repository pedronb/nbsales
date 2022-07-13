package com.nb.nbsales.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nb.nbsales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
    
}
