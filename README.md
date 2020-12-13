
Angular UI project
---------------------------

Software version and details:

Angular CLI: 11.0.3
Node: 14.15.1
OS: win32 x64 (Windows)

Steps to run :
1. Open command prompt and switch to demo-ui folder.
2. Execute "npm run start" , project building will start.
3. Wait for "compiled successfully" message at end.
4. Angular 	server will start at defualt 4200 port. 
5. Open browser and enter following url:  http://localhost:4200/

Basic operations to run:
--------------------------------
1. Default url will redirect to login. On successfull login, it will route to home page with welcome user message
2. Login screen has two fields:
	1. Username: Any valid email format: 
	2. Password: Password length should be of minimum 6 
	
	Example: 
		username: ambuj.nitrkl@gmail.com 
		Password: 123456
		
Features supported
------------------------
1. Routing from login to home
2. Field validators. Username should be valid email format, Password length should be minimum 6 character.  Placeholder will help to understand valid username
3. Submit buttion will be enabled only when both username and password is entered.
4. Mock user Service is added which can be easily binded with backend rest api. 
5. On successfull submit, home sceen will discplay "welcome <username>".