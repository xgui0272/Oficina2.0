# Sistema de Cadastro de Orçamentos para Oficinas
# Deployment: http://20.125.216.168:3000/
Este projeto consiste em um sistema de cadastro de orçamentos destinado ao gerenciamento de informações em uma oficina. Ele oferece funcionalidades básicas de CRUD (Create, Read, Update, Delete), permitindo que os usuários registrem, pesquisem, editem e excluam orçamentos. Além disso, o sistema oferece recursos avançados, como pesquisa por nomes de clientes ou vendedores e uma pesquisa de intervalo de datas.

## Tecnologias Utilizadas

### Backend (Node.js)
- [Express](https://expressjs.com/): Framework web para Node.js.
- [Express Validator](https://express-validator.github.io/docs/): Middleware para validação de dados.
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS): Gerenciamento de políticas de mesma origem.
- [mysql2](https://www.npmjs.com/package/mysql2): Driver MySQL para Node.js.
- [Sequelize](https://sequelize.org/): ORM (Object-Relational Mapping) para banco de dados.

### Frontend (React)
- [Axios](https://axios-http.com/): Cliente HTTP para fazer requisições à API.
- [React Icons](https://react-icons.github.io/react-icons/): Biblioteca de ícones para React.
- [date-fns](https://date-fns.org/): Biblioteca para manipulação de datas em JavaScript.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Gerenciamento de rotas para aplicações React.

### Banco de Dados
- MySQL: Banco de dados relacional utilizado para armazenar os orçamentos e demais informações do sistema.

## Arquitetura e Comunicação

Este projeto utiliza a arquitetura MVC (Model-View-Controller) para estruturar o backend e o frontend. No entanto, vale ressaltar que a comunicação entre o frontend e o backend não segue estritamente o modelo RESTful, mas utiliza uma API para troca de informações.

## Funcionalidades Principais

- **Cadastro de Orçamentos**: Os usuários podem registrar novos orçamentos, incluindo informações sobre o cliente, vendedor, descrição e valor.

- **Pesquisa Avançada**: O sistema permite a pesquisa de orçamentos por nome de cliente ou vendedor, tornando mais fácil encontrar informações específicas.

- **Filtragem por Intervalo de Datas**: Os usuários podem pesquisar orçamentos dentro de um intervalo de datas específico, facilitando o acompanhamento de históricos.

- **Edição e Exclusão de Orçamentos**: É possível editar informações de orçamentos existentes e também excluí-los, fornecendo maior controle sobre os registros.

- **Paginação**: Os resultados da pesquisa são exibidos em páginas, com até 5 itens por página, melhorando a usabilidade.

## Passo a Passo de Instalação

Siga estas etapas para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

- **Node.js**: Certifique-se de ter o ambiente Node.js instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

### Configurando o Banco de Dados (MySQL)

#### No Windows (usando XAMPP):

1. Instale o XAMPP em [apachefriends.org](https://www.apachefriends.org/index.html).

2. Inicie o XAMPP e inicie o módulo MySQL.

3. Abra o phpMyAdmin pelo painel de controle do XAMPP ou visite [http://localhost/phpmyadmin](http://localhost/phpmyadmin) em seu navegador.

4. Crie um novo banco de dados com o nome `oficina`.

#### No Linux (usando apt-get):

1. Instale o MySQL Server em seu sistema.

2. Crie um novo banco de dados com o nome `oficina`.

3. Configure o usuário como "root" e deixe a senha em branco, ou defina uma senha de acordo com suas preferências, e atualize as informações no arquivo `backend/db/conn.js`.

### Configurando o Backend

1. Navegue até a pasta `backend`.

2. Instale as dependências necessárias executando o comando `npm install`.

3. Após a instalação das dependências, inicie o servidor Node.js com o comando `npm run server`.

### Configurando o Frontend

1. Navegue até a pasta `frontend`.

2. Instale as dependências do cliente React executando o comando `npm install`.

3. Após a instalação das dependências, inicie o frontend com o comando `npm start`.

Agora, o projeto estará configurado e em execução em sua máquina local. Você pode acessá-lo em seu navegador digitando `http://localhost:3000` no endereço. Certifique-se de que o servidor backend esteja em execução antes de iniciar o frontend.
