# Shared-Calendar-Chrome-Extension
This is a shared calendar chrome extension. Anyone with this extension installed can view and add events to the particular calendar(No login required)

## Here's what you need to do:
### Setting up the Calendar:
1. Go to [Google Calendar](calendar.google.com)
2. Click on 3 dots beside your calendar and select 'Settings and sharing'
3. Make sure you check the 'Make available to public' option as shown
![checking the option 'Make available to public'](https://user-images.githubusercontent.com/67150694/211154550-65df3a28-1797-4783-9a4d-55c861b37f51.png)
4. Scroll down further and you'll see 'Public Url to this calendar' under 'Integrate Calendar'. Copy the text 'https://calendar.google.com/calendar/embed?src=.....' and paste it replacing 'YOUR_CALENDAR_PUBLIC_URL' in [index.html](https://github.com/sohailakthar/Shared-Calendar-Chrome-Extension/blob/main/index.html) at line 9.

### Setting up the Google Apps Script:
1. Go to [Google Scripts](script.google.com) and login... You should be seeing an empty dashboard (https://script.google.com/home/all)
2. Click on 'New Project' and paste the contents of [script.txt](https://github.com/sohailakthar/Shared-Calendar-Chrome-Extension/blob/main/script.txt) in this project.
3. Save it and click on 'Deploy' -> 'New Deployment'
4. From 'Select type' on left, click 'Web App' as shown

      ![Deploy web app](https://user-images.githubusercontent.com/67150694/211154844-ce7f2835-95fa-4355-983d-3814d0d8a0c5.png)

5. In the 'Who has access' list, select 'Anyone' and then click on 'Deploy'
![Anyone has access](https://user-images.githubusercontent.com/67150694/211154878-a3cbfdb3-9254-469d-9f5a-624feb6200ab.png)
6. It takes some time and then displays a 'Authorize Access' button, click it.
7. A google sign in popoup appears, select an account.
8. If it shows 'Google hasn't verified this app', click on 'Advanced' and then 'Go to <project_name> project (unsafe)' and then allow the permissions.
9. Now, you can see a URL has been generated, copy it and paste it in [myscript.js](https://github.com/sohailakthar/Shared-Calendar-Chrome-Extension/blob/main/myscript.js) at line 27, replacing 'YOUR_GOOGLE_SCRIPT_URL'
10. Paste the same copied URL in [manifest.json](https://github.com/sohailakthar/Shared-Calendar-Chrome-Extension/blob/main/manifest.json) at line 7, replacing 'YOUR_GOOGLE_SCRIPT_URL'

save all the files.

### Loading the extension in Chrome.
1. Go to [Extensions](chrome://extensions/)
2. Turn on 'Developer Tools' from top right side.
3. Select 'Load unpacked' from the top left

      ![Load Unpacked](https://user-images.githubusercontent.com/67150694/211155469-a04d28a7-cee3-4a72-bec2-f7296d3964d4.png)

4. Select the folder where you've placed all your files and 'Open folder'

#### Extension should now be loaded and working. If you've got any suggestions please let me know.
#### My socials:
[LinkedIn](https://www.linkedin.com/in/sohail-akthar-3bb129110/)
[Instagram](https://www.instagram.com/ig.sohxil/)
