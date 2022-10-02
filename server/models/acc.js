const mongoose = require('mongoose')

const accountschema = new mongoose.Schema({
    accountid: mongoose.Schema.Types.String,
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    first_visit: mongoose.Schema.Types.Date,
    latest_visit: mongoose.Schema.Types.Date,
    statistics: [
        {
            type: "general",
            xp: mongoose.Schema.Types.Number,
        },

        {
            type: "resources",
            gold: mongoose.Schema.Types.Number,
            silver: mongoose.Schema.Types.Number,
            metal: mongoose.Schema.Types.Number,
        }
    ]
})

const Accounts = mongoose.model('accounts', accountschema)