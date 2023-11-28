CREATE TABLE Users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    middleName TEXT,
    lastName TEXT,
    phoneNumber TEXT,
    email TEXT UNIQUE NOT NULL,
    password TEXT
);

CREATE TABLE Applications (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    userID INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(ID)
);

CREATE TABLE Sessions (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    expiresAt TEXT NOT NULL,
    userID INTEGER NOT NULL,
    applicationID INTEGER,
    FOREIGN KEY (userID) REFERENCES Users(ID),
    FOREIGN KEY (applicationID) REFERENCES Applications(ID)
);