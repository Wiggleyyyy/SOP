USE master;
GO

CREATE LOGIN [root_ERP_user] WITH PASSWORD = N'root!ROOT';
GO

USE ERP_system;
GO

CREATE USER [root_ERP_user] FOR LOGIN [root_ERP_user];
GO

ALTER ROLE db_owner ADD MEMBER [root_ERP_user];
GO