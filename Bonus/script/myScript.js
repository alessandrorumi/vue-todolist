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
