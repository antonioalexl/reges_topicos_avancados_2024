package com.reges.regesspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.reges.regesspring.dominio.Cliente;
import com.reges.regesspring.rdn.ClienteRdn;

@RestController()
public class ClienteController {

    @GetMapping("clientes")
    public List<Cliente> getClientes() {

        ClienteRdn rdn = new ClienteRdn();
        return rdn.obterTodos();
    }

    @GetMapping("/cliente/{id}")
    public Cliente GetById(@PathVariable("id") int id) {

        ClienteRdn rdn = new ClienteRdn();
        return rdn.obterPorId(id);
    }

    @PostMapping("/cliente")
    public int Post(@RequestBody Cliente cliente) {
        ClienteRdn rdn = new ClienteRdn();
        return rdn.inserirCliente(cliente);

    }

    @PutMapping("/cliente/{id}")
    public int Put(@PathVariable("id") int id, @RequestBody Cliente cliente) {
        ClienteRdn rdn = new ClienteRdn();
     

        if (rdn.obterPorId(id).getId() > 0) {
            rdn.alterarCliente(cliente);

        } else {

            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
        }
        return 1;
    }

    @DeleteMapping("/cliente/{id}")
    public int Delete(@PathVariable("id") int id) {
        
        ClienteRdn rdn = new ClienteRdn();
        int retorno = 0;

        if (rdn.obterPorId(id)!= null) {
            retorno = rdn.deletarCliente(id);

        } else {

            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado");
        }
        return retorno;
    }


}
