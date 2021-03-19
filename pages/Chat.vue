<template>
<div class="cadre">
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group (en cours de réalisation)</h3>
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
                  <label for="user">Utilisateur:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
                              <div id="messageForm">

                     <ul v-for="(item, id) in messages" :key="id">
                        <div class="bulle"><li>{{item.user}}:<br>{{item.message}}<br>{{item.timeStamp}}<br><br></li></div>
                         </ul>
                </div>
         </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import ChatService from '@/services/ChatService'
import moment from 'moment'

export default {
    name: 'Chat',
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io("https://mysterious-gorge-74405.herokuapp.com"),
        }
    },
        mounted() {
            this.getChats()            
            this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
             });
    },
 methods: {
        sendMessage(e) {
            
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message,
                timeStamp: moment().format('LT'),
            });
            this.addChats()
            this.message = ''
        },
        async getChats () {
        const response = await ChatService.fetchChat()
        this.messages = response.data.chat
       },

       async addChats () {
         await ChatService.addChat({
            user: this.user,
            message: this.message,
            timeStamp: moment().format('LT')
      })
    }
  }    
}
    </script>

    <style>
        #messageForm{
            border: 1px solid;
        }
        .cadre{
            width: 400px;
        }
        .bulle{
            margin-top: 10px;
            margin-left: -10px;
            width: 300px;
            padding-left: 30px;
            border: 1px solid;
            border-radius: 10px;
            background-color: aqua;
        }
    </style>