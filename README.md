README - Projeto React com JSON Server Backend
Descrição do Projeto

Este é um projeto React que utiliza um backend simulado com JSON Server. A aplicação consiste em uma interface de usuário (frontend) que se comunica com um servidor JSON (backend) para realizar operações básicas de CRUD (Create, Read, Update, Delete) em dados.
Estrutura do Projeto

frontend: Contém o código da interface de usuário desenvolvida em React.
backend: Contém os arquivos necessários para simular um servidor JSON utilizando JSON Server.

Como Rodar o Projeto
Requisitos:

Node.js instalado

Configurações:

Clone o Repositório:

    git clone https://github.com/lucasocrack/CrudCadastro.git

Acesse o a pasta     
    cd CrudCadastro

Instale as Dependências do Frontend:

Acesse a pasta:

    cd frontend

Em seguida instale dependências:

    npm install

Instale as Dependências do Backend:

Acesse a pasta do backend:

    cd ../backend

Em seguida instale dependências:

    npm install

Rodando o Projeto
Frontend

Inicie o Servidor de Desenvolvimento:

Acesse a pasta:

    cd ../frontend

Em seguida inicialize o frontend usando:

    npm start

O aplicativo estará disponível em http://localhost:3000.

Backend

Inicie o JSON Server:

Abra um novo terminal e navegue ate a pasta do backend, em seguida inicie o mesmo com comando:

    npm start

O servidor JSON estará disponível em http://localhost:3001. Os dados são servidos a partir do arquivo db.json na pasta backend.
Caso inicie o backend em porta diferente mesma precisara ser alterada no frontend no arquivo "UserCrud.jsx" na linha 11

Notas Adicionais

Certifique-se de ter o Node.js instalado na versão recomendada.
Para mais informações sobre o JSON Server, consulte a documentação oficial.

Este é um ponto de partida básico. Sinta-se à vontade para expandir e personalizar conforme necessário para o seu projeto. 
Boas codificações!