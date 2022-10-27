# Uma nova maneira de pensar em JavaScript

<iframe src="http://www.youtube.com/embed/Hxyy829mz_o" frameborder="0"></iframe>

### 📓 Transcrição da aula

Você já parou para pensar no porquê de você pensar da forma como pensa quando está codificando?

Já considerou que pode ter aprendido algo da maneira errada e estar levando isso para a sua vida como uma verdade?

Perguntas como essas são meio pretensiosas, eu reconheço! Contudo, temos que considerar que essa é uma possibilidade real e que, identificando essa possível realidade, podemos melhorar a forma que pensamos ao construir nosso código.

Vamos seguindo tópico por tópico. Abra somente conforme você progredir no vídeo!

- **Dando a partida**
  Sem recorrer a ferramentas, leia o seguinte código e tente identificar os valores de `n1` e `n2`

```jsx
let n1 = 6;
let n2 = n1;
n1 = 0;
```

Relaxe: a intenção aqui não é te ensinar sobre variáveis no JavaScript. Eu sei que você já manja disso! Quero somente que perceba e reflita sobre como você _pensa no código._
Como segundo exercício de pensamento, quero que você releia o código acima. Contudo, desta vez com a intenção de realmente ter a certeza do resultado.
Preste bastante atenção! A intenção disso tudo é muito importante. E preste atenção ao que acontece na sua mente ao pensar!
Talvez você tenha construído um monólogo como este:

- `let n1 = 6;`
  - Declarar a variável chamada `n1` e definir como 6
- `let n2 = n1;`
  - Declarar a variável chamada n2 como igual a n1
  - Então, se `n1` é igual a 6, logo `n2` também é igual a 6
- `n1 = 0;`
  - Mudar o valor da variável n1 para 0
- Então `n1` agora é 0, e `n2` é 6
  Enfim, talvez a sua conversa interior tenha sido diferente, ou talvez você tenha usado termos como atribuir valor tal em vez de definir, ou até algo diferente e até em um resultado diferente. Quem sabe?
  O que temos que observar é que essa conversa interior não captura realmente o que acontece! Se você falou `definir/atribuir n2 como n1`, somos levados a pensar seguinte: o que significa definir uma variável?
  Descobriremos que, em cada conceito fundamental da programação, tais como variáveis ou mesmo operações sobre variáveis (como é o caso de definição de valores), há conjuntos de analogias enraizadas que podemos ter associado em nossas mentes.
  Um tipo de analogia muito comum é aquela de que variáveis são como caixas que guardam as coisas. Mesmo que você não imagine mais caixas quando vê uma variável, elas podem estar se comportando como tal em sua imaginação, e é esse tipo de coisa que consideramos como modelos mentais.
  Infelizmente, às vezes, nossos modelos mentais estão errados, por talvez termos acompanhado algum tutorial que lemos no início da carreira, o qual pode ter sacrificado a precisão conceitual ao explicar algo em prol de torná-lo mais facilmente explicável naquele momento.
  Pode ainda acontecer de trazermos comportamentos e pensamentos vindos de outras linguagens que aprendemos anteriormente ao JavaScript, e esse é um problema que iremos juntos corrigir nesse mini-treinamento.

---

- **Aquecendo os motores**
  Existe um livro chamado ["Rápido e devagar: Duas formas de pensar”](https://amzn.to/3JeCZEE) que explora dois sistemas diferentes que nós usamos quando pensamos.
  Geralmente e quase sempre usamos o sistema "rápido”, que é muito bom em padrões e reações institivas, que, alías, são necessárias para nossa sobreviência. Um bom exemplo disso é a nossa capacidade de andar sem cair. Contudo, é preciso reconhecer: ele não é muito bom em planejamento.
  O nosso sistema "lento”, por outro lado é responsável pelo raciocínio estilo passo a passo, mais complexo. Ele é o que nos permite planejar coisas futuras, argumentar e resolver, por exemplo, problemas matemáticos.
  Contudo, usar esse sistema "lento” é desgastante mentalmente, e é por isso que tendemos a sempre optar pelo sistema "rápido”, inclusive quando lidamos com tarefas intelectivas como programar.
  Vamos ao seguinte exercício:
  Imagine que você está atolado em trabalho e quer identificar rapidamente o que essa função faz. Dê uma olhada nela abaixo:
  ```jsx
  function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
      throw new Error('Salve o arquivo antes de duplicar.');
    }
    let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      metadata: original.metadata
    };
    copy.metadata.title = 'Copia de' + original.metadata.title;
    return copy;
  }
  ```
  Você provavelmente percebeu o seguinte:
  - Esta função duplica uma planilha.
  - Ela lança um erro se a planilha original não estiver salva.
  - Ela acrescenta "Cópia de” ao título da nova planilha.
  - Porém…
    O que você pode não ter notado (e parabéns se notou), é que essa função altera de maneira acidental o título da planilha original. Acredite, esse tipo de bug acontece todos sempre durante o dia a dia da pessoa que programa.
    Quando usamos o sistema "rápido”, tentamos adivinhar o que o código faz com base em sua estrutura geral, convenções, nomenclaturas e comentários. Contudo, ao usar o sistema "lento”, refazemos mentalmente o passo a passo do que o código faz, o que é mais cansativo e demorado.
    É por isso que ter um modelo mental preciso é tão importante. Simular um computador em sua cabeça é difícil e, quando você precisa usar o sistema de pensamento "lento”, seu modelo mental é tudo em que você pode confiar.
    Se, porém, o seu modelo mental estiver errado, você entenderá fundamentalmente mal o que esperar do seu código e todo o seu esforço terá sido em vão.
    Não se preocupe se você não conseguir encontrar o bug - isso significa apenas que você aproveitará ao máximo este curso!

---

- **Trocando de marcha**
  Espero que você tenha percebido o quão importante é o modo como pensamos quando vamos codar! Na próxima aula, começaremos a construir nossa nova maneira de pensar. Começaremos com alguns conceitos dos mais fundamentais do JavaScript, que são _valores_ e _expressões._

**Estaremos juntos nesta jornada, Aventureiros e Aventureiras! 🧗**

Créditos: [Dan Abramov](https://overreacted.io/)

Adaptação: [Frank Rocha](https://www.frankrocha.dev/)
