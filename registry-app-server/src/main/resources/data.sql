--INSERT  INTO roles(name) VALUES('ROLE_USER');
--INSERT  INTO roles(name) VALUES('ROLE_ADMIN');

SELECT id, created_at, updated_at, email, name, password, username
	FROM public.users;