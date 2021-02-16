
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

const transactions = [
    {//esse é um array
    id: 1,
    description: 'luz',
    amount: -50000,
    date: '23/01/2021',
},

{
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021',
},

{
    id: 3,
    description: 'lnternet',
    amount: -20000,
    date: '23/01/2021',
},
]

const Transaction = {//cauculos matematicos
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)

        console.log(Transaction.all)

    },


    incomes() {
        let income = 0;
        //pegar todas as transaçoes
        //para cada transaçao, se a transaça e maior que zero
        Transaction.all.forEach(transaction => {
            //se for maior que zero 
            if (transaction.amount > 0) {
                //somar a uma variavel e retornar a variavel
                income += transaction.amount;
            }
        })
        return income
    },

    expenses() {
        let expense = 0;
        //pegar todas as transaçoes
        //para cada transaçao, se a transaça e maior que zero
        Transaction.all.forEach(transaction => {
            //se for menor que zero 
            if (transaction.amount < 0) {
                //somar a uma variavel e retornar a variavel
                expense += transaction.amount;
            }
        })
        return expense

    },

    total() {
        //entradas menos saidas
        return Transaction.incomes() + Transaction.expenses();
    }
}


//preciso substituir os dados do hatml com os do js
const dom = {
    transactionsContainer: document.querySelector('#data-table tbody'),//procurar data-tabe etbody no documento
    addTransaction(transaction, index) { // adiciona o transition e index
        //console.log(transactions)//mostrar  valor de transaction no console do browser
        const tr = document.createElement('tr') //cria uma nova tr da tabela
        tr.innerHTML = dom.innerHTMLTransaction(transaction)//capitura o documento html que o return esta enviando a baixo
        dom.transactionsContainer.appendChild(tr) //adicionando os novos dados ao documento tr do html
    },

    innerHTMLTransaction(transaction) {//adcionando as variaves a baixo ex: ${var} 
        const CSSclass = transaction.amount > 0 ? "income" : "expense"//condiçao para saber se o numero é negativo 

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
                    <td class="description">${transaction.description}</td>
                    <td class="${CSSclass}">${amount}</td>
                    <td class="date">${transaction.date}</td>
                    <td><img src="./assets/minus.svg" alt="remover transação"></td>
                `

        return html//serve para enviar o item pra ser usado fora desse bloco
    },

    updateBalance() {//parte bonita ds numeros
        document
            .getElementById("incomeDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.incomes())

        document
            .getElementById("expenseDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document
            .getElementById("totalDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.total())
    }
}


const Utils = {
    formatCurrency(value) {//parte que transforma os numeros em moedas brasileiras
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "") // /\D/g ache tudo que for numeros  g = global e toque or vasio ""
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}


//dom.addTransaction(transactions[0]) mostrando os dados por indice
//dom.addTransaction(transactions[1])
//dom.addTransaction(transactions[2])



transactions.forEach(function (transaction) {// mostrando os dados com for
    dom.addTransaction(transaction)
})

dom.updateBalance()

Transaction.add({
    id: 39,
    description: "alo",
    amount: 200,
    date: "23/03/2021"
})

