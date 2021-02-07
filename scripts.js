
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

        const Transaction = [{//esse é um array
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
        }

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
        const dom {
            innerHTMLTransaction(){

                const html = `<tr>
                    <td class="description">Luz</td>
                    <td class="expense">R$ 500,00</td>
                    <td class="date">23/01/2021</td>
                    <td><img src="./assets/minus.svg" alt="remover transação"></td>
                </tr>`
            }
        }