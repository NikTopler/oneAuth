CREATE TABLE Users (
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

CREATE TABLE Partners (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    domain TEXT NOT NULL
);

CREATE TABLE UserPartner (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    refreshToken TEXT,
    userID INTEGER NOT NULL,
    partnerID INTEGER NOT NULL,
    
    FOREIGN KEY (userID) REFERENCES Users (ID),
    FOREIGN KEY (partnerID) REFERENCES Partners (ID)
);
