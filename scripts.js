
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
            amount: -50000
        }
        {}
        {}]

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