# Personal Portfolio Wesbite 

## urls:

| environment | url |
|---|---|
| prod | [https://www.huntercbuxton.com]() |
| nonprod | [https://www.sit.huntercbuxton.com]() | 


## deployment instructions: 

### install steps:

**nonprod install:**

``` 
$       npm run build
$       scp -r ./build/* hunter@huntercbuxton.com:/var/www/sit/html 
```

**prod install:**

``` 
$       npm run build 
$       scp -r ./build/* hunter@huntercbuxton.com:/var/www/huntercbuxton.com/html
```

**troubleshooting:**

If the server returns a 403 after install, may have to update the file permissions at the web root e.g.:

```
# (after connecting to vps via ssh):
sudo chmod -R 755 /var/www/huntercbuxton.com
```


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


## development notes

### Technologies/Dependencies:

- package manager: npm  
- notable dependencies: react-router-dom, fortawesome
- hosting: digitalocean ubuntu vps, using nginx
- domain name licensing: namecheap

### Learning Resources:

- [react router setup tutorial](https://reactrouter.com/en/main/start/tutorial) 
- [react app deployment tutorial (digitialocean)](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform)
- [react app deployment with nginx/ubuntu tutorial (digitialocean)](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-with-nginx-on-ubuntu-20-04)
- [how to enable secure connection tutorial (digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)
- [deploy react app with nginx tutorial (digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-with-nginx-on-ubuntu-20-04)

### how to setup new nginx server block:

[tutorial: setting up server block with nginx on ubuntu vps](<https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)>)

note: need to modify the sites-available entry when using react-router, otherwise it won't work on any routes besides the web root. Update the 'location' so that all requests are sent to the index.html file, like this:

```
location / {
        try_files $uri $uri/ /index.html =404;
}
```
