

//Basic cypress testing 
//Seeder 
describe('Seeder Route', () => {
        it('should seed the database', () => {
          cy.request('GET', '/api/seeder').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Database seeded successfully');
      
          });
        });
});
      