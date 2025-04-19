module.exports = {
    name: "back2",

    actions: {
        acBack2: {
            rest: {
                method: "GET",
                path: "/back2",
            },
            async handler(ctx) {
                ctx.broker.emit("back1.event")
                console.log("acBack2 handler result");
                return "acBack2 handler result"
            }
        },
        ac2Back2: {
            rest: {
                method: "GET",
                path: "/back2",
            },
            async handler(ctx) {
                const res = await ctx.broker.call("back1.acBack1")
                console.log('res --- ', res);
                
                console.log("acBack2 handler result");
                return "acBack2 handler result"
            }
        }
    },

    events: {
        "back1.event"(ctx) {
            console.log("!!!", ctx);
            
        }
    }

}