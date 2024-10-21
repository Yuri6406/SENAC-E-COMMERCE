package com.lojaVirtual.service;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lojaVirtual.entities.User;
import com.lojaVirtual.repository.LoginRepository;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    // Método para criar um novo login
    public ResponseEntity<User> criarLogin(User login) {

        return ResponseEntity.ok(loginRepository.save(login));
    }

    // Método para obter todos os usuarios
    public List<User> obterTodosLogins() {
        // Retornar todos os login's do banco
        return loginRepository.findAll();

    }

    public boolean autenticar(String email, String senha) {
        // Busca o usuário no repositório pelo email fornecido
        Optional<User> usuario = loginRepository.findByEmail(email);
        // Verifica se o usuário foi encontrado e se a senha fornecida corresponde à senha armazenada
        if (usuario.isPresent() && usuario.get().getSenha().equals(senha)) { // Comparação simples
            // Se a senha estiver correta, retorna o usuário
            return true;
        }else{
            // Se o usuário não for encontrado ou a senha estiver incorreta, retorna um Optional vazio
            return false;
        }
    }
    

}
