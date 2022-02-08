-- DROP DATABASE IF EXISTS advancedbasicsforweb;
-- CREATE DATABASE advancedbasicsforweb;
-- \c advancedbasicsforweb;

DROP TABLE IF EXISTS classes;
CREATE TABLE classes (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL
);

DROP TABLE IF EXISTS learning_objectives;
CREATE TABLE learning_objectives (
    id SERIAL PRIMARY KEY NOT NULL,
    class_id INT NOT NULL,
    objective_text VARCHAR NOT NULL
);

DROP TABLE IF EXISTS video_recording;
CREATE TABLE video_recording (
    id SERIAL PRIMARY KEY NOT NULL,
    class_id INT NOT NULL,
    video_url VARCHAR NOT NULL
);

DROP TABLE IF EXISTS source_code;
CREATE TABLE source_code (
    id SERIAL PRIMARY KEY NOT NULL,
    class_id INT NOT NULL,
    code_url VARCHAR NOT NULL
);

DROP TABLE IF EXISTS outline;
CREATE TABLE outline (
    id SERIAL PRIMARY KEY NOT NULL,
    class_id INT NOT NULL,
    outline_url VARCHAR NOT NULL
);

DROP TABLE IF EXISTS linked_lessons;
CREATE TABLE linked_lessons (
    id SERIAL PRIMARY KEY NOT NULL,
    class_id INT NOT NULL,
    link_text VARCHAR NOT NULL,
    link_url VARCHAR
);

INSERT INTO classes (title)
    VALUES('Section 1: SCSS and BEM'),
    ('Section 2: Building Responsive Components'),
    ('Section 3: UX for Asynchronous Components'),
    ('Section 4: Testing Components with Jest'),
    ('Section 5: Managing API calls and Caching'),
    ('Section 6: Testing APIs with Jest and Supertest'),
    ('Section 7: Session Storage, Local Storage, Cookies, and Cache'),
    ('Section 8: Git 1'),
    ('Section 9: Git 2'),
    ('Section 10: SQL 1'),
    ('Section 11: SQL 2'),
    ('Section 12: Contributing to Open Source');

INSERT INTO learning_objectives(class_id, objective_text)
    VALUES(1, 'Be able to Implement SCSS in a React Project'),
    (1, 'Understand SCSS nesting, partials and variables and be able to use them in a React project'),
    (2, 'Able to explain what a responsive component is'),
    (2, 'Able to use Media Queries to conditionally attach styles to the DOM'),
    (2, 'Able to build responsive components in a React project'),
    (5, 'Understand how and where API''s should be called in a React Application'),
    (5, 'Able to split code in React for better user experience and faster loading times'),
    (5, 'Able to save and access data in session storage'),
    (6, 'Implement Jest in Express app'),
    (6, 'Write and run unit tests'),
    (6, 'Write and run integration tests on specific routes'),
    (7, 'TODO'),
    (12, 'TODO');

INSERT INTO video_recording(class_id, video_url)
    VALUES(1, 'https://us06web.zoom.us/rec/share/rNUjdMBTVDzfy4nXCCPinBSRLUET4DI_6do1vSCszQ1a5GxLo1hTf73pocGNuRNB.qR5h4dfwGSXmvK1X'),
    (2, 'https://us06web.zoom.us/rec/share/XOdkPa1YWKnTllJ0GNMlYh4Mz9C90v0WMcjbkXuzl8x1YgSmsOFIBzUB7IE8ngLQ.s743OcrH7F9vsPdH'),
    (3, 'https://us06web.zoom.us/rec/share/YKboI4HnNvvUJJ71qfw3AE8E_1oXbyd5XzvTcuAHGyIdubfxftUQRDNN6c7Rn-GU.MpXjApcQuwhGbPg1'),
    (4, 'https://us06web.zoom.us/rec/share/OO03gD39Z1UdGvPmry08BlYbsGTduUjTvYx4kOY42JZdYsb3WKDdyyecpNPLijFa.mecKR7_UJo3K_qnK'),
    (5, 'https://us06web.zoom.us/rec/share/i139O6kgdlQVmKy_U-HZmjES4Os2fXc7y1qqm1NrJcT7gf0kYlWvN-b0OfMnZ_On.510fvVrueHcg7S3J'),
    (6, 'https://us06web.zoom.us/rec/share/ZpEzyy8cN0iFowpvbtWWoPZQehwFdI-ySxgWoV81xQUlAnyBtBMWuGoJ7MtXWk8V.BPNdCc-Q7sj7lLcp'),
    (8, 'https://us06web.zoom.us/rec/share/KF6XLE355wgu1y87FPuf_0tXEG5OM-1SjXoPyHEIVR4bpqRg9mdJRg7r07GO1qZs.H7DUEOoxTNxh82Tm');

INSERT INTO source_code(class_id, code_url)
    VALUES(2, 'https://github.com/werner33/react-responsive-navbar'),
    (3, 'https://github.com/werner33/button-loader'),
    (4, 'https://github.com/werner33/testing_components_with_jest'),
    (6, 'https://github.com/werner33/unit-testing-be');

INSERT INTO outline(class_id, outline_url)
    VALUES(6, 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SuperTest.md');

INSERT INTO linked_lessons(class_id, link_text, link_url)
    VALUES(1, 'What is SCSS', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSS.md'),
    (1, 'What is BEM', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/UsingBEM.md'),
    (1, 'Using SCSS in Your React Project', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSSInYourProject.md'),
    (1, 'Other SCSS Features', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SCSSFeatures.md'),
    (2, 'What is a Responsive Component', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/BuildingResponsiveComponents.md'),
    (2, 'Laying Out a Nav Bar', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/LayOutNavBar.md'),
    (2, 'Introducing Media Queries', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main'),
    (2, 'Using Hooks to Toggle Our Responsive Nav Bar', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main'),
    (4, 'Adding Your First Test', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/TestingFEComponents.md'),
    (4, 'TDD With Testing Library', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/TDDWithTestingLibrary.md'),
    (4, 'TDD with Interactive Component', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/TDDWithInteractiveComponent.md'),
    (4, 'Testing an Asyncronous Component', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/TestingAnAsyncrounousComponent.md'),
    (5, 'API Calls Overview', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/API_Management.md'),
    (5, 'Where Should Calls Be Made in an Application?', null),
    (5, 'Code Splitting in React', null),
    (5, 'Caching in Session Storage', null),
    (10, 'Understanding the Connection between SQL and Web Development', 'https://github.com/werner33/AdvancedBasicsForWeb/blob/main/SQL1.md'),
    (10, 'Refining Selectors when Making a Query', null);


-- Tests

SELECT * FROM classes;
SELECT * FROM linked_lessons;