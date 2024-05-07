package com.reges.regesspring.rdn;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
    private String USER = "root";
    private String PASSWORD = "123456";
    private String URL = "jdbc:mysql://localhost:3306/db_supermercado_reges";
    
    public Connection getConnection(){
    
        try{
            return DriverManager.getConnection(URL,USER,PASSWORD);
        }
        
        catch(SQLException ex){
            throw new RuntimeException(ex);
        
        }
    }

}
