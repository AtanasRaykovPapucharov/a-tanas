module.exports = (Observable, Subject, $) => {
    const messageReceived = msg => {
        $('#list').append(`<li>${msg}</li>`)
    }

    // Websocket Service
    function websocket(socket) {
        return {
            connect: (eventName) => {
                const subscriber = observer => {
                    socket.on(eventName, msg => {
                        console.log('received from ' + eventName + ' - ' + msg)
                        messageReceived(msg)
                        observer.next(msg)
                    })
                    return this
                }

                const publisher = Observable.create(subscriber)

                const subscription = publisher.subscribe({
                    next: msg => {
                        console.log('emitted from ' + eventName + ' - ' + msg)
                        socket.emit(eventName, JSON.stringify(msg))
                    },
                    error: err => {
                        console.log(err)
                    },
                    complete: () => {
                        console.log('complete')
                    }
                })

                const subject = Subject.create(subscription, publisher)
                return subject
            }
        }
    }

    // ChatService
    function Chat(url) {
        const socket = io(url)
        const join = websocket(socket).connect('join')
        const message = websocket(socket).connect('message')
        const response = websocket(socket).connect('response')

        return {
            url,
            sendMessage: msg => {
                message.next(msg)
            },
            sendJoin: msg => {
                join.next(msg)
            },
            sendResponse: msg => {
                response.next(msg)
            }
        }
    }

    // Component
    const chat = new Chat()
    chat.sendJoin('Just joined to chat')

    $('#form form').on('submit', (ev) => {
        ev.preventDefault()
        chat.sendMessage($('#msg').val())
        $('#msg').val('')
    })
}
