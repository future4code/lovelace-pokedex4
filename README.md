![Pokedex_Readme_Header](https://user-images.githubusercontent.com/85365177/131227200-f6e212c5-9c9c-41c9-a330-76ec51ab156f.png)


## Link do Surge:  
- https://illustrious-weight.surge.sh/


## Planejamento Inicial

- Foi criado um board no Trello contendo todas as tarefas a serem feitas pelos integrantes do grupo
- Todas as tarefas tiveram suas complexidades estimadas por pontos
- Todas as tarefas tiveram uma definição de feito
- Foram anexados materiais gráficos e links nos cards para facilitar o trabalho de quem pegar a tarefa
- Todos os cards possuem descrições detalhadas do que precisa ser feito
- Todas as tarefas tiveram um (ou mais) responsável(is).
- Nosso board de Kanban contém as seguintes colunas:
    - A fazer
    - Em progresso
    - Em teste
    - Pronto

- Foi definido o layout de todas as páginas
- Feito a definição da paleta de cores
- Foi planejado como iríamos cumprir todos os requisitos
- Construído um wireframe (esqueleto do site) na plataforma Figma


## Implementações

- Para este projeto nós consumimos dados de uma API pública, a Poke API.

- O projeto possui as seguintes páginas:
    - Home (PokeList): o usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.
    - Pokedex: o usuário deve poder ver os Pokemons que foram adicionados em sua Pokedex.
    - Detalhes do Pokemon: Deve ser possível ir para uma página de detalhes do Pokemon ao clicar no mesmo, estando tanto na Home quanto na Pokedex.
    - PokeBattle (Batalha): Criada nova funcionalidade na página Pokedex em que é possível o usuário clicar em dois Pokemons para selecioná-los e assim iniciar uma batalha. Na batalha Pokemon é verificada a soma geral dos elementos do array de stats (HP, attack, defense, special-attack, special-defense e speed). A cada ataque o Pokemon com menos força total tem sua energia reduzida e isto é demonstrado através de uma barra de energia colorida. A batalha termina quando um Pokemon perde toda sua energia e o outro Pokemon é declarado vencedor.

- Página Home
    - É a página inicial do site. Ela é responsável por mostrar a lista de Pokemons ao usuário. Essa lista contém 20 Pokemons. Cada Pokemon está representado por um Card.
    - Em cada card de Pokemon existe um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon.
    - Além disso, no header dessa página, temos um botão para acessar a página da Pokedex.
    - Ao clicar no botão de adicionar, o card do Pokemon que foi clicado desaparece da tela. Isto foi implementado para que o usuário não consiga adicionar duas vezes o mesmo Pokemon.

- Página Pokedex
    - A página da Pokedex do usuário é bem parecida com a página inicial. A diferença é que a lista de Pokemons que é renderizada na tela não vem diretamente da API, mas sim dos Pokemons previamente selecionados pelo próprio usuário.
    - Ou seja, na página inicial, o usuário pode clicar no botão "adicionar" de determinado Pokemon, e esse Pokemon aparecerá na página Pokedex.
    - Em cada card de Pokemon temos um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
    - Além disso, no Header dessa página, temos um botão para voltar para a Home, página com a lista de Pokemons vinda da API.
    - Ainda nesta página temos um card maior com o título "Batalhar". Na Pokedex é possível clicar em dois Pokemons diferentes e eles automaticamente aparecem no card Batalhar. 
    - Ainda no card Batalhar, clicando "Iniciar a Batalha" o usuário é levado até uma outra página, chamada "Batalha".

- Página Detalhes
    - Na NavBar (Header), além de um botão de voltar para a última página que o usuário estava, temos um botão (na direita) para adicionar ou remover da Pokedex a partir desta página de detalhes. Esse botão verifica se o Pokemon detalhado já está na Pokedex ou não e, a partir disso, adiciona ou remove o Pokemon da Pokedex.
    - Temos em destaque duas fotos do Pokemon. Uma de frente e uma de costas.
    - Temos as estatísticas do Pokemon como energia, ataque, defesa, special-attack, special-defense e speed. Essas estatísticas são demonstradas tanto através de uma barra colorida e intuitiva quanto por um número.
    - Temos a informação de qual é o tipo do Pokemon. Exemplo: Arbok é do tipo Poison e Raichu é do tipo Electric.
    - Por fim temos todas as informações dos golpes especiais do Pokemon. 

- Página PokeBattle (Batalha)
    - Nesta página o usuário deverá escolher entre 4 tipos de ataques disponíveis. Após o usuário clicar em um ataque, temos o resultado deste ataque sendo calculado e as barras de energia sofrem alterações de acordo com a força e energia dos dois Pokemons envolvidos.
    - Após o ataque do usuário, é a vez do ataque do Computador, e depois o usuário tem uma nova chance de atacar.
    - Ao final da batalha o usuário que tem sua energia zerada terá perdido a batalha.
    - Além disso, ao fim da batalha, o Pokemon vencedor da batalha terá seu nome destacado, demonstrando quem foi o vencedor. 
    - Temos um botão Voltar na NavBar (Header), onde o usuário poderá voltar para a Pokedex a qualquer momento.
    

## Implementações Finais e Últimas Verificações

- Implementamos Loadings sempre que o site estiver carregando alguma requisição

- Implementamos uma lógica que permite ao usuário ver todos os Pokemons, de quase mil possíveis. Como requisições muito grandes podem demorar muito e criam uma experiência ruim para o usuário, nós criamos "páginas" de Pokemons. Cada página tem cerca de 20 Pokemons, e para cada nova página, uma nova requisição por mais 20 Pokemons acontece. Para isso foi adicionado dois botões, "Voltar" e "Próximos".

- Não permitir que os Pokemons sejam adicionados mais de uma vez na Pokedex

- Implementado lógica em que ao entrar na página Pokedex, se ela estiver vazia, aparece a mensagem "Adicione mais Pokemons em sua Pokedex" e uma foto do famoso Pikachu

- Implementado lógica em que quando o usuário passa o mouse em cima de um card, um efeito de luz vermelha aparece iluminando este card como se fosse uma luz de fundo 

- Implementado o Desafio da Batalha entre dois Pokemons

- Construída interface fácil e intuitiva de se operar

- Realizada a integração com a API

- Revisado a indentação do código

- Nomenclatura de variáveis dentro do padrão e sempre no mesmo idioma

- Verificado se não foi deixado nenhum log ou registro desnecessário pelo código

- Verificado se isolamos constantes que se repetem em arquivos separados

- Implementado organização dos arquivos do projeto em pastas separadas

- Verificado se código mostra as mensagens de erro enviadas pelo back para o usuário, e não apenas no console

- Implementado uso do Global State em uma parte da aplicação

## Faltou Implementar

- Responsividade para celulares


## Integrantes do Grupo

- [Tiago Harumitsu Kodama](https://github.com/tiagoharumitsukodama)
- [Rafael Fernandes Machado](https://github.com/rafaelmach) 
- [Gustavo Carvalho Guimarães](https://github.com/GustavoCarv) 
- [Luis Carlos Nogueira Mijias](https://github.com/Luismijias) 
 
- [Labenu](https://www.labenu.com.br/) - Turma Lovelace


## Imagens:

![Página Inicial](https://user-images.githubusercontent.com/85365177/131228752-63df967c-fffe-4c89-9772-a5cd8931b3ff.png)


![Pokedex](https://user-images.githubusercontent.com/85365177/131228815-88cac875-80cf-4e5e-a2e8-cc2012f42171.png)


![Detalhes](https://user-images.githubusercontent.com/85365177/131228841-713be26f-c478-4e79-b03d-5caabcb11a24.png)


![PokeBattle](https://user-images.githubusercontent.com/85365177/131228873-8429cf40-1e88-48d7-a559-3def2972b8af.png)


