db = db.getSiblingDB("test");
db.messages.drop();
db.messages.insertMany([
    {"message":"most recently added",
	"link": "google"}, 
    {"message":"best beaches in vancouver",
	"link": "youtube"},
    {"message":"Where to go camping?",
	"link": "google"},
    {"message":"Indonesia",
    "link": "urbandictionary"}, 
    {"message":"Hello!",
    "link": "youtube"},
    {"message":"Learn React",
	"link": "youtube"},
    {"message":"Yes",
	"link": "urbandictionary"},
    {"message":"@#()!",
	"link": "google"},
    {"message":"12345",
	"link": "youtube"},
    {"message":"oldest",
	"link": "urbandictionary"}
]);
