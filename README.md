# slide_button
not really just one sliding button but the Raspberry pi 3 B+ GPIO control via sliding buttons

the button code was taken from proto.io as one of their freebies (thank you!),
not sure how the license will work on this one.

The idea for this control is actually based on the content of this website:
https://tutorials-raspberrypi.com/setup-raspberry-pi-node-js-webserver-control-gpios/

I didn't copy any of the code at all, it just gave me the idea. Thank you for the inspiration.

After spending all the time creating the frontend, I just got to the conclusion that this project has very
little use, apart from being a showcase project... It's unlikely that I would use this for any serious 
project. saying that this will be an interesting project to set up on the raspberry pi with all the features I would 
like to have going forward on my projects:

- Authentication
- several clients on the same server/port with realtime feedback on the status and being able to change status.
- Set levels of authorisation for read/write based on socket number.

********** adding_auth Branch **********
First time using the branch feature, so not sure how this is going to work out...

started implementing the authentication part using the AuthDemo project as a template.

Need to:
- sort out Folder/file structure
- sort out the use of views 
- Sort out the use of partials
- problem with the initialisation... should i get the socket going even if authentication is not done.
- Sort out if I need authentication on the socket connection itself or just on the page. I believe that most likely I need to get authentication on the socket or you may be able ot access as soon as you know IP and the Port.


