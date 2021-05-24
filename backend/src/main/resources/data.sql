INSERT INTO public.employee (id, city, country, email, first_name, last_name, password, phone_number, username) VALUES (500, 'Berlin', 'Germany', 'john.doe@gmail.com', 'John', 'Doe', '$2a$10$1LHqXD9cfefKtlBwMWupOeFRdUvDtK03vBMcKhNhm1IhVjzYT6ZRe', '555-321-8888', 'jdoe');
INSERT INTO public.employee (id, city, country, email, first_name, last_name, password, phone_number, username) VALUES (501, 'Paris', 'France', 'anna.smith@gmail.com', 'Anna', 'Smith', '$2a$10$1LHqXD9cfefKtlBwMWupOeFRdUvDtK03vBMcKhNhm1IhVjzYT6ZRe', '555-321-9999', 'asmith');

INSERT INTO public.role (id, rolename) VALUES (0, 'ROLE_ADMIN');
INSERT INTO public.role (id, rolename) VALUES (1, 'ROLE_EMPLOYEE');

INSERT INTO public.employee_role (employee_id, role_id) VALUES (500, 0);
INSERT INTO public.employee_role (employee_id, role_id) VALUES (501, 0);

INSERT INTO public.education (id, school, degree, field_of_study, start_date, end_date, employee_id) VALUES (500, 'Harvard', 'Bachelor', 'Electrical Engineering', '1980-09-22 13:35:18.847706', '1983-09-22 13:35:18.847706', 500);
INSERT INTO public.education (id, school, degree, field_of_study, start_date, end_date, employee_id) VALUES (501, 'MIT', 'Bachelor', 'Computer Science', '1985-09-22 13:35:18.847706', '1988-09-22 13:35:18.847706', 501);
INSERT INTO public.education (id, school, degree, field_of_study, start_date, end_date, employee_id) VALUES (502, 'MIT', 'Master', 'Computer Science', '1988-09-22 13:35:18.847706', '1990-09-22 13:35:18.847706', 501);

INSERT INTO public.certificate (id, name, issuing_organization, issue_date, employee_id) VALUES (500, 'Advanced Databases', 'Stanford', '2005-09-22 13:35:18.847706', 500);
INSERT INTO public.certificate (id, name, issuing_organization, issue_date, employee_id) VALUES (501, 'Java Fundamentals', 'Udemy', '2007-09-22 13:35:18.847706', 500);
INSERT INTO public.certificate (id, name, issuing_organization, issue_date, employee_id) VALUES (502, 'English Language', 'YALE', '2009-09-22 13:35:18.847706', 501);
INSERT INTO public.certificate (id, name, issuing_organization, issue_date, employee_id) VALUES (503, 'Project Management', 'Coursera', '2008-09-22 13:35:18.847706', 501);
