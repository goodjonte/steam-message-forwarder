# Steam Message Forwarder
Steam Message Forwarder forwards messages from the users alt account to their main account and allows the user to reply to messages from their main account.

# install and Setup
#### 1. Install Node.js
Go to https://nodejs.org/en/ and download appropriate version.  [Video for low iq people](https://www.youtube.com/watch?v=qZQmCfkmbNA)
#### 2. Install Packages
Simply open/run the install.bat file, the cmd window will automatically close when complete
#### 3. Fill Out The Config
open the config.js file with a text editor, notepad, notepad++, etc. Then fill out the appropriate data within the ''. 

### __Make sure main_acc_ID and main_acc_ID64 are the ID's of you main account and make sure the username and password are for your alt account__

# How to reply to messages
To reply to  messages you want send a message to your alt account using this format __!reply, [steamid64], [message]__, __[steamid64]__ is the number that comes up when u get a forwarded message [as seen in this image.](https://imgur.com/a/AIEi1wN) __[message]__ is simply just the message you are wanting to send. __THE COMMAS__ are very important so do not forget them.
#### !reply Example
If i was wanting to send/reply my friend saying "How is your day?" i would do - __!reply, 76561198023414915, How is your day?__
[__Here is a video example__](https://youtu.be/g28a6xGAiiM)
###### Note: this can be used to send messages at any time, meaning the person you are wanting to send a message to would not have had to messaged you before
 
 
 
# Notes:
##### Possible future updates:
• make it so users dont have to use steamid64 to reply(this is difficult as it is hard to identify who to send the message to if the user is having multiple conversations at once)
• add !message and !msg, it would work the same as !reply but would be easier to understand for new users as it doesnt really make sence using !reply when u are just wanting to send someone a message and you not actually replying
• make a config generator(would be a localhost webpage) - easier for users




