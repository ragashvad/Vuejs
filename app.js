Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{key}}{{ todo?.text}} <button v-on:click="$emit(\'remove\')">Remove</button></li>'
})

const app = new Vue({
    el:'#app',
    data: {
        message: 'Testing the app',
        tooltip: 'You hovered over message on' + new Date().toLocaleString(),
        isShown:true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ],
          newItem:''
    },
    methods: {
        changeTitle(){
            this.message = "message updated"
        },
        reverseMessage() {
            this.message =  this.message.split('').reverse().join('')
        },
        addNewItem() {
            this.todos.push({text:this.newItem})
            this.newItem=''
        }
    }

})




app.message="changing the message"