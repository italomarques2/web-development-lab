# Web Development Lab

[![Testes](https://github.com/italomarques2/web-development-lab/actions/workflows/tests.yml/badge.svg)](https://github.com/italomarques2/web-development-lab/actions/workflows/tests.yml)

Laboratório para registrar estudos de desenvolvimento web, exercícios de curso e experimentos próprios.

**Estado:** contém um exemplo original de funções e callbacks, preparado com auxílio do Codex. Outros módulos ainda não foram adicionados. Não representa a conclusão do curso.

## Executar

Pré-requisito: Node.js 24 ou superior. Não há dependências externas nem instalação de pacotes necessária.

Na pasta deste laboratório:

```powershell
npm run demo
npm test
```

A demonstração calcula quatro operações e aplica callbacks a uma lista. Os testes verificam operações, entradas inválidas, divisão por zero e o contrato de uma função recebida como argumento. Não há interface web nem serviço remoto.

## Conteúdo atual

| Assunto | Arquivos | Objetivo |
| --- | --- | --- |
| Funções de ordem superior | [calculadora.js](02-javascript/funcoes-e-callbacks/calculadora.js) | Receber uma função como argumento e delegar a ela a operação |
| Uso de callbacks | [demo.js](02-javascript/funcoes-e-callbacks/demo.js) | Comparar operações e transformação de arrays |
| Verificação de comportamento | [calculadora.test.js](02-javascript/funcoes-e-callbacks/calculadora.test.js) | Explorar contratos e casos de erro |
| Prática independente | [DESAFIOS.md](02-javascript/funcoes-e-callbacks/DESAFIOS.md) | Fazer alterações que demonstrem compreensão |
| Notas de evolução | [DIARIO.md](DIARIO.md) | Registrar problemas e soluções reais |

## Como adicionar os próximos estudos

Use pastas como `01-html-css/nome-do-exercicio`, `03-dom/nome-do-exercicio`, `04-node-apis`, `05-postgresql` e `06-react`, criando-as quando houver conteúdo. Em cada exercício, registre objetivo, origem, execução, sua alteração e dificuldade encontrada.

Referência de estudo: [The Complete Full-Stack Web Development Bootcamp, de Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/). O código atual foi criado para esta organização; não foi extraído de soluções do curso. Registre separadamente quando um exercício futuro for uma reprodução guiada.

Para apresentar este laboratório como seu trabalho, execute, compreenda e modifique os exemplos. Documente suas contribuições e a assistência recebida. Não inclua recursos do curso sem verificar sua permissão de redistribuição.
