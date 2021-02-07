
        const Modal = {
            open() {
                //abrir modal
                //adicionar a class active ao modal
                document
                    .querySelector('.modal-overlay')//procura por todo html o o seletor modal-overlay
                    .classList
                    .add('active') //adiciona o active que foi construido formulario
            },

            close() {
                //fechar o modal
                //remover a class do modal
                document
                    .querySelector('.modal-overlay')//procura por todo html o modal-overlay
                    .classList
                    .remove('active') //remove o active que foi construido formulario

            }
        }

        const transactions = [{//esse é um array
            id: 1,
            description: 'luz',
            amount: -50000,
            date: '23/01/2021'
        },

        {
            id: 1,
            description: 'Website',
            amount: -500000,
            date: '23/01/2021'
        },

        {
            id: 1,
            description: 'lnternet',
            amount: -200,
            date: '23/01/2021'
        }
        ]

        const Transaction = {
            incomes(){
                //somar as entradas
            },

            expenses(){
                //somar as saidas
            },

            total(){
                //entradas menos saidas
            }
        }


        //preciso substituir os dados do hatml com os do js
        const dom = {
            addTransaction(transaction, index){ // adiciona o transition e index
                console.log(transactions)//mostrar  valor de transaction no console do browser
                const tr = document.createElement('tr') //cria uma nova tr da tabela
                tr.innerHTML = dom.innerHTMLTransaction()//capitura o documento html que o return esta enviando a baixo
            },

            innerHTMLTransaction(){//adcionando as variaves a baixo ex: ${var} 
                const html = `
                    <td class="description">${transaction.description}</td>
                    <td class="expense">${transaction.amount}</td>
                    <td class="date">${transaction.date}</td>
                    <td><img src="./assets/minus.svg" alt="remover transação"></td>
                `

                return html//serve para enviar o item pra ser usado fora desse bloco
            }
        }



        dom.addTransaction(transactions[0])