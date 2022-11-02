# LISTA DE AEROPORTOS BRASILEIROS
(Segundo a Organização da Aviação Civil Internacional - ICAO)

Acessando o banco de dados da Organização da Aviação Civil Internacional é possível obter a lista de todos os aeroportos do mundo. A partir dessa lista, podemos ter informações de todos os aeroportos brasileiros. 

Para instalar todas as dependências necessárias, execute no terminal:
>>> npm i

Preencha os campos do arquivo .env.example conforme orientação do comentário e, em seguida, retire a extensão .example.

Para iniciar a aplicação, basta executar no terminal:
>>> npm start

Ao iniciar a aplicação, será realizado o upload de informações sobre todos os aeroportos do mundo a partir do banco de dados da ICAO.
Essas informaçãoes são armazenadas em um arquivo .JSON e, desse arquivo, são extraídas apenas informações dos aeroportos brasileiros para serem armazenados no banco de dados (SQLite). 

Rotas:
- /flight - Página Inicial, lista de todos os aeroportos
- /flight/:ida/:volta - Percurso de ida e volta, onde o acesso se dá com o uso do código da Associação Internacional de Transporte Aéreo (IATA). Exemplos:
- /flight/BSB/FOR
- /flight/GRU/SSA