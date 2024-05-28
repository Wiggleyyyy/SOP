USE password_manager;
GO

CREATE LOGIN ConnectionUser
    WITH PASSWORD = 'AppConnection!';

USE password_manager;
CREATE USER ConnectionUser
    FOR LOGIN ConnectionUser
    WITH DEFAULT_SCHEMA = dbo;

ALTER ROLE db_owner ADD MEMBER ConnectionUser;
GO