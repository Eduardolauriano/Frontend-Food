# Olá pessoal!

O FoodExplorer é um projeto desenvolvido por mim como um desafio final da plataforma RocketSeat. Este aplicativo é um site completo de um restaurante virtual, onde o cliente pode navegar pelos pratos ou ingredientes, fazer seus pedidos e acompanhar seus pedidos. Como administrador, você também pode adicionar novos pratos, editar ou remover pratos e fazer upload das imagens.

Como não está disponível a criação de um usuário administrador, vou passar abaixo o login:

Login: adm@adm.com

Senha: admin123

# Orientações para iniciar o ambiente dev.

* Baixe o projeto lá no github.
* Abra a pasta do projeto no vsCode arrastando a pasta, ou navegue pelo terminal com o comando "cd".
* No terminal ou console, execute o comando "npm install"
* Para iniciar a aplicaçõ basta executar o comando "npm run dev"
* Obs.: Estes passos são somente do frontend do projeto, porém é os mesmos passos utilizado para o backend, o link está abaixo:

Link do Repositório back-end: https://github.com/Eduardolauriano/Backend-Food

# Navegação

## Sign In

A primeira tela que vamos encontrar é a tela de login, onde o usuário ou administrador pode se autenticar.

## Sign Up

Aqui é onde o usuário pode se cadastrar na plataforma, basta preencher todos os campos e clicar em "Criar Conta".
Obs: É permitido somente uma conta por e-mail e a senha é criptografada.

## Home

Esta é a página principal do nosso projeto. Vamos dividir esta página principal em 2 partes, sendo o cabeçalho e a tela principal com os pratos.

### Cabeçalho

No cabeçalho vamos encontrar a barra de pesquisa para verificar os pratos ou os ingredientes.temos o botão para ver os pedidos do usuário sendo possível visualizar quando o usuário estiver logado. Temos o botão para adicionar todos os pratos que só é possível visualizar quando estiver logado como Administrador, e por fim, o botão de logout.

### Principal

Aqui na parte principal nós temos a exibição de todos os pratos que foram adicionados, sendo separados por cada categoria no formato de carrosel, podendo ser visualizados de uma forma mais prática e dinâmica.

## Pedidos

Aqui poderá consultar todas as solicitações de pedido realizada,assim como a data e hora em que foram realizados.

Adicionar Pratos

Aqui somente o administrador pode inserir novos pratos, informando o nome do prato, a descrição, o preço, todos os ingredientes que consiste no prato e a imagem.

Detalhes

Quando o usuário clicar em qualquer prato, bebida ou sobrema, ele será redirecionado à outra página para verificar mais detalhes sobre o produto clicado.
