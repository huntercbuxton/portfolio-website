# Personal Portfolio Wesbite

built as a react app, replacing old php website

live version: [https://www.huntercbuxton.com]()

## dev notes

### Technologies/Dependencies:

- package manager: npm 


## design notes

Colors:

- #000000 (black) background 1 font3, (logo, theme color, link icons, nav bar, footer)
- #ffffff (white) font 1
- #DA532C (bright red) logo font, pinned tab icon
- #E4093B (muted red) font 2
- #8bd3cb (light grey) font 3

Fonts:

- icon font: 'Gilda Display'

Resources/Links:

- square icon images : [https://squaremyimage.com]()
- generate favicons etc: [https://realfavicongenerator.net]()
- canva design for logo : [https://www.canva.com/design/DAFjhkZGNgs/0KzC47fJZDn7b0HzCFnoUA/edit]()

## deployment process

### server setup steps:

1. [setting up server block with nginx on ubuntu vps](<https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)>)

note: need to modify the sites-available entry when using react-router, otherwise it won't work on any routes besides the web root. Update the 'location' so that all requests are sent to the index.html file, like this:

```
location / {
        try_files $uri $uri/ /index.html =404;
}
```

2. [enabling secure connection](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)
3. [deploy react app with nginx](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-with-nginx-on-ubuntu-20-04)

### install steps:

**Nonprod environment:**

``` 
$       npm run build
$       scp -r ./build/* hunter@huntercbuxton.com:/var/www/sit/html 
```

**Prod environment:**

``` 
$       npm run build 
$       scp -r ./build/* hunter@huntercbuxton.com:/var/www/huntercbuxton.com/html
```

If the server returns a 403 after install, may have to update the file permissions at the web root e.g.:

```
# (after connecting to vps via ssh):
sudo chmod -R 755 /var/www/huntercbuxton.com
```


### Learning Resources:

digitalocean react app deployment: 
- [https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform]()
- with ngnx : [https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-with-nginx-on-ubuntu-20-04]()

react router setup: 
- [https://reactrouter.com/en/main/start/tutorial]()
