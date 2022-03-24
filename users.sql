/*Users Table*/

CREATE TABLE public.users (
    "user_id" serial PRIMARY KEY NOT NULL,
    "username" varchar NOT NULL, 
    "password" varchar NOT NULL,
    "name" varchar NOT NULL, 
    "phone" integer NOT NULL,
);

/* Emergency Contacts table */
CREATE TABLE public.em_contacts(
	user_id integer,
	em_id integer,
	em_name varchar(255),
	em_phone integer,
	PRIMARY KEY(em_id)
);
ALTER TABLE em_contacts ADD CONSTRAINT users_fkey FOREIGN KEY (user_id) REFERENCES users(user_id);

/* Dates table */
CREATE TABLE public.dates(
	date_id integer,
	user_id integer,
	date_person varchar(255),
	location varchar(255),
	interval integer,
	date timestamp,
	active boolean,
	PRIMARY KEY (date_id)
);
ALTER TABLE dates ADD CONSTRAINT users_fkey FOREIGN KEY (user_id) REFERENCES users(user_id);