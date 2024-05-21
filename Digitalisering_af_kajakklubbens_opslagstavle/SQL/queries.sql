USE Kajakklubbens_opslagstavle;
GO

-- Get all 'Fest' at 'Club House'
SELECT 
	club_events.title,
	club_events.event_date,
	club_events.event_description,
	club_events.event_location
FROM
	club_events
JOIN
	categories ON club_events.category = categories.id
WHERE
	categories.category_name = 'Fest' AND 
	club_events.event_location = 'Club House';
GO

-- Get all events that are over, and sort them alphabetically
SELECT 
	club_events.title AS EventTitle,
	club_events.event_date AS EventDate,
	club_events.event_description AS EventDescription,
	club_events.event_location AS EventLocation,
	categories.category_name AS CategoryName
FROM
	club_events
JOIN
	categories ON club_events.category = categories.id
WHERE
	club_events.event_date < GETDATE()
ORDER BY
	categories.category_name;
GO

-- Verify all not verified news
UPDATE news
SET is_verified = 1
WHERE is_verified = 0;
GO