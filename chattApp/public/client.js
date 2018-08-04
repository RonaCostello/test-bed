// initializing socket, connection to server
         var socket = io.connect('http://10.21.98.145:7000');
         socket.on('connect', function(data) {
            socket.emit('join', 'Hello server from client');
         });

         // listener for 'thread' event, which updates messages
         socket.on('thread', function(data) {
            $('#thread').append('<li>' + data + '</li>');
         });

         // prevents form from submitting and sends a message to server
         $('form').submit(function(){
            var message = $('#message').val();
            console.log(message)
            // todo append emoji chars or pub bombs

            message2 = message.concat(String.fromCodePoint(0x1F60F))
            socket.emit('messages', message2);
            this.reset();
            return false;
         });
