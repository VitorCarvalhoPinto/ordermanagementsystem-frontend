# Order Management System Frond End

Este é o projeto Order Management System, uma aplicação em ReactJs que utiliza tailwind como framework de estilização. Este documento fornece instruções sobre como configurar e executar o projeto localmente usando Docker.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado em sua máquina.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.
- [Node](https://nodejs.org/pt/download) Instalado.
- OrderManagementSystem (backend) clonado e com as configurações corretas, além de executar o seguinte comando:

```bash
docker network create OrderManagementSystem-network
```

## Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/VitorCarvalhoPinto/ordermanagementsystem-frontend.git
cd ordermanagementsystem-frontend
```

2. Certifique-se de que o arquivo `docker-compose.yml` está configurado corretamente.

3. Será necessário configurar suas secrets no projeto OrderManagementSystem, seguindo este modelo:

## Executando o Projeto

1. No diretório raiz do projeto, execute o seguinte comando para iniciar os contêineres Docker:
docker-compose up --build

2. O Docker Compose irá construir as imagens e iniciar os contêineres. O serviço da aplicação estará disponível na porta `3000`.

## Acessando a Aplicação

- A aplicação estará disponível em `http://localhost:3000`.

## Parando os Contêineres

Para parar e remover os contêineres, execute: docker-compose down

## Contribuição

Se você deseja contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.
