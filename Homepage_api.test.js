


import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://demo.reactstorefront.io/api')

describe('React Storefront', () => {
    it('GET ', (done) => {
        request.get('').end((err, res) => {
            if (err) {
                done(err);
                return;
            }
    
            expect(res.statusCode).to.equal(200);
            expect(res.body.pageData.title).to.equal("React Storefront");
            done();
        });
    });
});
