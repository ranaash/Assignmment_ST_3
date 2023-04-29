import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://demo.reactstorefront.io/api')

describe('Cart Api fetching', () => {
    
    it('GET /cart', function(done) {
        this.timeout(5000);
        request.get('/cart').end((err, res) => {
            if (err) {
                done(err);
                return;
            }
    
            expect(res.statusCode).to.equal(200);
            expect(res.body.pageData.title).to.equal("My Cart");
            done();
        });
    });
});
