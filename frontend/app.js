document.addEventListener('alpine:init', function(){
    Alpine.data('todoapp', function(){
        return{
            todos: [],
            taskName: '',

            init(){
                fetch('https://127.0.0.1:3000/api/v1/todos')
                .then(Response => Response.json())
                .then(data => {
                    this.todos = data.data
                })
            },
            add(){
                this.todos.push(this.taskName)
                this.taskName = ''
            }
        }
    })
})

