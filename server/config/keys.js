//logic to figure out what set of credentials to return

if (process.env.NODE_ENV === 'production'){
    //in production return prod keys
    module.exports = require('./prod');
} else{
    //in dev return dev keys
    module.exports = require('./dev');
}



//test db password: p16AzwOpZkxxfQww
//test db code: mongodb+srv://scoobydooski:p16AzwOpZkxxfQww@cluster0.gazgegv.mongodb.net/testdb?retryWrites=true&w=majority

//googleclientidprod: 489910541774-vdl6ud14l1ouhh221qmig5742ig5tn9e.apps.googleusercontent.com
//googleclientsecretprod: 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