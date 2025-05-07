# always-fit

Plataforma desenvolvida para auxiliar os usuários no acompanhamento e gerenciamento da rotina de treinos

![image](https://github.com/user-attachments/assets/e14e172b-3d01-4db9-bb29-f513f2598973)

## Requisitos

- PHP >= 8.2
- Composer
- Node.js 
- npm

## Clonar o repositório**
   git clone https://github.com/w-bonfim/always-fit
   cd always-fit

## Instalar as dependências

composer install
npm install # ou yarn install

## Configuração do ambiente
- cp .env.example .env
  
## Configure o acesso ao banco de dados no arquivo .env:

  -DB_CONNECTION=mysql
  -DB_HOST=127.0.0.1
  -DB_PORT=3306
  -DB_DATABASE=nome_do_seu_banco
  -DB_USERNAME=seu_usuario
  -DB_PASSWORD=sua_senha
   
## Executar as migrations e seeds

-php artisan migrate

## o banco de dados pode ser populado com dados de exemplo para fins de teste.

-php artisan db:seed

## Compilar os assets

-npm run dev

## Iniciar o servidor de desenvolvimento
   
-php artisan serve


