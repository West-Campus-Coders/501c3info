<div align="center">
<pre>
<img src="https://avatars.githubusercontent.com/u/150297835?s=48&v=4">
A website that gives easy access to the finances of 501(c)(3) non-profits 
West Campus Coders
</pre>
</div>

## Tools Needed:
- Git
- npm version 10.1.0 or later
- node version 20.7.0 or later
- Python/pip
  - Python Flask
  - Python BeautifulSoup (if we're using that)
### Installation for Linux/WSL
<code>node (Fresh installation)</code>
```sh
curl -sL https://deb.nodesource.com/setup_$v.x | sudo -E bash -
sudo apt-get install -y nodejs
```
- you may need to purge node if you have an older version installed. [helpful link](https://askubuntu.com/questions/594656/how-to-install-the-latest-versions-of-nodejs-and-npm)<br/>

<code>everything else</code>
```sh
#git is usually preinstalled
sudo apt install git
sudo apt install python3-pip
pip install Flask
pip install beautifulsoup4
```

# Running the frontend

clone this repository

```sh 
git clone git@github.com:West-Campus-Coders/501c3info.git
```

OR 

```sh 
git clone https://github.com/West-Campus-Coders/501c3info.git
```

install npm packages for the frontend

```sh 
cd frontend #depends on your folder
npm i 
```

run the website

```sh 
npm run dev
```

# Running the backend API

run the backend flask server
```sh
cd backend #depends on your folder
flask run 
```

# Using the website

<div style="display:flex; flex-direction:row;">
  <p></p>Once you have both frontend and backend running (on the same machine), you can use the <code>localhost</code> as the IP address as the input for the frontend. It should look like the following:</p>
  <img src="https://github.com/West-Campus-Coders/501c3info/assets/110684682/c235e05f-76c8-41a9-8c37-bdb79d191292" height=400px>
</div>

## Tasks:
- [x] make a small, functional API 
- [ ] dockerize the API 
- [ ] have the backend work with a mySQL server
- [x] create a backend class that can parse the index CSV file
- [ ] allow the backend to find the correct XML file
- [ ] send the XML information to the frontend
