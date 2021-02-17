
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


const Transaction = {//cauculos matematicos
    all: [
        {//esse é um array
          
            description: 'luz',
            amount: -50000,
            date: '23/01/2021',
        },
    
        {
           
            description: 'Website',
            amount: 500000,
            date: '23/01/2021',
        },
    
        {
        
            description: 'lnternet',
            amount: -20000,
            date: '23/01/2021',
        },
    ],

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload() //chama a funçao reload a baixo
    },

    remove(index){
        Transaction.all.splice(index, 1)// remove 1 elemento
        App.reload()
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
        tr.innerHTML = dom.innerHTMLTransaction(transaction, index)//capitura o documento html que o return esta enviando a baixo
        tr.dataset.index = index

        dom.transactionsContainer.appendChild(tr) //adicionando os novos dados ao documento tr do html
        
    },

    innerHTMLTransaction(transaction, index) {//adcionando as variaves a baixo ex: ${var} 
        const CSSclass = transaction.amount > 0 ? "income" : "expense"//condiçao para saber se o numero é negativo 

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
                    <td class="description">${transaction.description}</td>
                    <td class="${CSSclass}">${amount}</td>
                    <td class="date">${transaction.date}</td>
                    <td><img onclick ="Transaction.remove(${index})" src="./assets/minus.svg" alt="remover transação"></td>
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
    },

    clearTransactions() {//funçao que limpa a s transiçoes para nao repetir
        dom.transactionsContainer.innerHTML = ""
    }
}


const Utils = {
    formatAmount(value){
        value = Number(value.replace(/\,\./g, "")) * 100 //multiplica o valor digitado por 100
        return value

    },

    formatDate(date){
        //split = separar coisas nesse caso o - para formatar a data ,dia, mes
        const splittedDate = date.split("-")
        return `${splittedDate[2]} / ${splittedDate[1]} / ${splittedDate[0]}`
        //separando os dias, data e mes na ordem
    },

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

const Form = {
    description: document.querySelector('input#description'),//pegando todo valor do input que tenha id description
    amount: document.querySelector('input#amount'),//pegando todo valor do input que tenha id amount
    date: document.querySelector('input#date'),//pegando todo valor do input que tenha id date 


    getValues(){
        return{
            description: Form.description.value,
            amount: Form.amount.value,//retornando apenas os valores nescessario do input com id especifico
            date: Form.date.value
    
        }
    },



    validateFields() {   //verificar se todas a informaçoes foram preenchidas
        const {description, amount, date} = Form.getValues()
        //trim == limpar espaços vazio === igual || == ou conectivo logico
        if(description.trim() === "" || 
        amount.trim() === "" ||  
        date.trim() === "") {
            //throw == jogar pra fora,  novo erro ex: criando um novo erro
            throw new Error("Por favor, preencha todos os campos")
            
        }
    },

    formatValues(){
        let {description, amount, date} = Form.getValues()
        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }
        
    },

    clearFields() {//limpando os campos
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    saveTransaction(transaction){//salvando transaçao
        Transaction.add(transaction)
    },

    submit(event) {
        event.preventDefault()//tira o comportamento padrao do potao permitindo criar um novo comportamento

        try{
        Form.validateFields()
        //formatar os dados para salvar
        const transaction = Form.formatValues()
        //salvar
        Form.saveTransaction(transaction)
        //apagar os dados do formulario
        Form.clearFields()
        //fechar o modal tela de cadastro
        Modal.close()
        }catch (error){//PEGAR ERROS CRIADO COMO throw
            alert(error.message) //pegando o erro e dando um alerta!
        }
     
        
    }
}

//dom.addTransaction(transactions[0]) mostrando os dados por indice
//dom.addTransaction(transactions[1])
//dom.addTransaction(transactions[2])

const App = {
    init() {//adciona os itens todos


        Transaction.all.forEach(dom.addTransaction)
        dom.updateBalance()

    },

    reload() {
        dom.clearTransactions()//chama a funçao que nao repete os itens ja existentes

        App.init()
    },
}


App.init()



