INSERT INTO public.employee (id, city,country,email,first_name,last_name,password,phone_number,username) values (500, 'Dallas', 'Texas', 'lbev@gmail.com', 'Lino', 'Bevanda', '$2a$10$1LHqXD9cfefKtlBwMWupOeFRdUvDtK03vBMcKhNhm1IhVjzYT6ZRe', '055231231', 'lbevanda1');
INSERT INTO public.employee (id, city,country,email,first_name,last_name,password,phone_number,username) values (501, 'New York', 'New York State', 'kkad@gmail.com', 'Kerim', 'Kadusic', '$2a$10$1LHqXD9cfefKtlBwMWupOeFRdUvDtK03vBMcKhNhm1IhVjzYT6ZRe', '085231331', 'kkadusic1');
INSERT INTO public.role (id, rolename) values (0, 'ROLE_ADMIN');
INSERT INTO public.role (id, rolename) values (1, 'ROLE_EMPLOYEE');
INSERT INTO public.employee_role (employee_id, role_id) values (500,0);
INSERT INTO public.employee_role (employee_id, role_id) values (501,0);

