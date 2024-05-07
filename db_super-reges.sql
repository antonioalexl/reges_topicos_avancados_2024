create database db_supermercado_reges;



use db_supermercado_reges;

create table cliente(
	id int primary key AUTO_INCREMENT
	,nomeCompleto   	    varchar(450) not null
    ,nomeResumido   	    varchar(450) not null
    ,email				    varchar(150)	
    ,telefone			    varchar(14) 
	,dataNascFund			datetime
	,documento			    varchar(20)  not null
	,rgIe					varchar(20)  null	
    ,cartaoFidelidade       varchar(500)
	);        
    
    create table fornecedor(
	id int primary key AUTO_INCREMENT
	,nomeCompleto   	    varchar(450) not null
    ,nomeResumido   	    varchar(450) not null
    ,email				    varchar(150)	
    ,telefone			    varchar(14) 
	,dataNascFund			datetime
	,documento			    varchar(20)  not null
	,rgIe					varchar(20)  null	    
	);   
    
	 create table funcionario(
	id int primary key AUTO_INCREMENT
	,nomeCompleto   	    varchar(450) not null
    ,nomeResumido   	    varchar(450) not null
    ,email				    varchar(150)	
    ,telefone			    varchar(14) 
	,dataNascFund			datetime
	,documento			    varchar(20)  not null
	,rgIe					varchar(20)  null	  
    ,numero					int
    ,salario				decimal(10,2)
    ,cargo					varchar(300)
    ,dataAdmissao			datetime
    ,dataDemissao			datetime
    ,jornadaMensal			int
	);   


	create table endereco(
	 id int primary key AUTO_INCREMENT
	,logradouro		varchar(150)	 not null
    ,bairro			varchar(150)
	,numero		    varchar(20)		
    ,cidade		    varchar(350)	 not null
	,uf				varchar(2)		 not null	
	,cep		    varchar(9) 		 
    ,complemento 	varchar(500) 	
	,idCliente		int 		  	  null
    ,idFuncionario	int 		  	  null
    ,idFornecedor	int 		  	  null
	,CONSTRAINT fk_cliente_endereco FOREIGN KEY (idCliente) REFERENCES cliente (id)
    ,CONSTRAINT fk_fornecedor_endereco FOREIGN KEY (idFornecedor) REFERENCES fornecedor (id)
    ,CONSTRAINT fk_funcionario_endereco FOREIGN KEY (idFuncionario) REFERENCES funcionario (id)
	);
	

	create table produto(
	id			  int primary key AUTO_INCREMENT    
    ,nome   	  varchar(250)   not null
    ,quantidade   decimal(10,2)  not null
    ,codigoBarra  varchar(500)   not null	
	,valorCusto   decimal(10,2) 
    ,valorVenda   decimal(10,2)     
	,marca		  varchar(250)	 not null
    ,ncm		  varchar(250)	
	);

	/*
	private Calendar dataVenda;
	private int numeroVenda;
	private int numeroNota;
    private Cliente cliente;  
	*/
	create table compra(
	id int primary key AUTO_INCREMENT
    ,idCliente			int
    ,idFuncionario		int    
	,dataCompra		   datetime
    ,valorTotalCompra 	decimal(10,2)
	,numeroNota			int 		
	,constraint fk_cliente_venda foreign key (idCliente) references cliente(id)
	,CONSTRAINT fk_funcionario_compra FOREIGN KEY (idFuncionario) REFERENCES funcionario (id)
	
	);
	create table itemCompra(
	idCompra int
	,idProduto int
	,quantidade decimal(10,2)	
    ,valorProduto decimal(10,2)
    ,subTotal decimal(10,2)
	,constraint fk_itemvenda_compra foreign key (idCompra) references compra(id)
	,constraint fk_itemvenda_produto foreign key (idProduto) references produto(id)
	
	);