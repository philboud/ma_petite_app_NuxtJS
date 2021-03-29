<template>
<div class="container">
<div class="cadrechat">
  <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group</h3>
              <br>
              <h4>N'hésitez pas à laisser vos commentaires</h4>
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
              <div class="form-group">
                  <label for="message">Message:</label>
                  <form>
                  <textarea v-model="message" class="form-control"></textarea>
                  </form>
              </div>
              <br>
              <button type="submit" class="btn btn-success">Envoyer</button>
          </form>
            <br>
                <div id="messageForm">
                    <ul class="ulbulle" v-for="(item, id) in messages" :key="id">
                        <div class="bulle"><li>{{item.user}}:<br>{{item.message}}<br>{{item.timeStamp}}<br><br></li></div>
                         </ul>
                    </div>
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
            timeStamp: '',
            user: '',
            message: '',
            messages: [],
            socket : io("https://mysterious-gorge-74405.herokuapp.com"),
        }
    },
        mounted() {
            this.user = localStorage.getItem('user')
            this.getChats() 
            this.socket.on('MESSAGE', (data) => {
            this.messages = [data, ...this.messages];
           });
    },
 methods: {
        sendMessage(e) {
            
            e.preventDefault();
            moment.locale()
            this.timeStamp = moment().format('LT')
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message,
                timeStamp: this.timeStamp
            });
            this.addChats()
            this.message = ''
        },
        async getChats () {
            
        const response = await ChatService.fetchChat()
        this.messages = response.data.chat
        moment.locale('fr')
        for(var i = 0; i < this.messages.length; i++){
                    (this.messages[i].timeStamp = moment(this.messages[i].timeStamp).calendar())
            }
        },

       async addChats () {
         await ChatService.addChat({
            user: this.user,
            message: this.message,
            timeStamp: Date.now()
      })
      this.getChats()
    }
  }    
}
    </script>

    <style scoped>
        #messageForm{
            border: 1px solid;
            margin-left:5px;
         }
        .cadrechat{
            
            margin-left: 20px;
            width: auto;
            height: 800px;
            overflow: auto;
            }
            .ulbulle{
                margin-left: -40px;
                margin-right: 5px;
            }
        .bulle{
            margin-left: 5px;
            text-align: left;
            list-style: none;
            margin-top: 10px;
            width: auto;
            padding-left: 10px;
            border: 1px solid;
            border-radius: 10px;
            background-color: aqua;
        }
    </style>