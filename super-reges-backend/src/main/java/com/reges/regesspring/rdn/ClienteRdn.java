package com.reges.regesspring.rdn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.reges.regesspring.dominio.Cliente;
import com.reges.regesspring.dominio.Endereco;

public class ClienteRdn {

    public int inserirCliente(Cliente cli) {

        try {

            int linhasAfetadas = 0;
            StringBuilder str = new StringBuilder();

            str.append("INSERT INTO cliente    ");
            str.append("(nomeCompleto           ");
            str.append(",nomeResumido           ");
            str.append(",email                  ");
            str.append(",telefone               ");
            str.append(",dataNascFund           ");
            str.append(",documento              ");
            str.append(",rgIe                   ");
            str.append(",cartaoFidelidade)      ");
            str.append("VALUES(                 ");
            str.append(" ?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(",?                      ");
            str.append(")                       ");

            ConnectionFactory factory = new ConnectionFactory();
            Connection conn = factory.getConnection();

            //CRIA O STATMENT JÁ PREPARADO PARA OBTER O ID CLIENTE GERADO
            PreparedStatement stmt = conn.prepareStatement(str.toString(), Statement.RETURN_GENERATED_KEYS);

            stmt.setString(1, cli.getNomeCompleto());
            stmt.setString(2, cli.getNomeResumido());
            stmt.setString(3, cli.getEmail());
            stmt.setString(4, cli.getTelefone());
            stmt.setDate(5, new java.sql.Date(cli.getDataNascFund().getTimeInMillis()));
            stmt.setString(6, cli.getDocumento());
            stmt.setString(7, cli.getRgIe());
            stmt.setString(8, cli.getCartaoFidelidade());

            int id = 0;
            
            linhasAfetadas = stmt.executeUpdate();      
            
            ResultSet rs = stmt.getGeneratedKeys();            
            if (rs.next()) {
                //RECUPERA O IDCLIENTE
                
               id = rs.getInt(1); //recuperar o id               
               
               EnderecoRdn endRdn = new EnderecoRdn();           
               Endereco end = cli.getEndereco();
               end.setIdCliente(id);
               
               endRdn.inserirEndereco(end);
               
            }          

            stmt.close();
            conn.close();

            return linhasAfetadas;

        } catch (SQLException ex) {
            System.out.println("ERRO: " + ex.getMessage());
            return 0;
        }
    }

    public void alterarCliente(Cliente cli) {

        try {

            int linhasAfetadas = 0;
            StringBuilder str = new StringBuilder();

            str.append("UPDATE cliente SET      ");
            str.append(" nomeCompleto    = ?    ");
            str.append(",nomeResumido     =?    ");
            str.append(",email            =?    ");
            str.append(",telefone         =?    ");
            str.append(",dataNascFund     =?    ");
            str.append(",documento        =?    ");
            str.append(",rgIe             =?     ");
            str.append(",cartaoFidelidade =?     ");
            str.append("WHERE id = ?      ");

            ConnectionFactory factory = new ConnectionFactory();
            Connection conn = factory.getConnection();

            //CRIA O STATMENT JÁ PREPARADO PARA OBTER O ID CLIENTE GERADO
            PreparedStatement stmt = conn.prepareStatement(str.toString());

            stmt.setString(1, cli.getNomeCompleto());
            stmt.setString(2, cli.getNomeResumido());
            stmt.setString(3, cli.getEmail());
            stmt.setString(4, cli.getTelefone());
            stmt.setDate(5, new java.sql.Date(cli.getDataNascFund().getTimeInMillis()));
            stmt.setString(6, cli.getDocumento());
            stmt.setString(7, cli.getRgIe());
            stmt.setString(8, cli.getCartaoFidelidade());
            stmt.setInt(9, cli.getId());

            linhasAfetadas = stmt.executeUpdate();

            stmt.close();
            conn.close();

        } catch (SQLException ex) {
            System.out.println("ERRO: " + ex.getMessage());

        }
    }
    
    public int deletarCliente(int idCliente) {
        try {

            int linhasAfetadas = 0;

            String str = "DELETE FROM CLIENTE WHERE ID = ?";
            ConnectionFactory factory = new ConnectionFactory();
            Connection conn = factory.getConnection();

            PreparedStatement stmt = conn.prepareStatement(str.toString());
            stmt.setInt(1, idCliente);

            linhasAfetadas = stmt.executeUpdate();

            stmt.close();
            conn.close();

            return linhasAfetadas;

        } catch (Exception ex) {
            System.out.println("Erro: " + ex.getMessage());
            return 0;
        }

    }

    public List<Cliente> obterTodos() {
        try {

            EnderecoRdn endRdn = new EnderecoRdn();
            
            List<Cliente> lstCli = new ArrayList<Cliente>();
            StringBuilder str = new StringBuilder();
            str.append("SELECT  *               ");           
            str.append("FROM cliente              ");
            

            //ABRE A CONEXÃO
            Connection conn = new ConnectionFactory().getConnection();

            //CRIAR NOSSO STATEMENT            
            Statement stmt = conn.createStatement();

            //RECEBER OS DADOS NO RESULTSET
            ResultSet rs = stmt.executeQuery(str.toString());

            //INSTANCIA DA CLASSE ENDERECO RDN
             //EnderecoRdn endRdn = new EnderecoRdn();
             
            while (rs.next()) {

                //CONVERTER SQL DATE TO CALENDAR
                Calendar calendar = Calendar.getInstance();
              
               
               Endereco end =   endRdn.obterPorIdCliente(rs.getInt("ID"));
                
               
                Cliente cli = new Cliente(rs.getInt("ID"),
                        rs.getString("nomecompleto"),
                        rs.getString("nomeResumido"),
                  
                        end,
                          rs.getString("TELEFONE"),
                        calendar,
                        rs.getString("DOCUMENTO"),
                        rs.getString("RGIE"),
                        rs.getString("EMAIL"),                   
                        rs.getString("CARTAOFIDELIDADE"));

                lstCli.add(cli);

            }
            return lstCli;

        } catch (SQLException ex) {

            System.out.println("ERRO:" + ex.getMessage());
            return null;
        }
    }
    
    public Cliente obterPorId(int id) {
        try {

            Cliente ret = null;

            StringBuilder str = new StringBuilder();

                str.append("SELECT id,                        ");
                str.append("    nomeCompleto,             " );
                str.append("    nomeResumido,             " );
                str.append("    email,                    " );
                str.append("    telefone,                 " );
                str.append("    dataNascFund,             " );
                str.append("    documento,                " );
                str.append("    rgIe,                     " );
                str.append("    cartaoFidelidade          " );
                str.append("FROM cliente WHERE ID = ?     " );


           

            //ABRE A CONEXÃO
            Connection conn = new ConnectionFactory().getConnection();

            //CRIAR NOSSO STATEMENT            
            PreparedStatement stmt = conn.prepareStatement(str.toString());

          
            stmt.setInt(1, id);
            
            //RECEBER OS DADOS NO RESULTSET
            ResultSet rs = stmt.executeQuery();

            //INSTANCIA DA CLASSE ENDERECO RDN
            EnderecoRdn endRdn = new EnderecoRdn();
            
            if (rs.next()) {

                //CONVERTER SQL DATE TO CALENDAR
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(rs.getDate("dataNascFund"));

                /*              
                public Cliente(int id, String nome, Calendar dataNascimento, String documento, 
                String telefone, String email, Endereco endereco, String cartaoFidelidade)
                 */
                Endereco end = endRdn.obterPorIdCliente(rs.getInt("ID"));
                
                ret = new Cliente(rs.getInt("ID"),
                        rs.getString("nomecompleto"),
                        rs.getString("nomeResumido"),
                  
                        end,
                          rs.getString("TELEFONE"),
                        calendar,
                        rs.getString("DOCUMENTO"),
                        rs.getString("rgIe"),
                        rs.getString("EMAIL"),                   
                        rs.getString("CARTAOFIDELIDADE"));
                

            }
            return ret;

        } catch (SQLException ex) {

            System.out.println("ERRO:" + ex.getMessage());
            return null;
        }
    }

}