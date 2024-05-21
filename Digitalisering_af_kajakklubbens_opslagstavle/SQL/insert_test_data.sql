-- INSERT TEST DATA
USE Kajakklubbens_opslagstavle;
GO

INSERT INTO categories (category_name)
VALUES
('Udflugt'),
('Kursus'),
('Stævne'),
('Fællestur'),
('Fest')

INSERT INTO pictures (title, image_url, picture_description)
VALUES
('Sunset Kayaking', 'https://example.com/sunset-kayaking.jpg', 'Enjoying the sunset while kayaking.'),
('Workshop Setup', 'https://example.com/workshop-setup.jpg', 'Preparing the venue for the upcoming workshop.'),
('Conference Hall', 'https://example.com/conference-hall.jpg', 'The main hall set up for the annual conference.'),
('Get Together', 'https://example.com/get-together.jpg', 'Members having fun at the get-together.'),
('Kayak Race', 'https://example.com/kayak-race.jpg', 'Competitive kayak race event.'),
('Art Display', 'https://example.com/art-display.jpg', 'Exhibition of local artists.'),
('Live Concert', 'https://example.com/live-concert.jpg', 'Evening live concert by the river.'),
('Lecture Series', 'https://example.com/lecture-series.jpg', 'Educational lecture on environmental conservation.'),
('Charity Event', 'https://example.com/charity-event.jpg', 'Fundraiser for local wildlife.'),
('Marathon Event', 'https://example.com/marathon-event.jpg', 'Annual marathon for club members and guests.');

INSERT INTO members (first_name, last_name, email, phone)
VALUES
('John', 'Doe', 'john.doe@example.com', '555-0100'),
('Jane', 'Smith', 'jane.smith@example.com', '555-0101'),
('Alice', 'Johnson', 'alice.johnson@example.com', '555-0102'),
('Bob', 'Williams', 'bob.williams@example.com', '555-0103'),
('Charlie', 'Brown', 'charlie.brown@example.com', '555-0104'),
('David', 'Wilson', 'david.wilson@example.com', '555-0105'),
('Ella', 'Martinez', 'ella.martinez@example.com', '555-0106'),
('Frank', 'Garcia', 'frank.garcia@example.com', '555-0107'),
('Grace', 'Lee', 'grace.lee@example.com', '555-0108'),
('Henry', 'Taylor', 'henry.taylor@example.com', '555-0109');

INSERT INTO club_events (title, category, picture, host, event_date, duration, max_participants, event_description, event_location)
VALUES
('Spring Nature Trip', 1, 1, 1, '2023-05-15 09:00:00', 'Full day', 30, 'A day trip to the national park to enjoy the spring bloom.', 'National Park'),
('Photography Course', 2, 2, 2, '2023-06-01 10:00:00', '6 hours', 15, 'Comprehensive outdoor photography course in the woods.', 'Old Forest'),
('Regional Kayak Tournament', 3, 3, 3, '2023-07-20 08:00:00', 'Full day', 40, 'Compete in our exciting annual kayak tournament.', 'River Site'),
('Monthly Group Hike', 4, 4, 4, '2023-08-12 07:00:00', '5 hours', 50, 'Join the club for our monthly group hiking activity.', 'Mountain Trail'),
('Annual Club Party', 5, 5, 5, '2023-09-30 18:00:00', 'Evening', 100, 'Celebrate another great year with the club at our annual party.', 'Club House');e

INSERT INTO news (title, news, start_time, end_time, author, is_verified)
VALUES
('Kayak Course Registration Open', 'Registration for the upcoming kayak course is now open. Secure your spot!', '2023-04-01 00:00:00', '2023-04-15 23:59:59', 1, 1),
('Annual Meeting Announcement', 'The annual members meeting will discuss club developments and future plans. All members are encouraged to attend.', '2023-04-20 00:00:00', '2023-04-20 23:59:59', 2, 1),
('Cleanup Drive Success', 'Thanks to everyone who participated in the Cleanup Drive. We made a significant impact!', '2023-05-05 00:00:00', '2023-05-06 23:59:59', 3, 1),
('New Club Equipment', 'New paddles and kayaks are now available for members to use. Check them out during your next visit!', '2023-06-01 00:00:00', '2023-06-30 23:59:59', 4, 1),
('Photo Contest Winners', 'Congratulations to the winners of our annual photo contest. Check out the winning entries displayed at the clubhouse!', '2023-07-10 00:00:00', '2023-07-20 23:59:59', 5, 1),
('Volunteers Needed for Event', 'We need volunteers for the upcoming festival. Sign up to help out and have fun!', '2023-08-01 00:00:00', '2023-08-15 23:59:59', 6, 1),
('Safety Workshop Schedule', 'Join our safety workshop to learn crucial safety techniques in kayaking.', '2023-08-25 00:00:00', '2023-08-25 23:59:59', 7, 1),
('Membership Renewal Reminder', 'Don’t forget to renew your membership to continue enjoying club benefits and events.', '2023-09-01 00:00:00', '2023-09-30 23:59:59', 8, 1),
('Winter Gear Recommendations', 'Prepare for the cold season with our recommended gear list for winter kayaking.', '2023-10-05 00:00:00', '2023-10-15 23:59:59', 9, 1),
('End of Year Party Plans', 'Details on the end of year party coming soon. Stay tuned!', '2023-11-01 00:00:00', '2023-12-01 23:59:59', 10, 1);

