## **Routes for exercises and users**
### **User routes**
*register a user*  
URL: http://localhost:5000/api/users/register  
Method: POST  
Body: { "username": "", "text": "" }  

*find a user with userId in params*  
URL: http://localhost:5000/api/users/:userId  
Method: GET  
Body: {}  

*get all users*  
URL: http://localhost:5000/api/users  
Method: GET  
Body: {}

### **Exercise routes**
*add a exercise*  
URL: http://localhost:5000/api/exercises/add  
Method: POST  
Body: { "_id": 1, "text": "" }

*get all exercises*  
URL: http://localhost:5000/api/exercises  
Method: GET  
Body: {}