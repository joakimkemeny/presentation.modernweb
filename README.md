# Presentation.ModernWeb

This is the presentation files and demos for the tutorial **Ways to Build a Modern Web Application**. It was originally presented at Jfokus 2013.

## Abstract

Join us in a tutorial of tools, APIs, and frameworks to build a modern web application with backend and frontend. We will make use of HTML5 (history API, semantics, sandboxed iframe etc), client-side dependency management, templating, and MVC, RESTful services in Java, a CSS preprocessor, and even a dash of web sockets. Live coding style. 

## How to run the demos

The demos in this tutorial was run on a Mac using Yeoman, Java, Maven and Apache. All these have to be installed on your computer to run the demos. Java and Maven is probably not a problem for Java developer but to install Yeoman you can follow the instructions on [http://yeoman.io/installation.html](yeoman.io/installation.html). Apple have changed the way Apache is installed in MacOS so if you have problems with that you can checkout an article by [Brett Terpstra](http://brettterpstra.com/2012/07/28/fixing-virtual-hosts-and-web-sharing-in-mountain-lion).

### Setting up the hosts

Since we want to use different domains for our demos you need to add some entries to your /etc/hosts file.

```
127.0.0.1	3rd-party.info
127.0.0.1	local.communityhack.org
```

### Setting up the virtual hosts

We use Apache as a proxy and to configure this you need to have vhosts enabled in you Apache server (see link above) and add the following code to /private/etc/apache2/extra/httpd-vhosts.conf.

 ```
 <VirtualHost *:80>
    DocumentRoot "/Library/WebServer/Documents/local.communityhack.org"
    ServerName local.communityhack.org
    ErrorLog "/private/var/log/apache2/local.communityhack.org-error_log"
    CustomLog "/private/var/log/apache2/local.communityhack.org-access_log" common
	ProxyRequests Off
	<Proxy *>
		Order deny,allow
		Allow from all
	</Proxy>
	ProxyPass /api http://local.communityhack.org:8080/api/
	ProxyPass / http://local.communityhack.org:3501/
	ProxyPassReverse /api http://local.communityhack.org:8080/api/
	ProxyPassReverse / http://local.communityhack.org:3501/
	<Location />
		Order allow,deny
		Allow from all
	</Location>
</VirtualHost>
 ```
### Run

When the requirements above have been met you can run the demos by first starting the Jetty-server in **demo-api**.

```
mvn jetty:run
```

After that you can start the web demo in **demo-web** by starting Yeoman.

```
yeoman server
```

## Contact

If you have any questions or if you want the live version of this tutorial you can contact us on
Twitter [@joakimkemeny](http://twitter.com/joakimkemeny) or [@johnwilander](http://twitter.com/johnwilander).

## License

The content of the presentation is licensed under
[Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/). If you use this software under the given license you should attribute its original authors and developers Joakim Kemeny and John Wilander, also communicating their Twitter IDs @joakimkemeny and @johnwilander.

