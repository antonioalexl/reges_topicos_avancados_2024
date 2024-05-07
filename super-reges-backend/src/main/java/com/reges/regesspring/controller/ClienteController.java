package com.reges.regesspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reges.regesspring.dominio.Cliente;
import com.reges.regesspring.rdn.ClienteRdn;

@RestController()
public class ClienteController {

    @GetMapping("clientes")
    public List<Cliente> getClientes() {

        ClienteRdn rdn = new ClienteRdn();
        return rdn.obterTodos();
    }
}
