// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({

  data() {

    return {

      userInput: 
      { 
        text: "",
        done: false 
      },

      todos: [
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Fare la spesa',
            done: true
        },
        {
            text: 'Fare il bucato',
            done: false
        }
      ]
    }

  },

  methods: {

    removeTodo(i) {
      // console.log('click su elemento x')
      this.todos.splice(i, 1)
    },

    addTodo() {
      this.todos.push({ text: this.userInput.text });
      this.userInput = { text: '' };
    }

  }

}).mount('#app')
