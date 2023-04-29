const request = require('request');
const expect = require('chai').expect;

describe("Suggestion Api fetching", function(){
    it("Suggestion", function(done){
        this.timeout(5000);
        request.get({url:"https://demo.reactstorefront.io/api/suggestions"},function(err, res, body){
            if (err) {
                return done(err);
            }
            var obj=JSON.parse(body)
            console.log(obj);
            expect(res.statusCode).to.equal(200)
            done();
        })
    })
})