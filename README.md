# OPS & Inertia

## About the project

## Developmenet Dependency

Framework - Laravel & Inertia
Database - MySQL

## User

Admin account

-   email: testing@email.com
-   password: testingpassword123

Guest Account

-   email: guest@email.com
-   password: testingpassword123

User Role

0 = admin = all access (can delete things, add users, etc)
1 = designer = make products and production orders
2 = updater = update order status
3 = guest = no access

Policy

-   User - only admin
-   Product - admin, designer
-   Production - admin, designer
-   Order - admin, designer, updator
