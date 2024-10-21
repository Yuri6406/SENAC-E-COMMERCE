package com.lojaVirtual.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Anotação que define esta classe como um controlador REST
@RestController
@RequestMapping("/produto")
public class ProdutoController {
      // http://127.0.0.1:8080/pedido/ok
      @RequestMapping("/ok")
      public String produtoOk() {
  
          return "produtoOk";
      }
}