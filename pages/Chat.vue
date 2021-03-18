<template>
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages">
                  
              </div>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="form-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
                              <div>
                     <b-table striped hover :items="messages" :fields="fields"></b-table>
                </div>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
    name: 'Chat',
    data() {
        return {
            fields: [
                {key: 'user', label: 'utilisateur'},
                {key: 'message', label: 'Message'}
            ],
            user: '',
            message: '',
            messages: [],
            socket : io('localhost:3001')
        }
    },
        mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            console.log(this.messages)
        });
    },
 methods: {
        sendMessage(e) {
            
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
    },
}
    </script>