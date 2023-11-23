CREATE TABLE users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    middleName TEXT,
    lastName TEXT,
    email TEXT UNIQUE NOT NULL,
    phoneNumber TEXT,
    googleID TEXT,
    facebookID TEXT,
    microsoftID TEXT
);

CREATE TABLE applications (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    userID INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(ID)
);

CREATE TABLE sessions (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    expiresAt TEXT NOT NULL,
    userID INTEGER NOT NULL,
    applicationID INTEGER,
    FOREIGN KEY (userID) REFERENCES Users(ID),
    FOREIGN KEY (applicationID) REFERENCES Applications(ID)
);