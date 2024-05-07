package com.reges.regesspring.dominio;


public class Cliente extends Pessoa {

    public String getCartaoFidelidade() {
        return cartaoFidelidade;
    }

    public void setCartaoFidelidade(String cartaoFidelidade) {
        this.cartaoFidelidade = cartaoFidelidade;
    }
    
    private String cartaoFidelidade;  

    public Cliente(int id, String nomeCompleto, String nomeResumido, Endereco endereco, String telefone, Calendar dataNascFund, String documento, String rgIe, String email, String cartaoFidelidade) {
        super(id,nomeCompleto, nomeResumido, endereco, telefone, dataNascFund, documento, rgIe,email);
        this.cartaoFidelidade = cartaoFidelidade;
    }
    
    
    public void imprimir(){
    
         System.out.println("Nome: " + this.getNomeCompleto());
         System.out.println("Documento: " + this.getDocumento());
         System.out.println("Rg: " + this.getRgIe() );
         System.out.println("Telefone: " + this.getTelefone());
         System.out.println("Email: " + this.getEmail());
    }
    
}