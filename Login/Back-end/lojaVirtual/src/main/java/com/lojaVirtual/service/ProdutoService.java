package com.lojaVirtual.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lojaVirtual.entities.Produto;
import com.lojaVirtual.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

        // Método para criar um novo produto
    public ResponseEntity<Produto> criarProduto(Produto produto) {

        return ResponseEntity.ok(produtoRepository.save(produto));
    }

    // Método para obter todos os Produto
    public List<Produto> obterTodosProdutos() {
        // Retornar todos os Produto's do banco
        return produtoRepository.findAll();

    }
}
