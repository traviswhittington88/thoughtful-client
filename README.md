# Thoughtful 

An anonymous user friendly journaling app that performs basic CRUD operations by creating, reading, updating and deleting journal entries. 


![](src/images/thoughtfulLandingLarge)


## Startup

* Clone the project to an empty folder and initialize
* `npm t`  (basic smokescreen tests for component rendering)
* `npm start` (starts the application on port 3000)

## Production build

To create a production build use the `npm run build` command


## Registration

If you want to skip the registration process see the logging in section for default credentials.

As a first time user you can create a thoughtful account by inputting your username, password, pseudonym & fullname 

e.g.

* username - theBugs52
* password - looneytoons53$$  (must be at least 8 characters with 1 uppercase, lowercase, number & special character)
* full_name - Bugs Bunny
* pseudonym - Bugs (Pseudonyms are listed on journal entries as a way to have fun with your anonymity!)


## Logging In

Once you've registered you will be automatically redirected to the login page where you can enter your recently created credentials

### Default Credentials

* `defaultUser` 
* `AAaa11$$`

## Accessing Entries

All current journals and entries will be automatically loaded to the page. To view an entires contents click the entry header, aka the title of the entry.

This will direct you to the entry content page where you see the full entry and the owning journal on the left most sidebar

## Editing Entries

Clicking the edit button on the entry content page will redirect you to the edit entry route. Here you can change the title,
content, and/or pen name. Clicking submit will take you back to the entry content page where you will see the most up to date entry!

## Deleting Entries

Clicking the delete button from both the entry content page and the main entries list page will remove an entry from the database.. be careful where you click!!

## Viewing entries by journal

You can browse which entries belong to which journal by clicking on the journal icons in the sidebar on the left. You can also add new entries from this view as well. Once you add an entry from this view, you will be redirected to the previous screen. 

## Adding Journals

You can also add journals by simply clicking the new journal button on the sidebar in the homepage.  This will direct you to the add journal page where you enter a title for your journal and click submit. Easy as that!




