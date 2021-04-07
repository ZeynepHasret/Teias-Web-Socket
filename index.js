const WebSocket = require("ws")

const ws = new WebSocket("wss://webapi.teias.gov.tr/socket.io/?locale=tr-TR&token=&EIO=4&transport=websocket", null)
    

ws.on("open", () => {
    console.log("Connection established.")
})
 
msgCount = 0
ws.on("message", (data) => {
    console.log(data)
    msgCount++
    sendBack(data)
})

const messageArray = [
'40/b1b98b89-658b-498f-b492-28f33030a808,',
'42/b1b98b89-658b-498f-b492-28f33030a808,0["gallery",{"filters":{"slug":"logos"}}]',
'42/b1b98b89-658b-498f-b492-28f33030a808,3["stats","frequency",null]',
'3'
]

function sendBack(msg) {
    switch (msgCount) {
        case 1:
            ws.send(messageArray[0])
            break;
        case 3:
            ws.send(messageArray[1])
            break;
        case 4:
            ws.send(messageArray[2])
            break;
        case 9:
            ws.send(messageArray[3])
            break;
        default:
            break;
    }

    if (data = "2") {
        ws.send(messageArray[3])
    }
}
